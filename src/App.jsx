import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './pages/loginpage';
import SignUp from './pages/signup';
import Home from './pages/home';
import Donatebook from './pages/donatepage';
import Cart  from './pages/Cart';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donatebook />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
