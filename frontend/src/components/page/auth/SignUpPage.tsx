
import DynamicForm from "../DynamicForm";
import useSignUp from "../../hooks/useSignUp";

const SignUpPage: React.FC = () => {
  const [
    formData, 
    errors, 
    handleInputChange, 
    handleDateChange, 
    handleSubmit, 
  ] = useSignUp();

  return (
    <DynamicForm
      type="signUp"
      formData={formData}
      handleInputChange={handleInputChange}
      handleDateChange={handleDateChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default SignUpPage;
