import type React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


type LayoutMainProps = {
    children: React.ReactNode
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="w-full">
                <Header />
            </div>
            <div className="lg:pt-[116px]">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default LayoutMain;