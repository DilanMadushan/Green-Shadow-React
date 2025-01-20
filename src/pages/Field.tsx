import ImagePicker from "../components/ImagePicker"

export default function Field() {
  return (
    <div>
      <div className="bg-blue-50 w-full">
        <div className="mx-10 pb-10">
          <h1 className="text-[#8dc6f5] font-bold text-[3rem] mb-10 pt-10">
            FIELD MANAGE
          </h1>

          <div className=" bg-white p-12 rounded-lg">

          <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 ">
                <ImagePicker id="field-image-picker1" />
                <ImagePicker id="field-image-picker2" />
            </div>

            <div className="grid grid-cols-3 gap-x-5 gap-y-5 ">
                
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ">
                  Field Code
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                  placeholder="F001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ">
                  Name
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                  placeholder="Main"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ">
                  Location
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                  placeholder="Center "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 ">
                  Size of Field
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2  focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
                  placeholder="150.0"
                />
              </div>

              
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Field Code
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Location
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
    
  )
}
