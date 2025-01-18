import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <>
      <nav className="bg-white flex justify-between text-center items-center px-5 shadow-md z-999 ">
        <FontAwesomeIcon
          icon={faBars}
          className="text-[2rem] text-[#318eda] block lg:hidden"
          onClick={() => {
            const sidebar = document.getElementById("sidebar");
            if (sidebar.classList.contains("left-[0]")) {
              sidebar.classList.remove("left-[0]");
              sidebar.classList.add("left-[-256px]");
            } else {
              sidebar.classList.remove("left-[-256px]");
              sidebar.classList.add("left-[0]");
            }
          }}
        />

        <div className="flex text-center items-center gap-10">
          <h2 className="text-[2.5rem] font-bold text-[#318eda]">
            Green Shadow
          </h2>
          <div className="bg-white px-5 items-center gap-5 text-center text-[1.2rem] rounded-full sm-hidden hidden lg:block">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-3" />
            <input
              type="text"
              className="w-60 h-10 focus:outline-none bg-transparent"
              placeholder="Search Heare"
            />
          </div>
        </div>

        <div className="flex text-gray-500 text-center gap-2">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/mike-tyson-looks-on-prior-to-the-heavyweight-fight-between-news-photo-1716476934.jpg?crop=0.640xw:0.961xh;0.154xw,0.0391xh&resize=640:*"
            alt=""
            className="w-[50px] h-[50px] rounded-[100%] my-2 hidden sm:block"
          />
          <div className=" justify-center hidden sm:block">
            <h5>Mike Tyson</h5>
            <p>Manger</p>
          </div>
        </div>
      </nav>
    </>
  );
}
