import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar-container relative">
      <aside className="card-bg sidebar header" aria-label="Sidebab">
        <img src="/icons/car_logo.svg" alt="car logo" />
        <img src="/icons/CARS_CRYPTO.svg" className="mt-2.5" alt="car logo" />
      </aside>
      <aside className="card-bg sidebar relative" aria-label="Sidebab">
        <div className=" absolute right-0 " style={{ right: "-11px" }}>
          <img
            src="/icons/fast-forward.png"
            width={20}
            height={20}
            alt=""
            className="bg-slate-300 p-1 rounded-full"
          />
        </div>
        <div className="overflow-y-auto py-4 px-3  rounded">
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard">
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700">
                  {/* <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="/icons/garage.png"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg> */}
                  <img
                    src="/icons/dashboard.png"
                    width={30}
                    height={30}
                    alt=""
                    className="bg-slate-300 p-1 rounded"
                  />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Dashboard
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/points">
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700">
                  {/* <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg> */}
                  <img
                    src="/icons/Star.svg"
                    width={30}
                    height={30}
                    alt=""
                    className="bg-slate-300 p-1 rounded"
                  />

                  <span className="flex-1 ml-3 whitespace-nowrap">Points</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/luxury-rental">
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700">
                  {/* <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg> */}
                  <img
                    src="/icons/electric-car.png"
                    width={30}
                    height={30}
                    alt=""
                    className="bg-slate-300 p-1 rounded"
                  />

                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Luxury Rental
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/garage">
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700">
                  {/* <svg
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                            clip-rule="evenodd"
                                        ></path>

                                    </svg> */}
                  <img
                    src="/icons/garage.png"
                    width={30}
                    height={30}
                    alt=""
                    className="bg-slate-300 p-1 rounded "
                  />

                  <span className="flex-1 ml-3 whitespace-nowrap">Garage</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="absolute sidebarBottom bottom-0">
        <div className="px-3">
          <div>Account</div>
          <br />

          <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700">
            <img
              src="/icons/dashboard.png"
              width={25}
              height={25}
              alt=""
              className="bg-slate-300 p-1 rounded"
            />
            <span className="flex-1 ml-3 whitespace-nowrap">Setting</span>
          </div>
        </div>
        <br />
        <div className="bg-slate-600 px-1 w-100 rounded-lg sideBar_account_box flex items-center justify-around">
          <img
            src="/icons/electric-car.png"
            width={45}
            height={45}
            alt=""
            className="bg-slate-300 p-1 rounded-full"
          />
          <div className="ml-2">
            <div className="text-lg">xyzxyz</div>
            <div className="text-xs">11axyz@gmail.com</div>
          </div>
          <img
            src="/icons/more.png"
            width={25}
            height={25}
            alt=""
            className=" p-1 ml-2 "
          />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
