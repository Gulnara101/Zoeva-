import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
       <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
    </div>
  );
};

export default App;
