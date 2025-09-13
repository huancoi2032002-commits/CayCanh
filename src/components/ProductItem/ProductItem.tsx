import type React from "react";
import { Link } from "react-router-dom";
import Cay from "../../assets/cay.jpg"
import type { ProductProps } from "../../store/Product/Product";

const ProductItem: React.FC<ProductProps> = ({
    id,
    name,
    description,
    images,
    price,
    discountPrice,
}) => {
    return (
        <Link to={`/products/${id}`} className="w-full">
            <div className="w-full md:w-[260px] lg:w-[280px] bg-white shadow-md rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow relative">
                {/* Ảnh sản phẩm */}
                <img
                    src={images?.[0] || Cay}
                    alt={name}
                    className="w-full h-[200px] object-cover"
                />
                {discountPrice !== undefined ? (
                    <div className="absolute top-1 right-1 w-9 h-9 bg-red-500 flex items-center justify-center rounded-full">
                        <span className="text-white">{discountPrice}%</span>
                    </div>
                ): ""}
                {/* Nội dung */}
                <div className="p-4 flex flex-col flex-1">
                    <p className="text-xs text-gray-500">Mã: {id}</p>
                    <h3 className="font-bold text-lg text-gray-800">{name}</h3>
                    <p className="text-sm text-gray-600 flex-1">{description}</p>

                    {/* Giá */}
                    <div className="mt-2">
                        {discountPrice !== undefined ? (
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500 line-through text-sm">
                                    {(price ?? 0).toLocaleString("vi-VN")}₫
                                </span>
                                <span className="text-red-600 font-bold text-lg">
                                    {Math.round((price ?? 0) * (1 - discountPrice / 100)).toLocaleString("vi-VN")}₫
                                </span>
                            </div>
                        ) : (
                            <span className="text-green-600 font-bold text-lg">
                                {(price ?? 0).toLocaleString("vi-VN")}₫
                            </span>
                        )}
                    </div>
                    {/* Nút mua */}
                    <button className="mt-3 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-all">
                        Mua ngay
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;