import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";

export default function SideBar() {
  return (
    <>
      {/* <ul className=" bg-white w-1/6 h-screen text-white text-[16px] font-medium flex flex-col md:ml-[2rem]">

        <li className="bg-[#00C9B7] mt-5 p-4 mx-2 rounded-xl hover:bg-[#27e5c9] hover:text-black duration-100 ">
          <FontAwesomeIcon icon={faGauge} className="pr-3"/>
          <span>Dashboard</span>
        </li>

        <li className="bg-[#00C9B7] mt-5 p-4 mx-2 rounded-xl hover:bg-[#27e5c9] hover:text-black duration-100">
          <FontAwesomeIcon icon={faGauge} className="pr-3" />
          <span>Crops</span>
        </li>

        <li className="bg-[#00C9B7] mt-5 p-4 mx-2 rounded-xl hover:bg-[#27e5c9] hover:text-black duration-100">
          <FontAwesomeIcon icon={faGauge} className="pr-3" />
          <span>Fields</span>
        </li>

        <li className="bg-[#00C9B7] mt-5 p-4 mx-2 rounded-xl hover:bg-[#27e5c9] hover:text-black duration-100">
          <FontAwesomeIcon icon={faGauge} className="pr-3" />
          <span>Monitering log</span>
        </li>

        <li className="bg-[#00C9B7] mt-5 p-4 mx-2 rounded-xl hover:bg-[#27e5c9] hover:text-black duration-100">
          <FontAwesomeIcon icon={faGauge} className="pr-3" />
          <span>Staff</span>
        </li>

        <li className="bg-[#00C9B7] mt-5 p-4 mx-2 rounded-xl hover:bg-[#27e5c9] hover:text-black duration-100">
        <FontAwesomeIcon icon={faGauge} className="pr-3" />
          <span>Equipments</span>
        </li>

        <li className="bg-[#00C9B7] mt-5 p-4 mx-2 rounded-xl hover:bg-[#27e5c9] hover:text-black duration-100">
        <FontAwesomeIcon icon={faGauge} className="pr-3" />
          <span>Vehicle</span>
        </li>

      </ul> */}

      <nav
        className="sidebar bg-[#f0f8ff] w-64 border-r h-screen relative left-[-16rem] lg:left-0 duration-100"
        id="sidebar"
      >
        <ul className="space-y-4 pt-4">
          <li className="nav-item " id="dashboard_nav">
            <span className="flex items-center font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md">
              <i className="icon-grid menu-icon mr-3"></i>
              <span className="menu-title">Dashboard</span>
            </span>
          </li>
          <li className="nav-item" id="crop_nav">
            <span className="flex items-center font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md">
              <i className="fa-brands fa-pagelines icon-grid menu-icon mr-3"></i>
              <span className="menu-title">Crops</span>
            </span>
          </li>
          <li className="nav-item" id="field_nav">
            <span className="flex items-center font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md">
              <i className="fa-solid fa-water icon-grid menu-icon mr-3"></i>
              <span className="menu-title">Fields</span>
            </span>
          </li>
          <li className="nav-item" id="monitering-log_nav">
            <span className="flex items-center font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md">
              <i className="fa-solid fa-book icon-grid menu-icon mr-3"></i>
              <span className="menu-title">Monitoring Log</span>
            </span>
          </li>
          <li className="nav-item" id="staff_nav">
            <span className="flex items-center font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md">
              <i className="fa-solid fa-people-roof icon-grid menu-icon mr-3"></i>
              <span className="menu-title">Staff</span>
            </span>
          </li>
          <li className="nav-item" id="equipment_nav">
            <span className="flex items-center font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md">
              <i className="fa-solid fa-screwdriver-wrench icon-grid menu-icon mr-3"></i>
              <span className="menu-title">Equipments</span>
            </span>
          </li>
          <li className="nav-item" id="vehicle_nav">
            <span className="flex items-center font-bold mx-2 p-3 text-gray-500 hover:bg-[#318eda] hover:text-white active:bg-[#318eda] duration-200 rounded-md">
              <i className="fa-solid fa-tractor icon-grid menu-icon mr-3"></i>
              <span className="menu-title">Vehicle</span>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
}
