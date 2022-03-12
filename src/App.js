import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import ItemPreview from "./Components/ItemPreview";
import Counter from "./Counter";

const App = () => {
  return <React.Fragment>
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/:id" element={<ItemPreview />}></Route>
    </Routes>
  </React.Fragment>;
};

export default App;
