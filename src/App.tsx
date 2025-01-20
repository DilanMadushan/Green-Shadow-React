import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import Crop from "./pages/Crop";
import Field from "./pages/Field";
import LOG from "./pages/Log";
import Staff from "./pages/Staff";
import Equipment from "./pages/Equipment";
import Vehicle from "./pages/Vehicle";
import SignUP from "./pages/SignUp";

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUP /> },
    { path: "/crop", element: <Crop /> },
    { path: "/field", element: <Field /> },
    { path: "/log", element: <LOG /> },
    { path: "/staff", element: <Staff /> },
    { path: "/equipment", element: <Equipment /> },
    { path: "/vehicle", element: <Vehicle /> },
  ]);

  return (
    <>
      <NavBar />
      <div className="grid grid-flow-col grid-cols-1 lg:flex">
        <SideBar />
        <div className="flex-1">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
