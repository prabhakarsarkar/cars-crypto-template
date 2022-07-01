import Link from "next/link";
import React from "react";
import { useEffect } from "react";

const Sidebar = () => {
  const handleClick = () => [
    document.getElementById("sidebar-container")?.classList.toggle("minimise")
  ]

    return (
        <div id="sidebar-container" className="sidebar-container relative">
            <aside className="card-bg sidebar header" aria-label="Sidebab">
                <img className="logo-icon" src="/icons/car_logo.svg" alt="car logo" />
                <img  src="/icons/CARS_CRYPTO.svg" className="logo-txt mt-2.5" alt="car logo" />
            </aside>
            <aside id="sidebar" className="card-bg sidebar  relative" aria-label="Sidebab">
                <div onClick={handleClick} id="min-max-icon" className="absolute right-0 " style={{ right: "-11px" }}>
                    <img src="/icons/fast-forward.png" width={20} height={20} alt="" className="bg-slate-300 p-1 rounded-full" />
                </div>
                <div className="overflow-y-auto py-4 px-3  rounded">
                    <ul className="space-y-2">
                        <li>
                            <Link href="/dashboard">
                                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700">
                                    <img src="/icons/dashboard.png" width={30} height={30} alt="" className="bg-slate-300 p-1 rounded" />
                                    <span className="flex-1 ml-3 whitespace-nowrap side-nav-text">Dashboard</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/points">
                                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700">
                                    <img src="/icons/Star.svg" width={30} height={30} alt="" className="bg-slate-300 p-1 rounded" />
                                    <span className="flex-1 ml-3 whitespace-nowrap side-nav-text">Points</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/luxury-rental">
                                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700">
                                    <img src="/icons/electric-car.png" width={30} height={30} alt="" className="bg-slate-300 p-1 rounded" />

                                    <span className="flex-1 ml-3 whitespace-nowrap side-nav-text">Luxury Rental</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/garage">
                                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700">
                                    <img src="/icons/garage.png" width={30} height={30} alt="" className="bg-slate-300 p-1 rounded " />

                                    <span className="flex-1 ml-3 whitespace-nowrap side-nav-text">Garage</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            <aside className="absolute sidebarBottom bottom-0">
                <div className="px-3 bottom-account">
                    <div>Account</div>
                    <br />

                    <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700">
                        <img src="/icons/dashboard.png" width={25} height={25} alt="" className="bg-slate-300 p-1 rounded" />
                        <span className="flex-1 ml-3 whitespace-nowrap side-nav-text">Setting</span>
                    </div>
                </div>
                <br />
                <div className="bg-slate-600 px-1 w-100 rounded-lg sideBar_account_box flex items-center justify-around">
                    <img src="/icons/electric-car.png" width={45} height={45} alt="" className="bg-slate-300 p-1 rounded-full icon-item" />
                    <div className="ml-2 sidebar-bottom-title">
                        <div className="text-lg">xyzxyz</div>
                        <div className="text-xs">11axyz@gmail.com</div>
                    </div>
                    <img src="/icons/more.png" width={25} height={25} alt="" className="more-icon p-1 ml-2 " />
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
