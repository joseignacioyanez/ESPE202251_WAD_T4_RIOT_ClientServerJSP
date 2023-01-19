//API Consumer 
//Author: Robert Denilson Sanguña
// Based on: https://youtu.be/TzAfN8qlCtg

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiList from "./components/api_public/Api-List";
import InformationList from "./components/api_information/Imformation_List"
const App =() => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApiList />} />
        <Route path="/informationClient" element={<InformationList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
