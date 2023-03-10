import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { AddEvent } from "../pages/event/AddEvent";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import { PrivateRoute } from "./auth/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/add-event"
        element={
          <PrivateRoute>
            <AddEvent />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
