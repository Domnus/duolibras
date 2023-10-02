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
import Home from "./src/routes/Home";
import Animais from "./src/routes/Animais";
import Navbar from "./src/components/NavBar/Navbar";
import Cores from "./src/routes/Cores";
import Opcao5 from "./src/routes/opcao5";
import Opcao6 from "./src/routes/opcao6";
import "./src/App.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/reports" element={<Reports />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "animais",
        element: <Animais />,
      },
      {
        path: "substantivos",
        element: <Substantivos />,
      },
      {
        path: "cores",
        element: <Cores />,
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
