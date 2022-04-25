import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TotalContextProvider } from "./context/TotalNew";
import { AuthContext, AuthContextProvider } from "./context/Auth";
import { LogoutContext,Logout } from "./components/Logout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TotalContextProvider>
      <AuthContextProvider>
        <Logout>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Logout>
      </AuthContextProvider>
    </TotalContextProvider>
  </React.StrictMode>
);
