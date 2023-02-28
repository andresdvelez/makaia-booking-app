import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import DatePicker from "../utils/DatePicker/DatePicker";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/datepicker" element={<DatePicker />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
