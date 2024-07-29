"use client";
import React, { useState } from "react";
import z from "zod";
import { toast, Toaster } from "react-hot-toast";
import DatePicker, { DateObject } from "react-multi-date-picker";

const passwordSchema = z
  .string()
  .min(7, { message: "Password must be at least 8 characters long!!!" });

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address!!!" }),
  password: passwordSchema,
});

export const signUpSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address!!!" }),
    username: z.string().min(1, { message: "Please enter username" }),
    firstname: z.string().min(1, { message: "Please enter firstname" }),
    lastname: z.string().min(1, { message: "Please enter lastname" }),
    dateOfBirth: z.instanceof(Date, { message: "Invalid date of birth" }),
    studentId: z.string().min(1, { message: "Please enter student ID" }),
    password: passwordSchema,
    confirmPassword: z.string().min(7, {
      message: "Confirm Password must be at least 8 characters long",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type LoginForm = z.infer<typeof loginSchema>;
type SignUpForm = z.infer<typeof signUpSchema>;

interface DynamicFormProps {
  type: "login" | "signUp";
  formData: LoginForm | SignUpForm;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange?: (date: DateObject | null) => void;
  handleSubmit: (e: React.FormEvent) => void;
  errors: Record<string, string>;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ type }) => {
  const [formData, setFormData] = useState<LoginForm | SignUpForm>(
    type === "signUp"
      ? {
          email: "",
          password: "",
          confirmPassword: "",
          firstname: "",
          lastname: "",
          username:'',
          studentId: "",
          dateOfBirth: new Date(),
        }
      : { email: "", password: "" }
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: DateObject | null) => {
    setFormData({ ...formData, dateOfBirth: date ? date.toDate() : new Date() });
  };

  const validate = () => {
    try {
      if (type === "login") {
        loginSchema.parse(formData);
      } else {
        signUpSchema.parse(formData);
      }
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formErrors[err.path[0] as string] = err.message;
          }
        });
        console.log("Validation Errors:", formErrors);
        setErrors(formErrors);
      } else {
        console.error("Unexpected validation error:", error);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data is valid:", formData);
      toast.success(`${type === "login" ? "Login" : "Signup"} successful!`);
    } else {
      toast.error("Validation failed! Please check the form.");
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 border border-black">
      <Toaster />
      <h1 className="edu-au-vic-wa-nt-hand text-2xl font-semibold text-center">Connectify</h1>
      <form onSubmit={handleSubmit} className="space-y-1">
        {type === "signUp" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Student ID</label>
              <input
                type="text"
                name="studentId"
                value={(formData as SignUpForm).studentId}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
              {errors.studentId && <p className="text-red-500 text-sm">{errors.studentId}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstname"
                value={(formData as SignUpForm).firstname}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
              {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={(formData as SignUpForm).lastname}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
              {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={(formData as SignUpForm).username}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <DatePicker
                onChange={handleDateChange}
                value={(formData as SignUpForm).dateOfBirth}
                className="mt-1 p-2 border rounded-md w-full"
              />
              {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={(formData as SignUpForm).confirmPassword}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
            <a href="/" className="text-blue-700 hover:text-red-400">Already have account?</a>
          </>
        )}
        {type === "login" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <a href="/signup" className="text-blue-700 hover:text-red-400">Don't have account?</a>
          </>
        )}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          {type === "login" ? "Login" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
