import { useNavigate } from "react-router-dom";
import "./Welcome.css";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="centered-container">
      <div className="mobile-card">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Buttons for navigation */}
        <button className="btn btn-primary" onClick={() => navigate("/signup")}>
          Create Account
        </button>
        <button className="btn btn-secondary" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
