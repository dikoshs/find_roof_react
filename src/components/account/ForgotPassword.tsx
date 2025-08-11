import { useState } from 'react';
import { ChevronLeft } from "lucide-react";
import primaryIcon from "../../assets/images/find_roof_icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  return (
    <div className="h-screen flex flex-col items-center p-8">
      <button
        className="absolute top-6 left-6 flex items-center text-gray-500 hover:text-gray-700"
        onClick={() => window.history.back()}
      >
        <ChevronLeft className="w-7 h-7 me-1" />
      </button>

      <div className="flex items-center h-1/2">
        <img
          src={primaryIcon}
          alt="Logo"
          className="w-16 h-16"
        />
      </div>

      {/* Форма с email */}
      <div className="w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring focus:ring-[#489D94]"
          required
        />

        <button className="w-full p-3 mt-6 bg-[#136E65] hover:bg-[#0A443F] text-white rounded-[10px] transition">
          Продолжить
        </button>

      </div>
    </div>
  );
}

export default ForgotPassword
