import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main2 from './components/main/Main2';
import Main from './components/main/Main';
import Login from './components/account/Login';
import Register from './components/account/Register';
import PreLoginScreen from './components/account/PreLoginScreen';
import IntroScreen from './components/account/IntroScreen';
import WelcomeScreen from './components/account/WelcomeScreen';
import Balance from './components/balance/Balance';
import Favorite from './components/account/Favorite';
import Profile from './components/account/Profile';
import Map from './components/map/Map';
import ForgotPassword from './components/account/ForgotPassword';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main2 />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/screen/pre-login" element={<PreLoginScreen />} />
        <Route path="/screen/intro" element={<IntroScreen />} />
        <Route path="/screen/welcome" element={<WelcomeScreen />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Main2 />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/favorite" element={<Favorite />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
