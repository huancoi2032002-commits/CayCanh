import type React from "react";

interface PostHomeProps {
    category?: string;
    title: string;
}

const PostHome: React.FC<PostHomeProps> = ({
    category = "Vườn đẹp - Decor - Nội thất kiểng lá",
    title,
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
                    <div>
                        <p className="text-gray-600">MDO•Tree House•</p>
                        <p className="text-gray-600">Cung cấp kiểng lá cho mọi không gian</p>
                        <p className="text-gray-600">Cung cấp hơn 30 chủng loại cây nhiệt đới cho mọi không gian</p>
                        <p className="text-gray-600">Liên hệ trực tiếp <a href="tel:0817913888" className="underline text-blue-600">08 179 13888</a> - Minh Đức.</p>
                    </div>
                </div>

                {/* Right image */}
                <div className="relative flex flex-col items-center border p-4">
                    <img
                        src="https://res.cloudinary.com/duxzzujph/image/upload/v1761878475/plants/images_25.jpg"
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
