

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
    shipping?: string 
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
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_31.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_28.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_29.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_30.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_27.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_32.jpg",
        ],
        price: "110k",
        height: "Size Nhỏ",
        inStock: true,
        createdAt: "2025-10-31",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    
    {
        id: "8",
        name: "Monstera deli nhổ trần",
        secondName: "",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/nt1.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/nt2.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/nt3.jpg",
        ],
        price: "600k/cặp",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "1m3",
        inStock: true,
        createdAt: "2025-10-31",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "9",
        name: "Monstera Compacta",
        secondName: "",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_88.jpg",
        ],
        price: "499k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Nhỏ",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "10",
        name: "Đế Vương Lâu",
        secondName: "",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_105.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_91.jpg",
        ],
        price: "80k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Nhỏ",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "11",
        name: "Đế Vương Vàng",
        secondName: "",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_92.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_121.jpg",
        ],
        price: "80k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Nhỏ",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "12",
        name: "Dương Xỉ Thái Thòng",
        secondName: "",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_94.jpg",
        ],
        price: "80k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Nhỏ",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "13",
        name: "Thiên Tuế",
        secondName: "",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_95.jpg",
        ],
        price: "1tr6 - 3tr2",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Nhỏ",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "14",
        name: "Đuôi Công Khổng Tước",
        secondName: "",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_107.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_106.jpg",
        ],
        price: "70k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Nhỏ",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "15",
        name: "Dương Xỉ Culi",
        secondName: "",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_96.jpg",
        ],
        price: "130k - 230k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Nhỏ",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "16",
        name: "Lục Quạ",
        secondName: "",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_97.jpg",
        ],
        price: "60k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Nhỏ",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "17",
        name: "Râu Rồng",
        secondName: "",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_33.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_34.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_35.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_127.jpg",
        ],
        price: "320k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Nhỏ",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "18",
        name: "Cọ Lá Xếp",
        secondName: "Cọ Nhật",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_108.jpg",
        ],
        price: "150k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Vừa",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "19",
        name: "Trầu Bà Chân Vịt",
        secondName: "Philodendron Xanadu",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_109.jpg",
        ],
        price: "90k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Vừa",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "20",
        name: "Cây Trầu Bà Subin",
        secondName: "",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_110.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_118.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_119.jpg",
        ],
        price: "150k-450k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Vừa",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "21",
        name: "Philodendron Gloriosum Dark Form",
        secondName: "Trầu bà Gloriosum",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_112.jpg",
        ],
        price: "130k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Vừa",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "22",
        name: "Caladium Hồng",
        secondName: "Caladium Hồng",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_120.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_122.jpg",
        ],
        price: "99k-120k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Vừa",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "23",
        name: "Hotumi",
        secondName: "Platycerium Bifurcatum",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_117.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_115.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_116.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_123.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_124.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_124.jpg",
        ],
        price: "150k-450k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Vừa",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "24",
        name: "Philodendron Pink Princess",
        secondName: "Philodendron Erubescens",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_126.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_147.jpg",
        ],
        price: "80k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Vừa",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "25",
        name: "Dương xỉ Tổ Quạ",
        secondName: "Asplenium Nidus",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_128.jpg",
        ],
        price: "60k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Vừa",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "26",
        name: "Cây Ráy Var Đột Biến",
        secondName: "Alocasia Macrorrhiza Variegata",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_140.jpg",
        ],
        price: "150k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Vừa",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "27",
        name: "Cây Melano",
        secondName: "Melano",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_146.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_145.jpg",
        ],
        price: "150k-350k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Vừa",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "28",
        name: "Cây Ổ rồng CORO Thuần",
        secondName: "Ổ rồng CORO",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_144.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_143.jpg",
        ],
        price: "220k/1 râu",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Vừa",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "29",
        name: "Trầu bà Lỗ",
        secondName: "Ổ rồng CORO",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_137.jpg",
        ],
        price: "120k",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Size Vừa",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
    {
        id: "30",
        name: "Dương xỉ Thân Gỗ",
        secondName: "Dương xỉ",
        description: "Cây phong thủy",
        images: [
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_151.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_149.jpg",
            "https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_150.jpg",
        ],
        price: "Bảng giá ở dưới mô tả",
        shipping: "Chưa bao gồm chi phí vận chuyển",
        height: "Mô tả",
        inStock: true,
        createdAt: "2025-11-03",
        applications: [
            "Biểu tượng của thịnh vượng và may mắn: Lá to, xanh đậm biểu trưng cho sự sung túc, phát triển mạnh mẽ.",
            "Tượng trưng cho thăng tiến: Cây thân leo cao, hướng sáng – tượng trưng cho sự vươn lên, thành công trong sự nghiệp.",
            "Màu xanh – vàng xen kẽ biểu hiện cân bằng năng lượng âm dương, mang đến may mắn, thịnh vượng và sáng suốt."
        ]
    },
];
