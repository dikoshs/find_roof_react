import IntroScreenImage from "../../assets/images/IntroScreenImage.jpg";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";


const IntroScreen = () => {

  return (
    <div className="relative h-screen w-full">
      <button
        className="absolute top-6 left-6 flex items-center text-gray-500 hover:text-gray-700"
        onClick={() => window.history.back()}
      >
        <ChevronLeft className="w-7 h-7 me-1" />
      </button>

      <img
        src={IntroScreenImage}
        alt="IntroScreenImage"
        className="w-full h-[70%] object-cover"
      />

      <div className="absolute h-2/5 bottom-0 left-0 w-full bg-white rounded-t-[50px] p-8">
        <h2 className="text-center mt-4 text-lg font-semibold mb-6">
          Зарегистрироваться в виде:
        </h2>

        <p className="text-center text-gray-700 mt-10">
          <Link to="/screen/pre_login" className="text-green-700 hover:underline">
            Дальше
          </Link>
        </p>
      </div>
    </div>
  )
}

export default IntroScreen
