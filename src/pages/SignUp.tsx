export default function SignUp() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Sign Up
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="w-full flex flex-col mb-3">
            <label className="font-semibold text-gray-600 py-2">
              ROle<abbr title="required">*</abbr>
            </label>
            <select
              className=" outline-none block w-full bg-grey-lighter text-grey-darker border focus:ring-[#318eda] focus:border-[#318eda] rounded-lg h-10 px-4 md:w-full "
              required="required"
              name="integration[city_id]"
              id="integration_city_id"
            >
              <option value="">Manager</option>
              <option value="">Scientist</option>
              <option value="">Employe</option>
            </select>
            <p className="text-sm text-red-500 hidden mt-3" id="error">
              Please fill out this field.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318eda] focus:border-[#318eda] outline-none transition-all"
              placeholder="••••••••"
            />
          </div>


          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-[#318eda] hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>

          <button className="w-full bg-[#318eda] hover:bg-[#2395f1] duration-100 text-white font-medium py-2.5 rounded-lg transition-colors">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?
          <a
            href="#"
            className="text-[#318eda] hover:text-indigo-500 font-medium"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
