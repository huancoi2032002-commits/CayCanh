import React from "react";
import { Link } from "react-router-dom";

const TopBar: React.FC = () => {
    return (
        <div className="w-full max-w-[1600px] h-full px-[50px] text-white text-[14px] flex gap-[70px] justify-between mx-auto ">
            <div className="h-full flex justify-center items-center flex-1">
                <Link
                    to="/"
                    title=""
                    aria-label=""
                >
                    <strong>MDO•Tree House•</strong> Cung cấp kiểng lá cho mọi không gian.
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
