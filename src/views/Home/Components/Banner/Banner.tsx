{/*
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import { Autoplay } from "swiper/modules";
*/}
import Banner1 from "../../../../assets/Banner_1.jpg";
import "./Banner.scss";
import "swiper/css";

{/*
interface BannerProps {
    link: string;
    image: string;
    secondTransform?: string;
}
*/}

{/*
const BannerItem: BannerProps[] = [
    { link: "/", image: Banner1 },
];
*/}

const Banner = () => {
    {/*
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef<any>(null);
    */}

    return (
        <div className="w-full h-auto md:h-[300px] overflow-hidden relative">
            {/*
            <Swiper
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1} // luôn 1 ảnh full kích thước
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Autoplay]}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="swiper_container h-full w-full"
            >
                {BannerItem.map((item, i) => (
                    <SwiperSlide key={i}>
                        <a href={item.link} className="block w-full h-full">
                            <img
                                src={item.image}
                                alt={`slide ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            */}
            <img src={Banner1} />
            {/* Thanh progress 
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-40">
                {BannerItem.map((_, index) => (
                    <button
                        key={index}
                        className="w-[50px] h-[5px] bg-gray-400 overflow-hidden cursor-pointer relative"
                        onClick={() => swiperRef.current?.slideToLoop(index)}
                    >
                        {index === currentIndex && (
                            <span
                                className="absolute left-0 top-0 h-full bg-white"
                                style={{
                                    width: "100%",
                                    animation: "progressFill 5s linear forwards",
                                }}
                            />
                        )}
                    </button>
                ))}
            </div>
            */}
        </div>
    );
};

export default Banner;
