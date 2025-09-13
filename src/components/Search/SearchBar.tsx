import React, { useState } from "react";
import { Mark, Search} from "../../assets/index"; // Icon search & clear

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState("");

    // Hàm submit tìm kiếm
    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (query.trim()) {
            console.log("🔎 Tìm kiếm:", query);
            // 🚀 Sau này bạn gắn API tìm kiếm ở đây
        }
    };

    // Hàm xóa input
    const clearSearch = () => {
        setQuery("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative w-full lg:px-5"
            role="search"
            aria-label="Tìm kiếm sản phẩm"
        >
            {/* Icon search bên trái (click = submit) */}
            <button
                type="submit"
                className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1fa12e] cursor-pointer"
                aria-label="Tìm kiếm"
            >
                <Search className="w-5 h-5" />
            </button>

            {/* Input */}
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full border border-gray-300 rounded pl-10 pr-10 py-2 
                   focus:outline-none focus:ring-2 focus:ring-[#1fa12e]"
            />

            {/* Nút xóa */}
            {query && (
                <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Xóa tìm kiếm"
                >
                    <Mark className="w-4 h-4" />
                </button>
            )}
        </form>
    );
};

export default SearchBar;
