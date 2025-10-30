export interface Blog {
    id: string;
    title: string;
    slug: string;
    content: string;      // có thể nhúng ảnh trong đây bằng Markdown/HTML
    excerpt: string;
    thumbnail?: string;   // ảnh đại diện chính
    banner?: string;      // ảnh banner lớn

    // nhiều ảnh kèm theo
    gallery?: string[];

    author: {
        id: string;
        name: string;
        avatar?: string;
    };

    createdAt: Date;
    updatedAt?: Date;
    tags?: string[];
    category?: string;
    isPublished: boolean;

    layoutType: "article" | "promotion" | "listicle" | "gallery" | "guide";

    // cho listicle / product
    products?: { name: string; images: string[]; price: string }[];

    // cho bài hướng dẫn (guide)
    steps?: { title: string; description: string; image?: string }[];
}




export const sampleBlogs: Blog[] = [
    // ================= ARTICLE =================
    {
        id: "1",
        title: "Chăm sóc cây trồng 101",
        slug: "cham-soc-cay-trong-101",
        content: `
      <p>Để cây luôn khỏe mạnh, bạn cần chú ý đến <strong>ánh sáng</strong>, <strong>nước</strong> và <strong>đất</strong>.</p>
      <img src="https://picsum.photos/800/400?random=20" alt="Plant care" />
      <p>Một số cây ưa sáng, trong khi số khác lại hợp với bóng râm. Hãy chọn vị trí phù hợp trong nhà.</p>
    `,
        excerpt: "Mẹo chăm sóc cây trồng cho người mới bắt đầu.",
        thumbnail: "https://picsum.photos/400/250?random=1",
        banner: "https://picsum.photos/1200/500?random=2",
        gallery: [
            "https://picsum.photos/400/400?random=3",
            "https://picsum.photos/400/400?random=4"
        ],
        author: { id: "a1", name: "Admin", avatar: "https://i.pravatar.cc/100?img=1" },
        createdAt: new Date(),
        isPublished: true,
        layoutType: "article",
        tags: ["Cây cảnh", "Chăm sóc"],
        category: "Hướng dẫn"
    },

    // ================= PROMOTION =================
    {
        id: "2",
        title: "Black Friday Sale - Giảm 50%",
        slug: "black-friday-sale",
        content: "Sự kiện siêu sale lớn nhất trong năm, áp dụng cho toàn bộ cây cảnh tại cửa hàng!",
        excerpt: "Đừng bỏ lỡ khuyến mãi cực lớn.",
        thumbnail: "https://picsum.photos/400/250?random=5",
        banner: "https://picsum.photos/1200/500?random=6",
        author: { id: "a2", name: "Marketing Team", avatar: "https://i.pravatar.cc/100?img=2" },
        createdAt: new Date(),
        isPublished: true,
        layoutType: "promotion",
        tags: ["Khuyến mãi", "Sale"],
        category: "Sự kiện"
    },

    // ================= LISTICLE =================
    {
        id: "3",
        title: "Top 3 loại cây dễ chăm sóc",
        slug: "top-3-loai-cay-de-cham-soc",
        content: "",
        excerpt: "Danh sách cây cảnh phổ biến, dễ nuôi trồng.",
        thumbnail: "https://picsum.photos/400/250?random=7",
        author: { id: "a1", name: "Admin", avatar: "https://i.pravatar.cc/100?img=3" },
        createdAt: new Date(),
        isPublished: true,
        layoutType: "listicle",
        products: [
            {
                name: "🌿 Cây Lưỡi Hổ",
                images: [
                    "https://picsum.photos/200/200?random=8",
                    "https://picsum.photos/200/200?random=9"
                ],
                price: "200.000đ"
            },
            {
                name: "🍀 Cây Trầu Bà",
                images: [
                    "https://picsum.photos/200/200?random=10",
                    "https://picsum.photos/200/200?random=11"
                ],
                price: "150.000đ"
            },
            {
                name: "🌵 Cây Xương Rồng",
                images: [
                    "https://picsum.photos/200/200?random=12",
                    "https://picsum.photos/200/200?random=13"
                ],
                price: "100.000đ"
            }
        ],
        tags: ["Top list", "Cây dễ chăm"],
        category: "Danh sách"
    },

    // ================= GALLERY =================
    {
        id: "4",
        title: "Bộ sưu tập cây cảnh mùa xuân",
        slug: "bo-suu-tap-cay-canh-mua-xuan",
        content: "",
        excerpt: "BST ảnh đẹp về cây cảnh mùa xuân.",
        thumbnail: "https://picsum.photos/400/250?random=14",
        banner: "https://picsum.photos/1200/500?random=15",
        gallery: [
            "https://picsum.photos/400/400?random=16",
            "https://picsum.photos/400/400?random=17",
            "https://picsum.photos/400/400?random=18",
            "https://picsum.photos/400/400?random=19"
        ],
        author: { id: "a3", name: "Editor", avatar: "https://i.pravatar.cc/100?img=4" },
        createdAt: new Date(),
        isPublished: true,
        layoutType: "gallery",
        tags: ["Ảnh đẹp", "BST"],
        category: "Bộ sưu tập"
    },

    // ================= GUIDE =================
    {
        id: "5",
        title: "Cách thay chậu cây đúng cách",
        slug: "cach-thay-chau-cay-dung-cach",
        content: "Hướng dẫn thay chậu cây chi tiết từ A đến Z.",
        excerpt: "Chỉ 3 bước đơn giản giúp cây khỏe mạnh hơn.",
        thumbnail: "https://picsum.photos/400/250?random=21",
        author: { id: "a4", name: "Hướng Dẫn Viên", avatar: "https://i.pravatar.cc/100?img=5" },
        createdAt: new Date(),
        isPublished: true,
        layoutType: "guide",
        steps: [
            {
                title: "Bước 1: Lấy cây ra khỏi chậu cũ",
                description: "Nhẹ nhàng lấy cây ra, tránh làm tổn thương rễ.",
                image: "https://picsum.photos/600/300?random=22"
            },
            {
                title: "Bước 2: Chuẩn bị đất mới",
                description: "Trộn đất với phân hữu cơ để cây phát triển tốt.",
                image: "https://picsum.photos/600/300?random=23"
            },
            {
                title: "Bước 3: Đặt cây vào chậu mới",
                description: "Cố định cây, thêm đất và tưới nước vừa đủ.",
                image: "https://picsum.photos/600/300?random=24"
            }
        ],
        tags: ["Hướng dẫn", "Kỹ thuật"],
        category: "Tutorial"
    }
];
