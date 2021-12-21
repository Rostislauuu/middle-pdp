import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Recaptcha from "../recaptcha";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/recaptcha" element={<Recaptcha />} />
        </Routes>
    )
}
