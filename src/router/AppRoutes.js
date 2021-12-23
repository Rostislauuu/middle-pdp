import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Recaptcha from "../recaptcha";
import ReduxPersist from "../components/ReduxPersist";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/recaptcha" element={<Recaptcha />} />
            <Route path="/redux-persist" element={<ReduxPersist />} />
        </Routes>
    )
}
