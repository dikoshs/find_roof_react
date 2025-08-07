import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './components/main/Main';
import Login from './components/account/Login';
import Register from './components/account/Register';
import PreLoginScreen from './components/account/PreLoginScreen';
import IntroScreen from './components/account/IntroScreen';
import WelcomeScreen from './components/account/WelcomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/screen/pre_login" element={<PreLoginScreen />} />
        <Route path="/screen/intro" element={<IntroScreen />} />
        <Route path="/screen/welcome" element={<WelcomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
