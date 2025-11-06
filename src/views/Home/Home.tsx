import React from "react";
import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import PostHome from "./Components/PostHome/PostHome";
import WhyUs from "./Components/WhyUs/WhyUs";
import Connect from "./Components/Connect/Connect";
import ProductSection from "./Components/ProductSection/ProductSection";
import { productsData } from "../../store/Product/Product";
import Banner1 from "../../assets/Banner_1.jpg";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <LayoutMain>
            <div className="pb-10 w-full">
                <div className="w-full h-auto md:mb-[36px] ">
                    <img src={Banner1} className="w-full h-[300px] object-cover" />
                </div>
                <div className="w-full max-w-[1200px] h-full flex items-center mx-auto justify-center ">
                    <ProductSection
                        title="Sản phẩm mới"
                        products={[...productsData]
                            .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())
                            .slice(0, 8)
                        }
                        limit={8}
                        type="new"
                    />
                </div>
                <PostHome
                    title="MDO TREE HOUSE"
                />
                <WhyUs />
                <Connect />
            </div>

        </LayoutMain>
    );
}

export default Home;