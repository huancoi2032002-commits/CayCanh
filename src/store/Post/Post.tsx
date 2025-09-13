export interface Post {
    id: string;            // id duy nhất
    title: string;         // tiêu đề bài viết
    slug: string;          // đường dẫn SEO-friendly
    content: string;       // nội dung chính (có thể là HTML hoặc Markdown)
    excerpt: string;       // tóm tắt ngắn
    thumbnail?: string;    // ảnh đại diện
    author: {
        id: string;
        name: string;
        avatar?: string;
    };
    createdAt: Date;       // ngày tạo
    updatedAt?: Date;      // ngày cập nhật
    tags?: string[];       // danh sách tag
    category?: string;     // chuyên mục
    isPublished: boolean;  // trạng thái xuất bản
}

export const samplePosts: Post[] = [
    {
        id: "1",
        title: "Cách chăm sóc cây cảnh trong nhà",
        slug: "cach-cham-soc-cay-canh-trong-nha",
        content:
            "Trong bài viết này, chúng ta sẽ tìm hiểu cách chăm sóc cây cảnh trong nhà để cây luôn xanh tốt...",
        excerpt:
            "Hướng dẫn cơ bản giúp bạn chăm sóc cây cảnh trong nhà luôn tươi tốt.",
        thumbnail: "/images/posts/cay-canh.jpg",
        author: {
            id: "u1",
            name: "Nguyễn Văn A",
            avatar: "/images/authors/author-a.jpg",
        },
        createdAt: new Date("2025-08-01"),
        updatedAt: new Date("2025-08-15"),
        tags: ["cây cảnh", "chăm sóc", "nội thất"],
        category: "Cây cảnh",
        isPublished: true,
    },
    {
        id: "2",
        title: "10 loại cây phong thủy mang lại may mắn",
        slug: "10-loai-cay-phong-thuy-may-man",
        content:
            "Danh sách 10 loại cây phong thủy phù hợp đặt trong nhà hoặc văn phòng...",
        excerpt: "Khám phá 10 loại cây phong thủy giúp mang lại may mắn.",
        thumbnail: "/images/posts/cay-phong-thuy.jpg",
        author: {
            id: "u2",
            name: "Trần Thị B",
        },
        createdAt: new Date("2025-08-20"),
        tags: ["phong thủy", "may mắn"],
        category: "Phong thủy",
        isPublished: true,
    },
];