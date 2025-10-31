import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productsData } from "../../../../store/Product/Product";
import type { ProductProps } from "../../../../store/Product/Product";
import LayoutMain from "../../../../layouts/LayoutMain/LayoutMain";
import { BoxIcon, CalendarIcon, LeafIcon, TreeIcon } from "../../../../assets";
import ProductItem from "../../../../components/ProductItem/ProductItem";
import PlantDescription from "../../../../components/PlantDescription/PlantDescription";


const ProductDetail = () => {
    const [product, setProduct] = useState<ProductProps | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { idProduct } = useParams<{ idProduct: string }>();
    const [randomProducts, setRandomProducts] = React.useState<ProductProps[]>([]);

    useEffect(() => {
        if (!idProduct) return;

        const foundProduct = productsData.find(p => p.id === idProduct) || null;
        setProduct(foundProduct);
    }, [idProduct])

    React.useEffect(() => {
        setRandomProducts([...productsData].sort(() => Math.random() - 0.5).slice(0, 4));
    }, []);

    if (!product) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    console.log(productsData[0].images);


    return (
        <LayoutMain>
            <div className="w-full max-w-[1200px] mx-auto px-4 md:py-8">
                {/* layout sản phẩm chi tiết */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Cột trái - hình ảnh */}
                    <div>
                        <div className="mb-4">
                            <img
                                src={product.images[activeIndex]}
                                alt={`${product.name} - hình ${activeIndex + 1}`}
                                className="w-full h-auto rounded"
                            />
                        </div>
                        <div className="flex gap-2">
                            {product.images.map((img, index) => (
                                <img
                                    src={img}
                                    key={index}
                                    alt={`${product.name} thumbnail ${index + 1}`}
                                    loading="lazy"
                                    className={`w-14 h-14 object-cover rounded cursor-pointer border-2 ${index === activeIndex ? "border-green-600" : "border-gray-300"
                                        }`}
                                    onClick={() => setActiveIndex(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Cột phải - thông tin sản phẩm */}
                    <div className="md:px-10">
                        <h1 className="text-[22px] md:text-[28px] font-semibold">{product.name}</h1>
                        <div className="italic">
                            <span className="text-[18px]">
                                ({product.secondName})
                            </span>
                        </div>

                        <ul className="text-[#212326B3] text-[16px] md:text-[18px] mt-4 space-y-2">
                            <li className="flex items-center gap-2">
                                <LeafIcon />
                                <p>Chăm sóc bởi những người nông dân với nhiều năm kinh nghiệm</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <BoxIcon />
                                <p>Từ vườn ươm trực tiếp đến tận tay bạn</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <CalendarIcon />
                                <p>Mỗi cây đều đảm bảo không sâu bệnh</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <TreeIcon />
                                <p>Kích thước và màu sắc của cây gửi đi giống như trong hình</p>
                            </li>
                        </ul>

                        <div className="mt-4">
                            <span className="text-[18px] font-semibold">
                                {product.price}
                            </span>
                        </div>

                        <div className="italic">
                            <span className="text-[18px]">
                                (Chưa bao gồm chi phí vận chuyển)
                            </span>
                        </div>

                        <div className="mt-4">
                            <span className="text-[18px] font-semibold">
                                Cao: {product.height}
                            </span>
                        </div>

                        <div className="mt-4">
                            <span className="text-[18px] font-semibold">
                                Ứng dụng:
                            </span>
                            <ul className="list-disc pl-6 space-y-1">
                                {product.applications?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            <Link to="https://www.facebook.com/Huan.Nguyen.LD" target="_blank" rel="noopener noreferrer">
                                <button className="bg-[#5433EB] h-[50px] w-full text-lg text-white cursor-pointer hover:bg-[#5433EB]/90">
                                    Liên hệ Facebook
                                </button>
                            </Link>
                            <Link to="https://www.facebook.com/Huan.Nguyen.LD" target="_blank" rel="noopener noreferrer">
                                <button className="bg-[#5433EB] h-[50px] w-full text-lg text-white cursor-pointer hover:bg-[#5433EB]/90">
                                    Liên hệ Zalo
                                </button>
                            </Link>
                            <Link to="https://www.facebook.com/Huan.Nguyen.LD" target="_blank" rel="noopener noreferrer">
                                <button className="bg-[#5433EB] h-[50px] w-full text-lg text-white cursor-pointer hover:bg-[#5433EB]/90">
                                    Liên hệ TikTok
                                </button>
                            </Link>
                        </div>

                        <div className="py-4">
                            <ul className="list-decimal list-inside space-y-2 text-gray-700">
                                <li>Hình ảnh chỉ mang tính minh họa, cây gửi đi sẽ giống hoặc tương tự như trong hình</li>
                                <li>Có thể lớn hơn hoặc nhỏ hơn tùy theo lô hàng hiện có</li>
                                <li>Hàng có thể hết bất ngờ</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="w-full">
                    <PlantDescription
                        name="Monstera Albo Variegata"
                        intro="Rất tuyệt 🌿 — bạn đang nói đến Monstera Albo Variegata, một trong những loại Monstera đột biến hiếm và được săn lùng nhất thế giới..."
                        sections={[
                            {
                                title: "🌿 1. Thông tin tổng quan",
                                type: "table",
                                content: [
                                    { label: "Tên khoa học", value: "Monstera deliciosa ‘Albo Variegata’" },
                                    { label: "Tên thường gọi", value: "Monstera Albo, Monstera đột biến trắng" },
                                    { label: "Họ thực vật", value: "Araceae (họ Ráy)" },
                                    { label: "Nguồn gốc", value: "Trung và Nam Mỹ" },
                                ],
                            },
                            {
                                title: "🌱 2. Đặc điểm hình thái",
                                type: "list",
                                content: [
                                    "Lá: Rất to (25–60 cm), có đốm, vệt hoặc mảng trắng sữa, kem hoặc ngà; phần trắng là do thiếu diệp lục (chlorophyll) – kết quả của đột biến tự nhiên.",
                                    "Thân: Dạng leo, có rễ khí sinh bám vào giá thể hoặc cột xơ dừa.",
                                    "Màu sắc: Màu loang trắng – xanh xen kẽ, tạo cảm giác “vẽ tay tự nhiên”, cực hiếm.",
                                    "Tốc độ phát triển: Chậm hơn Monstera thường vì phần trắng không quang hợp được.",
                                    "Tuổi thọ: Nhiều năm, có thể sống bền và ra hoa khi đủ trưởng thành.",
                                ],
                            },
                            {
                                title: "🌤️ 3. Điều kiện sinh trưởng",
                                type: "list",
                                content: [
                                    "Ánh sáng: Ưa sáng gián tiếp (ánh sáng tán xạ). Nếu thiếu sáng, lá xanh lại, mất variegation. Nếu nắng gắt, phần trắng dễ cháy.",
                                    "Nhiệt độ: 18–30°C (ổn định quanh 25°C là lý tưởng).",
                                    "Độ ẩm: 60–80%. Có thể phun sương nhẹ 2–3 lần/tuần.",
                                    "Không khí: Thoáng, tránh gió mạnh và không để quạt thổi trực tiếp.",
                                ],
                            },
                            {
                                title: "🪴 4. Cách trồng & chăm sóc",
                                type: "list",
                                content: [
                                    {
                                        title: "🌱 Đất trồng",
                                        text: "Trộn theo tỉ lệ:",
                                        items: [
                                            "40% xơ dừa hoặc vỏ thông nhỏ",
                                            "30% perlite (đá trân châu) hoặc pumice (đá bọt)",
                                            "20% đất mùn tơi xốp",
                                            "10% than hoạt tính hoặc vermicompost (phân trùn quế)",
                                        ],
                                    },
                                    "→ Mục tiêu: thoáng khí, thoát nước tốt nhưng vẫn giữ ẩm.",
                                    {
                                        title: "💧 Tưới nước",
                                        items: [
                                            "Kiểm tra độ ẩm đất trước khi tưới (đất khô 2–3cm bề mặt mới tưới).",
                                            "Mùa mưa: giảm tần suất để tránh úng.",
                                            "Dùng nước lọc hoặc nước để qua đêm để giảm clo.",
                                        ],
                                    },
                                    {
                                        title: "🌿 Phân bón",
                                        items: [
                                            "Dùng phân hữu cơ hoai mục hoặc NPK loãng (10-10-10 hoặc 20-20-20) mỗi 2–3 tuần.",
                                            "Bổ sung vi lượng (Mg, Ca, Fe) giúp lá xanh đậm và khỏe.",
                                            "Tránh bón quá mức → gây cháy rễ, ảnh hưởng phần trắng.",
                                        ],
                                    },
                                    {
                                        title: "📏 Giá thể leo",
                                        text: "Nên cho leo cột xơ dừa hoặc lưới trụ, giúp thân đứng vững và lá mở to, xẻ đẹp.",
                                    },
                                ],
                            },
                            {
                                title: "🌱 5. Nhân giống",
                                type: "list",
                                content: [
                                    {
                                        title: "Phương pháp: Giâm cành.",
                                        items: [
                                            "Cắt đoạn thân có ít nhất 1 mắt ngủ + 1 rễ khí sinh + 1 lá khỏe.",
                                            "Ngâm đầu cắt với thuốc kích rễ (N3M hoặc Atonik) vài phút.",
                                            "Cắm vào giá thể ẩm, giữ sáng nhẹ, độ ẩm cao.",
                                            "Sau 2–4 tuần sẽ ra rễ mới.",
                                        ]
                                    },
                                    {
                                        text: "Lưu ý: Vì là cây đột biến, tỉ lệ giữ đột biến trắng không ổn định — nên chọn cành có phần trắng rõ, tránh toàn xanh hoặc toàn trắng."
                                    }
                                    
                                ]
                            },
                            {
                                title: "💎 6. Ý nghĩa phong thủy",
                                type: "list",
                                content: [
                                    {
                                        title: "Tượng trưng cho:",
                                        items: [
                                            "Sự quý hiếm, vượng khí, thịnh vượng và may mắn.",
                                            "Phần trắng tượng trưng cho ánh sáng, trí tuệ, thanh khiết.",
                                            "Phần xanh biểu trưng cho sức sống, tiền tài, sinh khí.",
                                            "Sự hòa quyện giữa trắng – xanh thể hiện âm dương cân bằng, giúp gia chủ gặp thuận lợi, tránh điều xui rủi.",
                                        ]
                                    },
                                    {
                                        title: "Hợp mệnh:",
                                        items: [
                                            "Rất hợp với Mệnh Kim (màu trắng) và Mệnh Mộc (màu xanh).",
                                            "Giúp mệnh Thổ tăng vận tài và năng lượng sáng tạo."
                                        ]
                                    },
                                    {
                                        title: "Vị trí đặt cây:",
                                        items: [
                                            "Phòng khách, văn phòng, gần cửa sổ sáng nhẹ – thu hút vượng khí.",
                                            "Tránh nơi ẩm thấp hoặc thiếu sáng lâu ngày (sẽ mất đột biến)."
                                        ]
                                    }
                                ]
                            }
                        ]}
                    />

                </div>
                {/* Sản phẩm liên quan */}
                <div className="mt-10">
                    <h2 className="text-xl lg:text-[28px] ">Bạn có thể quan tâm</h2>

                    {/* Mobile: flex ngang, scroll; từ md trở lên: grid */}
                    <div className="
                        flex gap-4 mt-8 overflow-x-auto 
                        sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 sm:overflow-x-visible
                    ">
                        {randomProducts.map((p) => (
                            <div key={p.id} className="min-w-[250px] sm:min-w-0 flex-shrink-0">
                                <ProductItem {...p} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </LayoutMain>
    );
}

export default ProductDetail;