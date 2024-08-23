// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthCard from "./components/AuthCard";
import ResetPassword from "./components/ResetPassword";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./components/Home";
import PriceList from "./components/Pricelist";
import PickupRequest from "./components/PickupRequest";
import Contact from "./components/Contact";
import Category from "./components/Category";
import About from "./components/About";
import Paper from "./components/Paper";
import Plastic from "./components/Plastic";
import IronItems from "./components/IronItems";
import CopperItems from "./components/CopperItems";
import ElectronicItems from "./components/ElectronicItems";
import MetalOthers from "./components/MetalOthers";
import Glass from "./components/Glass";
import Team from "./components/Team";
import CharityPlan from "./components/Charityplan";

import "./index.css";

const App = () => {
  return (
    <Router>
      <Header /> {/* Header will be consistent across all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/pickup-request" element={<PickupRequest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/paper" element={<Paper />} />
        <Route path="/plastic" element={<Plastic />} />
        <Route path="/iron-items" element={<IronItems />} />
        <Route path="/copper-items" element={<CopperItems />} />
        <Route path="/electronic-items" element={<ElectronicItems />} />
        <Route path="/metal-others" element={<MetalOthers />} />
        <Route path="/glass" element={<Glass />} />
        <Route path="/sign-in" element={<AuthCard />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/team" element={<Team />} />
        <Route path="/charity" element={<CharityPlan />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
