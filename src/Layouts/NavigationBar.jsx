import { useState, useEffect } from "react";
import { Link, Outlet, Navigate } from "react-router-dom";
import useGetUser from "../hooks/User/User";
import { Avatar, Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useLoginFetch from "../hooks/Authentication/Login";

const Layout = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useLoginFetch();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { user, getUserFromAPI } = useGetUser();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    getUserFromAPI();
  }, []);

  useEffect(() => {
    if (!isAuthenticated()) {
      return navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a
                className="flex ms-2 md:me-24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Joseph Animal Clinic System
                </span>
              </a>
            </div>
            <div class="flex items-center">
              <div class="flex items-center ms-3">
                <div className="flex md:order-2">
                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <div className="w-8 h-8">
                        <Avatar
                          alt="User settings"
                          img={
                            user?.profilePicture ||
                            "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          }
                          rounded
                          className="w-full h-full"
                        />
                      </div>
                    }
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">
                        {user?.name || user?.username || ""}
                      </span>
                      <span className="block truncate text-sm font-medium">
                        {user?.email || "Loading..."}
                      </span>
                    </Dropdown.Header>
                    <Dropdown.Item onClick={handleLogout}>
                      Sign out
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-grow">
        <aside
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-full pt-20 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/records"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm0 10h-4.286A1.857 1.857 0 0 0 10 11.857v4.286C10 17.169 10.831 18 11.857 18h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Zm-10 0H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Z" />
                  </svg>
                  <span className="ms-3">Records</span>
                </Link>
              </li>
            </ul>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/create-record"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm0 10h-4.286A1.857 1.857 0 0 0 10 11.857v4.286C10 17.169 10.831 18 11.857 18h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Zm-10 0H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Z" />
                  </svg>
                  <span className="ms-3">Create Records</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <main className="flex-grow ml-0 sm:ml-64 p-4 pt-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
