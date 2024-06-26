import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firstImage from "../assets/first-hero-image.jpg";
import useLoginFetch from "../hooks/Authentication/Login"; 

const LoginComponent = () => {
  const navigate = useNavigate();

  const userRef = useRef(null);
  const errRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("admin");
  const [password, setPassword] = useState("admin");
  const { login, errMsg, success } = useLoginFetch();

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await login(userName, password);
    setIsLoading(false);

    if (result.success) {
      navigate("/records");
    } else {
      errRef.current.focus();
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={firstImage} alt="" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-4"
          onSubmit={onHandleSubmit}
        >
          <h6 className="text-4xl font-bold text-center py-6">Joseph</h6>
          <div>
            <label
              htmlFor="username"
              className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="border w-full my-5 py-2 hover:bg-indigo-500 text-white button"
            disabled={isLoading}
          >
             {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;