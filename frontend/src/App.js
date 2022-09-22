// Imports React Properties/packages
import React from "react";
import { Routes, Route } from "react-router";

// Imports React Components
import Home from "./pages/Home";
import Create from "./pages/Create";
import SingleTrek from "./pages/SingleTrek";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treks/:id" element={<SingleTrek />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
