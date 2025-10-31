import React from "react";
import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import PostHome from "./Components/PostHome/PostHome";
import WhyUs from "./Components/WhyUs/WhyUs";
import Connect from "./Components/Connect/Connect";
import ProductSection from "./Components/ProductSection/ProductSection";
import { productsData } from "../../store/Product/Product";
import Banner from "./Components/Banner/Banner";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <LayoutMain>
            <div className="pb-10 w-full">
                <div className="w-full h-auto md:mb-[36px]">
                    <Banner />
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
                    title="Những nhà vườn kiểng lá lớn ở Việt Nam: Vườn Nắng Xanh (Tây Ninh)"
                    excerpt="Nếu bạn mới bắt đầu tập tành chơi kiểng lá và đang tìm một nhà vườn uy tín..."
                    image="/images/posts/vuon-nang-xanh.jpg"
                    link="/bai-viet/vuon-nang-xanh"
                    
                />
                <WhyUs />
                <Connect />
            </div>

        </LayoutMain>
    );
}

export default Home;