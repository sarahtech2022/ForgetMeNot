import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loves from "./components/Loves";
import Family from "./components/Family";
import Friends from "./components/Friends";
import { Auth0Provider } from "@auth0/auth0-react";

const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const CLIENTID = import.meta.env.VITE_AUTH0_CLIENT_ID;

console.log(DOMAIN, "This is my DOMAIN");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/loves",
    element: <Loves />,
  },
  {
    path: "/family",
    element: <Family />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENTID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
