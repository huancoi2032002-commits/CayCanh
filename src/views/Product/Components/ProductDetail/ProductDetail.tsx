import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productsData } from "../../../../store/Product/Product";
import type { ProductProps } from "../../../../store/Product/Product";
import LayoutMain from "../../../../layouts/LayoutMain/LayoutMain";
import { BoxIcon, CalendarIcon, LeafIcon, TreeIcon } from "../../../../assets";


const ProductDetail = () => {
    const [product, setProduct] = useState<ProductProps | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { idProduct } = useParams<{ idProduct: string }>();

    useEffect(() => {
        if (!idProduct) return;

        const foundProduct = productsData.find(p => p.id === idProduct) || null;
        setProduct(foundProduct);
    }, [idProduct])
    if (!product) {
        return <div>Sản phẩm không tồn tại</div>;
    }
    return (
        <LayoutMain>
            <div className="w-full max-w-[1200px] mx-auto md:py-8">
                <div className="grid grid-cols-2">
                    <div>
                        <div className="mb-4">
                            <img
                                src={product.images[activeIndex]}
                                alt={`Hình ${activeIndex + 1}`}
                                className="w-full h-auto rounded"
                            />
                        </div>
                        <div className="flex w-10 h-10 gap-2">
                            {product.images.map((img, index) => (
                                <img
                                    src={img}
                                    key={index}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`w-10 h-10 object-cover rounded cursor-pointer border-2 ${index === activeIndex ? "border-green-600" : "border-gray-300"
                                        }`}
                                    onClick={() => setActiveIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="px-10">
                        <h1 className="text-[28px]">Anthurium Crystalinum Dark form</h1>
                        <ul className="text-[#212326B3] lg:text-[18px] mt-4">
                            <li>
                                <div className="flex py-2 items-center gap-2">
                                    <LeafIcon />
                                    <p>Chăm sóc bởi những người nông dân với nhiều năm kinh nghiệm</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex py-2 items-center gap-2">
                                    <BoxIcon />
                                    <p>Từ vườn ươm trực tiếp đến tận tay bạn</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex py-2 items-center gap-2">
                                    <CalendarIcon />
                                    <p>Mỗi cây đều đảm bảo không sâu bệnh</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex py-2 items-center gap-2">
                                    <TreeIcon />
                                    <p>Kích thước và màu sắc của cây gửi đi giống như trong hình</p>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <span className="text-[18px]">
                                {product.discountPrice != null
                                    ? Math.round(product.price * (1 - product.discountPrice / 100)).toLocaleString("vi-VN") + "₫"
                                    : product.price.toLocaleString("vi-VN") + "₫"}
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link to="https://www.facebook.com/Huan.Nguyen.LD">
                                <button className="bg-[#5433EB] h-[50px] w-full text-lg text-white cursor-pointer hover:bg-[#5433EB]/90">Liên hệ FaceBook</button>
                            </Link>
                            <Link to="https://www.facebook.com/Huan.Nguyen.LD">
                                <button className="bg-[#5433EB] h-[50px] w-full text-lg text-white cursor-pointer hover:bg-[#5433EB]/90">Liên hệ Zalo</button>
                            </Link>
                            <Link to="https://www.facebook.com/Huan.Nguyen.LD">
                                <button className="bg-[#5433EB] h-[50px] w-full text-lg text-white cursor-pointer hover:bg-[#5433EB]/90">Liên hệ TikTok</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </LayoutMain>
    );
}

export default ProductDetail;