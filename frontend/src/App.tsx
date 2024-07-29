import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//Libaray
import LoginPage from './components/page/LoginPage';//Files
import SignupPage from './components/page/SignUpPage';//Files

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </Router>
);

export default App;
