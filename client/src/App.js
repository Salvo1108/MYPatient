// -- React and related libs
import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";

// -- Custom Components
import Login from "./pages/Login/Login";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import InsertPatient from "./pages/Insert/InsertPatient";
import SeeAllPatient from "./pages/Result/seeAllPatient";
import RequireAuth from "./redux/RequireAuth";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/login" exact element={<Login />} />
          </>
          <Route element={<Layout />}>
            <Route element={<RequireAuth />}>
              <Route path="/dashboard" exact element={<LandingPage />} />
              <Route path="/insert" element={<InsertPatient />} />
              <Route path="/list" element={<SeeAllPatient />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
