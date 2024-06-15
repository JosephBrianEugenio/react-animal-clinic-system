import firstImage from "../assets/first-hero-image.jpg";
import { useNavigate } from 'react-router-dom';
const LoginComponent = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    let path = `/app/records`;  
    navigate(path);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={firstImage} alt="" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h6 className="text-4xl font-bold text-center py-6">Joseph</h6>
          <div>
            <label
              htmlFor="email"
              className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="user@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-start mb-0 mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="*****"
              type="password"
            />
          </div>
          <button onClick={handleSignIn} className="border w-full my-5 py-2 hover:bg-indigo-500 text-white button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
