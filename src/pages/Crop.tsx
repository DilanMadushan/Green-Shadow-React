import ImagePicker from "../components/ImagePicker";
import SideBar from "../components/SideBar";

export default function Crop() {
  return (
    <div>
      <div className="bg-blue-50 w-full">
        <div className="mx-10 pb-10">
          <h1 className="text-[#8dc6f5] font-bold text-[3rem] mb-10 pt-10">
            CROP MANAGE
          </h1>

          <div className=" bg-white p-12 rounded-lg">
            <ImagePicker id="crop-image-picker" />

            <div className="grid grid-cols-3 gap-x-5 gap-y-5 ">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ">
                  Crop Code
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                  placeholder="CR001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ">
                  Name
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                  placeholder="White Rice"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ">
                  Scientific Name
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                  placeholder="Triticum "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ">
                  Sesson
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                  placeholder="Summer"
                />
              </div>

              <div className="w-full flex flex-col mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1 ">
                  Category
                </label>
                <select
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                  name="integration[city_id]"
                  id="integration_city_id"
                >
                  <option value="Category">Category</option>
                </select>
                <p className="text-sm text-red-500 hidden mt-3" id="error">
                  Please fill out this field.
                </p>
              </div>

              <div className="w-full flex flex-col mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1 ">
                  Field
                </label>
                <select
                  className=" w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all "
                  name="integration[city_id]"
                  id="integration_city_id"
                >
                  <option value="Field">Field</option>
                </select>
                <p className="text-sm text-red-500 hidden mt-3" id="error">
                  Please fill out this field.
                </p>
              </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Crop Code
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Common Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Session
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Field
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple Watch 5
                    </th>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4">Wearables</td>
                    <td className="px-6 py-4">$999</td>
                    <td className="px-6 py-4">$999</td>
                    <td className="px-6 py-4 flex gap-4">
                      <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </span>
                      <span className="font-medium text-red-600 dark:text-red-500 hover:underline">
                        Delete
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple Watch 5
                    </th>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4">Wearables</td>
                    <td className="px-6 py-4">$999</td>
                    <td className="px-6 py-4">$999</td>
                    <td className="px-6 py-4 flex gap-4">
                      <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </span>
                      <span className="font-medium text-red-600 dark:text-red-500 hover:underline">
                        Delete
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple Watch 5
                    </th>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4">Wearables</td>
                    <td className="px-6 py-4">$999</td>
                    <td className="px-6 py-4">$999</td>
                    <td className="px-6 py-4 flex gap-4">
                      <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </span>
                      <span className="font-medium text-red-600 dark:text-red-500 hover:underline">
                        Delete
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple Watch 5
                    </th>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4">Wearables</td>
                    <td className="px-6 py-4">$999</td>
                    <td className="px-6 py-4">$999</td>
                    <td className="px-6 py-4 flex gap-4">
                      <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </span>
                      <span className="font-medium text-red-600 dark:text-red-500 hover:underline">
                        Delete
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end mt-5">
              <button
                type="button"
                className="text-white bg-[#318eda] hover:bg-[#4b9ada] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add
              </button>

              <button
                type="button"
                className="text-white bg-[#da3131] hover:bg-[#da4b4b] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Close
              </button>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}
