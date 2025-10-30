import React, { useRef, useState } from "react";
import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import HAC from "../../assets/banner2.jpeg";
import { Link } from "react-router-dom";
import Avatar from "../../assets/avatar.jpg";
import Dropdown from "../../components/Dropdown/Dropdown";
import { Chevron } from "../../assets";

interface BlogProps {
    onSortChange?: (type: string) => void;
}

interface SortOption {
    label: string;
    value: string;
}

const sortOptions: SortOption[] = [
    { label: "Mới nhất", value: "most-recent" },
    { label: "Phổ biến nhất", value: "most-popular" },
    { label: "Xem nhiều nhất", value: "most-viewed" },
    { label: "Tên A-Z", value: "name-a-z" },
    { label: "Tên Z-A", value: "name-z-a" },
    { label: "Ngày cũ - mới", value: "date-old-new" },
    { label: "Ngày mới - cũ", value: "date-new-old" },
];

const BlogMainChild = () => {
    return (
        <Link to={"/blog"}>
            <div className="relative rounded-lg h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                <img src={HAC} alt="Banner Blog Cây Cảnh" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-8 rounded-b-lg">
                    <h1 className="text-2xl">Blog Cây Cảnh</h1>
                    <p className="text-lg">Chia sẻ kiến thức, kinh nghiệm và xu hướng mới nhất về cây cảnh</p>
                    <div className="flex justify-between flex-wrap gap-4">
                        <div className="flex gap-8">
                            <div>
                                <h3 className="text-sm">Bài viết bởi</h3>
                                <div className="flex items-center gap-2">
                                    <img src={Avatar} alt="Nguyễn Hữu Huân" className="w-10 h-10 rounded-full" />
                                    <span>Nguyễn Hữu Huân</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm">Ngày đăng</h3>
                                <time dateTime="2025-09-15" className="flex items-center h-10">15/09/2025</time>
                            </div>
                        </div>
                        <div className="flex flex-col w-full max-w-[220px]">
                            <h3 className="text-sm">Tag</h3>
                            <ul className="flex flex-wrap gap-2 items-center">
                                <li>
                                    <Link
                                        to="/blogs?tag=caycanh"
                                        className="rounded-full bg-transparent px-2 py-0.5 text-xs font-medium text-fg-white ring-1 ring-fg-white ring-inset"
                                    >
                                        caycanh
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    );
}

const BlogChild = () => {
    return (
        <Link to={"/blog"} className="inline-block">
            <article
                className="flex flex-col max-w-[384px] w-full gap-4 relative rounded-lg 
                    md:h-[440px] md:w-[384px] overflow-hidden shadow-md hover:shadow-xl 
                    transition-shadow duration-300 transform group"
            >
                <div className="w-full h-[256px] md:h-[300px] lg:h-[256px] overflow-hidden rounded-t-lg">
                    <img src={HAC} alt="Banner Blog Cây Cảnh" className="w-full md:h-[256px] object-cover rounded-lg group-hover:scale-110" />
                </div>
                <div className="w-full rounded-b-lg px-2">
                    <h1 className="text-lg font-bold">Blog Cây Cảnh</h1>
                    <p className="line-clamp-2">
                        Chia sẻ kiến thức, kinh nghiệm và xu hướng mới nhất về cây cảnh
                    </p>
                    <div className="mt-4">
                        <div className="flex items-center h-10 gap-2">
                            <img src={Avatar} alt="Nguyễn Hữu Huân" className="w-10 h-10 rounded-full" />
                            <div className="flex flex-col">
                                <span className="text-sm">Nguyễn Hữu Huân</span>
                                <time dateTime="2025-09-15" className="text-sm font-light">15/09/2025</time>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mt-2">
                        <ul className="flex flex-wrap gap-2 items-center">
                            <li>
                                <Link
                                    to="/blogs?tag=caycanh"
                                    className="rounded-full bg-transparent px-2 py-0.5 text-sm font-medium text-fg-white ring-1 ring-fg-white ring-inset"
                                >
                                    caycanh
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>

        </Link>
    );
}


const Blog: React.FC<BlogProps> = ({ onSortChange }) => {

    const [isSortOpen, setIsSortOpen] = React.useState(false);
    const buttonSortRef = useRef<HTMLButtonElement>(null);
    const [sortType, setSortType] = useState<string>("");

    const handleSortSelect = (type: string) => {
        setSortType(type);
        onSortChange?.(type);
        setIsSortOpen(false);
    };

    return (
        <LayoutMain>
            <div className="w-full max-w-[1200px] mx-auto py-4">
                <BlogMainChild />
                <div className="py-8 border-b border-gray-300">
                    <div className="w-[200px] h-10 border-[2px] relative">
                        <button
                            ref={buttonSortRef}
                            type="button"
                            aria-expanded={isSortOpen}
                            className="flex items-center justify-between w-full px-4 py-2 cursor-pointer h-full"
                            onClick={() => setIsSortOpen(prev => !prev)}
                        >
                            <h2 className="font-semibold text-black text-xs flex items-center gap-2">SẮP XẾP</h2>
                            <Chevron className={`w-3 h-3 text-black transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`} />
                        </button>

                        <Dropdown
                            isOpen={isSortOpen}
                            className="absolute left-0 top-10 rounded p-4 shadow-lg bg-white z-10 w-full"
                            onClose={() => setIsSortOpen(false)}
                            ignoreRef={buttonSortRef}
                        >
                            <ul className="flex flex-col gap-2">
                                {sortOptions.map(type => (
                                    <li
                                        key={type.value}
                                        onClick={() => handleSortSelect(type.value)}
                                        className={`cursor-pointer hover:text-blue-600 ${sortType === type.value ? "font-semibold text-blue-600" : ""}`}
                                    >
                                        {type.label}
                                    </li>
                                ))}
                            </ul>
                        </Dropdown>
                    </div>
                </div>
                <div className="blog">
                    <BlogChild />
                </div>
            </div>
        </LayoutMain>
    );
}

export default Blog;