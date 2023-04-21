import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Person from "./components/Person";
import Planet from "./components/Planet";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="container">
      <Form />
      {/* Renders form component */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Renders route component */}
        <Route path="/people/:id" element={<Person />} />
        {/* remember to keep routes plural to follow convention */}
        <Route path="/planets/:id" element={<Planet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* ^ Define routes in here */}
    </div>
  );
}

export default App;
