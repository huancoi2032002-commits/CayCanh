import type React from "react";

interface PostHomeProps {
    category?: string;
    title: string;
    excerpt: string;
    image: string;
    link: string;
}

const PostHome: React.FC<PostHomeProps> = ({
    category = "Vườn đẹp - Decor - Nội thất kiểng lá",
    title,
    excerpt,
    image,
    link,
}) => {
    return (
        <article className="bg-[#936be80d] py-10 px-4 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left content */}
                <div className="space-y-4">
                    <span className="text-green-600 font-medium block" aria-label="Chuyên mục">
                        {category}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
                        {title}
                    </h2>
                    <p className="text-gray-600">{excerpt}</p>
                    <a
                        href={link}
                        title={title}
                        className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition"
                    >
                        Đọc Thêm
                    </a>
                </div>

                {/* Right image */}
                <div className="relative flex flex-col items-center border p-4">
                    <h3 className="text-green-700 font-semibold text-lg mb-2">
                        VƯỜN NẮNG XANH
                    </h3>
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </article>
    );
};

export default PostHome;
