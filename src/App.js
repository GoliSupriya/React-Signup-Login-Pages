import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AccountSettings from "./components/AccountSettings";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/settings" element={<AccountSettings />} />
      </Routes>
    </div>
  );
}

export default App;
