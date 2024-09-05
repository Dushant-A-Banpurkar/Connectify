/* eslint-disable @typescript-eslint/no-explicit-any */
// useLogin.ts
import { useState } from 'react';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { ZodError } from 'zod';
import { loginSchema } from '../components/DynamicForm';

interface LoginForm {
  email: string;
  password: string;
}

const login = async (data: LoginForm): Promise<any> => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return response.json();
};

const useLogin = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const mutation: UseMutationResult<any, Error, LoginForm> = useMutation({
    mutationFn: login,
    onError: (error: any) => {
      setErrors({ general: error.message });
    },
    onSuccess: (data: any) => {
      // Handle successful login, e.g., navigate to a different page
      console.log('Login successful:', data);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      loginSchema.parse(formData);
      setErrors({});
      mutation.mutate(formData);
    } catch (err) {
      if (err instanceof ZodError) {
        const formattedErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          formattedErrors[error.path[0]] = error.message;
        });
        setErrors(formattedErrors);
      }
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    errors,
    ...mutation, // Expose mutation state and methods if needed
  };
};

export default useLogin;
