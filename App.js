import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Substantivos from "./src/routes/Substantivos";
import Verbos from "./src/routes/Verbos";
import Animais from "./src/routes/Animais";
import Navbar from "./src/components/NavBar/Navbar";
import Cores from "./src/routes/Cores";
import Opcao5 from "./src/routes/Opcao5";
import Opcao6 from "./src/routes/Opcao6";
import Home from "./src/routes/Home";

import "./src/App.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",  // " / " direicona para pagina incial
        element: <Home/>,
      },
      {
        path: "verbos", 
        element: <Verbos/>, 
      },
      {
        path: "animais", // Caminhos das rotas
        element: <Animais/>, // Componentes que serão renderizados
      },
      {
        path: "substantivos",
        element: <Substantivos/>,
      },
      {
        path: "cores",
        element: <Cores/>,
      },
      {
        path: "opcao5",
        element: <Opcao5/>,
      },
      {
        path: "opcao6",
        element: <Opcao6/>,
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


export default App;
