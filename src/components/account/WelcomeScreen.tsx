import React from 'react'
import WelcomeScreenImage from "../../assets/images/WelcomeScreenImage.png";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full">
      <img
        src={WelcomeScreenImage}
        alt="WelcomeScreenImage"
        className="w-full object-cover"
      />

      <div className="text-center mt-9">
        <h1 className="text-2xl">Добро пожаловать!</h1>
        <button 
            onClick={() => navigate('/screen/intro')}
            className="bg-[#136E64] mt-10 text-white p-4 w-[200px] rounded-[15px] hover:bg-[#2fa597]">
          Начать
        </button>
      </div>

    </div>
  )
}

export default WelcomeScreen
