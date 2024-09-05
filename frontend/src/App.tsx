import React from "react";
import { Routes, Route } from "react-router-dom"; //Libaray
import LoginPage from "./components/page/auth/LoginPage"; //Files
import SignupPage from "./components/page/auth/SignUpPage"; //Files

const App: React.FC = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
  </Routes>
);

export default App;
