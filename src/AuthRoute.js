import React from "react";
import { Route, Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { auth } from "./pages/firebase";

const AuthRoute = ({ path, component: Component, ...rest }) => {
    const isAuthenticated = auth.currentUser !== null;

    return (
        <Route
            path={path}
            element={
                isAuthenticated ? (
                    <Component {...rest} />
                ) : (
                    <Navigate to="/login" replace />
                )
            }
        />
    );
};

export default AuthRoute;
