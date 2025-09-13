import React, { useEffect, useState } from "react";
import TopBar from "./Component/TopBar";
import NavBar from "./Component/NavBar";

const Header: React.FC = () => {
    const [hideTopBar, setHideTopBar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHideTopBar(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full lg:fixed left-0 top-0 lg:z-[120]">
            {/* TopBar */}
            <div
                className={`w-full bg-[#1A1B18] hidden md:flex justify-center overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
            ${hideTopBar ? "max-h-0 opacity-0" : "max-h-[36px] opacity-100"}`}
            >
                <TopBar />
            </div>

            {/* NavBar */}
            <div className="w-full bg-white flex justify-center shadow-lg">
                <NavBar />
            </div>
        </div>
    );
};

export default Header;
