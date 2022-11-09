import React, { createContext, useContext } from "react";
import "./App.css";
import {
  Home,
  About,
  Dashboard,
  Transfer,
  History,
  Navigation,
  NoMatch,
  MyNest,
  ErrorFallback,
  ProtectedRoute,
  AuthProvider,
  Intro,
} from "./components";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

export const AuthContext = createContext(null);
export const useAuth = () => {
  return useContext(AuthContext);
};

const App = () => {
  return (
    <div className="container">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* <Farewell /> */}
        <AuthProvider>
          <Navigation />
          <Intro />
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />

            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboards"
              element={
                <ProtectedRoute>
                  <Transfer />
                </ProtectedRoute>
              }
            />
            <Route
              path="history"
              element={
                <ProtectedRoute>
                  <History />
                </ProtectedRoute>
              }
            >
              <Route path="nested" element={<MyNest />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </AuthProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
