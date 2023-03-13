import React, { memo } from "react";
import { Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Assortment from "./pages/Assortment/Assortment";
import Contacts from "./pages/Contacts/Contacts";
import DriedFruits from "./pages/DriedFruits/DriedFruits";
import Fruits from "./pages/Fruits/Fruits";
import Man from "./pages/Man/Man";
import Sweet from "./pages/Sweet/Sweet";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/assortment" element={<Assortment />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/driedFruits" element={<DriedFruits />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/man" element={<Man />} />
        <Route path="/sweet" element={<Sweet />} />
      </Routes>
    </>
      
  );
}

export default memo(App);
