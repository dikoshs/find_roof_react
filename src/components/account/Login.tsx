import { useState, useEffect } from "react";
import primaryIcon from "../../assets/images/find_roof_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { clearError, login } from "../../redux/slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, loading, error } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  // по вводу можно очищать глобальную ошибку
  useEffect(() => {
    if (error) dispatch(clearError());
  }, [email, password]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // unwrap выбросит исключение, если thunk завершится rejected
      await dispatch(login({ email, password })).unwrap();
      // редирект произойдёт в useEffect по isAuthenticated
    } catch (err) {
      // тут можно показать тост/локальную ошибку при желании
      // error уже лежит в redux state.error
    }
  };


  return (
    <div className="h-screen flex flex-col items-center p-8">
      <button
        className="absolute top-6 left-6 flex items-center text-gray-500 hover:text-gray-700"
        onClick={() => window.history.back()}
      >
        <ChevronLeft className="w-7 h-7 me-1" />
      </button>

      <div className="flex items-center h-1/2">
        <img src={primaryIcon} alt="Logo" className="w-16 h-16" />
      </div>

      <form 
        onSubmit={onSubmit} 
        className="space-y-4 w-full max-w-sm"
      >
        {(error) && (
          <p className="text-center text-sm text-red-600">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring focus:ring-[#489D94]"
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring focus:ring-[#489D94]"
          required
        />

        <div className="text-right">
          <Link to="/forgot-password" className="text-sm text-[#006696] hover:underline">
            Забыли пароль?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 mt-6 bg-[#136E65] hover:bg-[#0A443F] text-white rounded-[10px] transition disabled:opacity-60"
        >
          {loading ? "Входим..." : "Войти"}
        </button>

        <div className="text-center text-sm text-gray-700 m-7">
          Нет аккаунта?{" "}
          <Link to="/screen/pre-login" className="text-green-700 hover:underline">
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
