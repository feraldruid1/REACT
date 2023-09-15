import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<Error></Error>}></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
