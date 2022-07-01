import React, { useState } from "react";

const Header = () => {
    const [search, setSearch] = useState("");
    return (
        <header className="card-bg header ">
            <h3 className="text-3xl">Luxury Rentals</h3>
            <div className="nav-right flex items-center">
                <div className="input-icon-cont">
                    <img src="/icons/Search.svg" alt="icon" />
                    <input
                        type="text"
                        placeholder="Type to search..."
                        className="input-field"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button className="yellow-btn flex mx-3">
                    <img src="/icons/Star.svg" className="pr-2" alt="icon" />
                    <span></span>
                    25,000
                </button>
                <hr aria-orientation="vertical" className="oriantation-vertical mx-2" />
                <img src="/icons/Notification.svg" alt="Notifications" height={"36px"}  className="mx-3" />
            </div>
        </header>
    );
};

export default Header;
