import LandingScreenImage from "../../assets/images/LandingScreenImage.avif";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";


const PreLoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full">
      <button
        className="absolute top-6 left-6 flex items-center text-gray-500 hover:text-gray-700"
        onClick={() => window.history.back()}
      >
        <ChevronLeft className="w-7 h-7 me-1" />
      </button>

      <img
        src={LandingScreenImage}
        alt="LandingScreenImage"
        className="w-full h-[70%] object-cover"
      />

      <div className="absolute h-[400px] bottom-0 left-0 w-full bg-white rounded-t-[50px] p-8">
        <h2 className="text-center mt-4 text-lg font-semibold mb-6">
          Зарегистрироваться в виде:
        </h2>

        <div className="flex flex-col mt-12 space-y-6">
          <button 
            onClick={() => navigate('/register')}
            className="w-full p-4 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-700 font-medium"
          >
            Арендодатель
          </button>
          <button 
            onClick={() => navigate('/register')}
            className="w-full p-4 bg-[#3BB9A6] text-white rounded-xl font-semibold"
          >
            Арендатор
          </button>
        </div>

        <p className="text-center text-gray-700 mt-10">
          Есть аккаунт?{" "}
          <Link to="/login" className="text-green-700 hover:underline">
            Войти
          </Link>
        </p>
      </div>
    </div>
  )
}

export default PreLoginScreen
