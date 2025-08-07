import IntroScreenImage from "../../assets/images/IntroScreenImage.jpg";
import { Link } from "react-router-dom";

const IntroScreen = () => {

  return (
    <div className="relative h-screen w-full">
      <img
        src={IntroScreenImage}
        alt="IntroScreenImage"
        className="w-full h-[70%] object-cover"
      />

      <div className="absolute h-[350px] bottom-0 left-0 w-full bg-white rounded-t-[50px] p-8">
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
