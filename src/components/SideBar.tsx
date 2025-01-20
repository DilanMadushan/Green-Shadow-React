import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge,faSeedling,faWater,faBook,faPeopleGroup,faHammer,faTractor,faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";

export default function SideBar() {
  return (
    
      <div>
        <nav  className="bg-[#F6F9F8] w-[16rem] border-r relative h-full left-[-16rem] lg:left-0  duration-100" id="sidebar">

        <ul className="space-y-4 pt-4">
          <li className="nav-item " id="dashboard_nav" onClick={() => window.location.href = "/"}>
            <a className="flex items-center gap-3 font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md shadow-md">
              {/* <i className="icon-grid menu-icon mr-3"></i> */}
              <FontAwesomeIcon icon={faGauge} />
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item" id="crop_nav" onClick={() => window.location.href = "/crop"}>
            <span className="flex items-center gap-3 font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md shadow-md">
             <FontAwesomeIcon icon={faSeedling} />
              <span className="menu-title">Crops</span>
            </span>
          </li>
          <li className="nav-item" id="field_nav" onClick={() => window.location.href = "/field"}>
            <span className="flex items-center gap-3 font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md shadow-md">
            <FontAwesomeIcon icon={faWater} />
              <span className="menu-title">Fields</span>
            </span>
          </li>
          <li className="nav-item" id="monitering-log_nav" onClick={() => window.location.href ="/log"}>
            <span className="flex items-center gap-3 font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md shadow-md">
            <FontAwesomeIcon icon={faBook} />
              <span className="menu-title">Monitoring Log</span>
            </span>
          </li>
          <li className="nav-item" id="staff_nav" onClick={() => window.location.href ="/staff"}>
            <span className="flex items-center gap-3 font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md shadow-md">
            <FontAwesomeIcon icon={faPeopleGroup} />
              <span className="menu-title">Staff</span>
            </span>
          </li>
          <li className="nav-item" id="equipment_nav" onClick={() => window.location.href ="/equipment"}>
            <span className="flex items-center gap-3 font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md shadow-md">
            <FontAwesomeIcon icon={faHammer} />
              <span className="menu-title">Equipments</span>
            </span>
          </li>
          <li className="nav-item" id="vehicle_nav" onClick={() => window.location.href ="/vehicle"}>
            <span className="flex items-center gap-3 font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md shadow-md">
            <FontAwesomeIcon icon={faTractor} />
              <span className="menu-title">Vehicle</span>
            </span>
          </li>
          <li className="nav-item pt-16" id="logout" onClick={() => window.location.href ="/login"}>
            <span className="flex items-center gap-3 font-bold mx-2 p-3 text-gray-500 hover:bg-red-500 hover:text-white active:bg-red-500 duration-200 rounded-md shadow-md">
            <FontAwesomeIcon icon={faRightFromBracket} />
              <span className="menu-title">Log Out</span>
            </span>
          </li>
        </ul>

        </nav>
      </div>
  );
}
