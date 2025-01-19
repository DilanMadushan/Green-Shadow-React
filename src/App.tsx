import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Crop from "./pages/Crop";

function App() {
  return (
    <>
      
      <NavBar />

  
      <div className="grid grid-flow-col grid-cols-1 lg:flex">
        <SideBar />
        <div className="flex-1">
          <Crop />
        </div>
      </div>
    </>
  );
}

export default App;
