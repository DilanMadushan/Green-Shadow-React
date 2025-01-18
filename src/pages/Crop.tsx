import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function Crop() {
  return (
    <div>
      <div className="bg-blue-50 h-screen lg:ml-[16rem]">
        <div className="mx-10">
          <h1 className="text-[#8dc6f5] font-bold text-[3rem] mb-10 pt-10">CROP MANAGE</h1>

          <div className="grid grid-cols-2 gap-x-5 gap-y-5 align-middle bg-white p-12 rounded-lg">

          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1 ">
              
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-50 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>

            
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 ">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 ">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 ">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>


          </div>


        </div>
      </div>
    </div>
  );
}
