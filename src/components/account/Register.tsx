import { useState } from 'react';
import primaryIcon from "../../assets/images/find_roof_icon.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center p-8">
      {/* Логотип с фиксированной высотой */}
      <div className="flex items-center h-80">
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

        <p className="text-center text-gray-700 mt-10">
          Есть аккаунт?{" "}
          <Link to="/login" className="text-green-700 hover:underline">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
