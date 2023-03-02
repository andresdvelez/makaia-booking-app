import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import Flights from "../Screens/Flights/Flights";
import TimesReservation from "../components/TimesReservation/TimesReservation";
import SeatScreen from "../Screens/SeatScreen/SeatScreen";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/vuelos" element={<Flights />}>
          <Route path="/vuelos" element={<TimesReservation />} />
          <Route path="/vuelos:id" element={<SeatScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
