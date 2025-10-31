

export interface ProductProps {
    id: string;
    name: string;
    secondName?: string;
    description: string;      // Mô tả ngắn
    longDescription?: string; // Mô tả dài chi tiết
    images: string[];
    price: string;
    //discountPrice?: number;
    inStock: boolean;
    category?: string;
    tags?: string[];
    createdAt?: string;
    updatedAt?: string;
    rating?: number;
    reviewsCount?: number;
    onBuy?: (id: string) => void;
    height?: string;
    applications?: string[];
}


export const productsData: ProductProps[] = [
    {
        id: "1",
        name: "Monstera Albo Variegata",
        secondName: "Trầu bà Nam Mỹ đột biến",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_1.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_2.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_3.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_4.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_5.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_6.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_7.jpg",
        ],
        price: "999k - 1tr390",
        height: "Size trưởng thành",
        inStock: true,
        createdAt: "2025-10-31",
        applications: [
            "Tượng trưng cho sự sinh trưởng, may mắn, thịnh vượng và tài lộc.",
            "Lá xẻ to, hình tim, màu sắc xen kẽ thể hiện sự cân bằng giữa âm – dương, hài hòa trong cuộc sống.",
            "Giúp gia chủ dễ gặp quý nhân, công việc thuận lợi, đặc biệt trong lĩnh vực sáng tạo, nghệ thuật, hoặc kinh doanh."
        ]
    },
    {
        id: "2",
        name: "Monstera Thaicons",
        secondName: "Trầu bà Nam Mỹ Thái đột biến",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_10.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_9.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_8.jpg",
        ],
        price: "270K - 350k",
        height: "Size nhỏ",
        inStock: true,
        createdAt: "2025-10-31",
        applications: [
            "Lá xẻ sâu tượng trưng cho sức sống mãnh liệt, sự phát triển bền vững.",
            "Phòng khách, văn phòng, nơi làm việc, quầy lễ tân → thu hút tài lộc, tăng năng lượng tích cực.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "3",
        name: "Monstera Thaicons",
        secondName: "Trầu bà Nam Mỹ Thái đột biến (Thaicons premium)",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_12.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_11.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_13.jpg",
        ],
        price: "400k - 750k",
        height: "Size trưởng thành",
        inStock: true,
        createdAt: "2025-10-31",
        applications: [
            "Lá xẻ sâu tượng trưng cho sức sống mãnh liệt, sự phát triển bền vững.",
            "Phòng khách, văn phòng, nơi làm việc, quầy lễ tân → thu hút tài lộc, tăng năng lượng tích cực.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "4",
        name: "Monstera Deli Cận Đại",
        secondName: "Trầu bà Nam Mỹ",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_17.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_14.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_15.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_16.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_18.jpg",
        ],
        price: "1tr5 - 1tr7",
        height: "Size Lớn",
        inStock: true,
        createdAt: "2025-10-31",
        applications: [
            "Là phiên bản “cổ điển” nhất của họ Monstera — dễ trồng, dễ chăm, phát triển nhanh.",
            "Dù không đột biến nhưng vẫn được giới chơi cây và thiết kế nội thất ưa chuộng nhờ vẻ sang trọng, hiện đại.",
        ]
    },
    {
        id: "5",
        name: "Monstera Deli",
        secondName: "Trầu bà Nam Mỹ",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_19.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_20.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_21.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_22.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_23.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_24.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_25.jpg",
        ],
        price: "3tr - 3tr9",
        height: "Cao từ 2m5 - 2m8",
        inStock: true,
        createdAt: "2025-10-31",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
        {
        id: "6",
        name: "Monstera Deli Để Bàn",
        secondName: "Trầu bà Nam Mỹ",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_27.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_28.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_29.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_30.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_31.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_32.jpg",
        ],
        price: "110k",
        height: "Size Đại",
        inStock: true,
        createdAt: "2025-10-31",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
];
