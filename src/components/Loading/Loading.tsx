import React from "react";
import "./Loading.scss";

const Loading: React.FC = () => {
    return (
        <div className="bg-white w-full h-screen flex items-center justify-center">
            <div className="loader"></div>
        </div>
    );
};

export default Loading;
