import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import Crop from "./pages/Crop";
import Field from "./pages/Field";
import LOG from "./pages/Log";
import Staff from "./pages/Staff";
import Equipment from "./pages/Equipment";
import Vehicle from "./pages/Vehicle";

function App() {
  return (
    <>
      
      <NavBar />

  
      <div className="grid grid-flow-col grid-cols-1 lg:flex">
        <SideBar />
        <div className="flex-1">
          {/* <Crop /> */}
          {/* <Field /> */}
          {/* <LOG/> */}
          {/* <Staff/> */}
          {/* <Equipment/> */}
          <Vehicle/>
        </div>
      </div>
    </>
  );
}

export default App;
