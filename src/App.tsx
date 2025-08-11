import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main2 from './components/main/Main2';
import Login from './components/account/Login';
import Register from './components/account/Register';
import PreLoginScreen from './components/account/PreLoginScreen';
import IntroScreen from './components/account/IntroScreen';
import WelcomeScreen from './components/account/WelcomeScreen';
import Profile from './components/account/Profile';
import Map from './components/map/Map';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/screen/pre-login" element={<PreLoginScreen />} />
        <Route path="/screen/intro" element={<IntroScreen />} />
        <Route path="/screen/welcome" element={<WelcomeScreen />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
