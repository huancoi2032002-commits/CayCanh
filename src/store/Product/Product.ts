

export interface ProductProps {
    id: string;
    name: string;
    secondName?: string;
    description: string;      // Mô tả ngắn
    longDescription?: string; // Mô tả dài chi tiết
    images: string[];
    price: number;
    discountPrice?: number;
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
        name: "Monstera Deli", 
        secondName: "Monstera đột biến trắng",
        description: "Cây phong thủy", 
        images: ["/cay.jpg", "/cay.jpg", "/cay.jpg"], 
        price: 4900000, 
        height: "2m5 đến 3m" , 
        discountPrice: 20, 
        inStock: true, 
        createdAt: "2025-01-01" ,
        applications: [
            "Trang trí nội thất (văn phòng, sảnh, quán cà phê, nhà hàng).",
            "Được xem là cây phong thủy mang ý nghĩa sinh trưởng, thịnh vượng."
        ]
    },
    { id: "2", name: "Hoya Obovata Variegated", description: "Cây leo", images: ["/cay.jpg", "/cay.jpg", "/cay.jpg"], price: 1900000, inStock: false, createdAt: "2025-02-01" },
    { id: "3", name: "Philodendron Paraiso Verde", description: "Cây quý hiếm", images: ["/cay.jpg", "/cay.jpg", "/cay.jpg"], price: 85, inStock: true, createdAt: "2025-03-01" },
    { id: "4", name: "Syngonium White Butterfly", description: "Cây trang trí", images: ["/cay.jpg", "/cay.jpg", "/cay.jpg"], price: 37, inStock: true, createdAt: "2025-04-01" },
    { id: "5", name: "Syngonium White Butterfly", description: "Cây trang trí", images: ["/cay.jpg", "/cay.jpg", "/cay.jpg"], price: 37, inStock: true, createdAt: "2025-04-01" },
    { id: "6", name: "Syngonium White Butterfly", description: "Cây trang trí", images: ["/cay.jpg", "/cay.jpg", "/cay.jpg"], price: 370000, inStock: true, createdAt: "2025-04-01" },
    { id: "7", name: "Syngonium White Butterfly", description: "Cây trang trí", images: ["/cay.jpg", "/cay.jpg", "/cay.jpg"], price: 37000, inStock: true, createdAt: "2025-04-01" },
    { id: "8", name: "Syngonium White Butterfly", description: "Cây trang trí", images: ["/cay.jpg", "/cay.jpg", "/cay.jpg"], price: 37, inStock: true, createdAt: "2025-04-01" },
    { id: "9", name: "Syngonium White Butterfly", description: "Cây trang trí", images: ["/cay.jpg", "/cay.jpg", "/cay.jpg"], price: 37, inStock: true, createdAt: "2025-04-01" },
    { id: "10", name: "Syngonium White Butterfly", description: "Cây trang trí", images: ["/cay.jpg", "/cay.jpg", "/cay.jpg"], price: 49, discountPrice: 10, inStock: true, createdAt: "2025-04-01" },
];
