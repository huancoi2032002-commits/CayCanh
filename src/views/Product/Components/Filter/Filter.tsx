import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { Plus, Chevron, FilterIcon, XmarkPlus } from "../../../../assets";
import "./Filter.scss";

interface FilterProps {
    onSortChange?: (sortType: string | null) => void;
    onInStockChange?: (inStockOnly: boolean) => void;
}

const Filter: React.FC<FilterProps> = ({ onSortChange, onInStockChange }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isMenuFilterSortOpen, setIsMenuFilterSortOpen] = useState(false);
    const [isMenuSortMobile, setIsMenuSortMobile] = useState(false);
    const [sortType, setSortType] = useState<string | null>(null);
    const [inStockOnly, setInStockOnly] = useState(false);

    const buttonSortRef = useRef<HTMLButtonElement>(null);
    const buttonFilterRef = useRef<HTMLButtonElement>(null);

    // ✅ Lấy giá trị từ URL khi component mount
    useEffect(() => {
        const sort = searchParams.get("sort");
        const stock = searchParams.get("inStock") === "true";

        if (sort !== sortType) {
            setSortType(sort);
            onSortChange?.(sort);
        }
        if (stock !== inStockOnly) {
            setInStockOnly(stock);
            onInStockChange?.(stock);
        }
    }, [searchParams]);


    // Đóng dropdown khi mở dropdown khác
    useEffect(() => {
        if (isFilterOpen) setIsSortOpen(false);
    }, [isFilterOpen]);

    useEffect(() => {
        if (isSortOpen) setIsFilterOpen(false);
    }, [isSortOpen]);

    // ✅ Khi người dùng chọn sắp xếp
    const handleSortSelect = (type: string) => {
        setSortType(type);
        onSortChange?.(type);
        setIsSortOpen(false);

        const newParams = new URLSearchParams(searchParams);
        newParams.set("sort", type);
        setSearchParams(newParams);
    };

    // ✅ Khi người dùng bật / tắt “Còn hàng”
    const handleInStockToggle = () => {
        setInStockOnly((prev) => {
            const newVal = !prev;
            onInStockChange?.(newVal);

            const newParams = new URLSearchParams(searchParams);
            newParams.set("inStock", newVal ? "true" : "false");
            setSearchParams(newParams);

            return newVal;
        });
    };

    return (
        <div>
            {/* Desktop Filter & Sort */}
            <div className="w-full md:flex h-10 hidden md:block">
                {/* FILTER */}
                <div className="h-10 relative w-full md:w-[120px]">
                    <button
                        ref={buttonFilterRef}
                        type="button"
                        aria-expanded={isFilterOpen}
                        className="flex items-center justify-between w-full cursor-pointer px-5 py-2 h-full bg-black text-white gap-3"
                        onClick={() => setIsFilterOpen((prev) => !prev)}
                    >
                        <h2 className="font-semibold flex items-center gap-2">LỌC</h2>
                        <Plus
                            className={`w-3 h-3 transform transition-transform duration-300 ${isFilterOpen ? "rotate-45" : ""
                                }`}
                        />
                    </button>

                    <Dropdown
                        isOpen={isFilterOpen}
                        width="w-full lg:w-[900px] md:w-[500px]"
                        className="absolute top-full left-0 rounded p-4 shadow-lg bg-white z-10"
                        onClose={() => setIsFilterOpen(false)}
                        ignoreRef={buttonFilterRef}
                    >
                        <div>
                            <h4 className="font-semibold mb-2">Có sẵn</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={inStockOnly}
                                            onChange={handleInStockToggle}
                                        />
                                        Còn hàng
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </Dropdown>
                </div>

                {/* SORT */}
                <div className="w-[200px] h-10 border-[2px] relative">
                    <button
                        ref={buttonSortRef}
                        type="button"
                        aria-expanded={isSortOpen}
                        className="flex items-center justify-between w-full px-4 py-2 cursor-pointer h-full"
                        onClick={() => setIsSortOpen((prev) => !prev)}
                    >
                        <h2 className="font-semibold text-black text-sm flex items-center gap-2">
                            SẮP XẾP
                        </h2>
                        <Chevron
                            className={`w-3 h-3 text-black transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    <Dropdown
                        isOpen={isSortOpen}
                        className="absolute left-0 top-10 rounded p-4 shadow-lg bg-white z-10 w-full"
                        onClose={() => setIsSortOpen(false)}
                        ignoreRef={buttonSortRef}
                    >
                        <ul className="flex flex-col gap-2">
                            {[
                                { key: "name-a-z", label: "Tên A - Z" },
                                { key: "name-z-a", label: "Tên Z - A" },
                                { key: "date-old-new", label: "Ngày cũ - mới" },
                                { key: "date-new-old", label: "Ngày mới - cũ" },
                            ].map((item) => (
                                <li
                                    key={item.key}
                                    onClick={() => handleSortSelect(item.key)}
                                    className={`cursor-pointer hover:text-blue-600 ${sortType === item.key
                                        ? "font-semibold text-blue-600"
                                        : ""
                                        }`}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </Dropdown>
                </div>
            </div>

            {/* Mobile Filter & Sort */}
            <div className="w-full h-full p-4 md:hidden">
                <div
                    className="w-full h-10 bg-black flex justify-center items-center gap-2 cursor-pointer"
                    onClick={() => setIsMenuFilterSortOpen(true)}
                >
                    <FilterIcon className="w-5 h-5 text-white fill-white stroke-white" />
                    <span className="text-white text-[17px]">Lọc & Sắp Xếp</span>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <>
                <div
                    className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isMenuFilterSortOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                        }`}
                    onClick={() => setIsMenuFilterSortOpen(false)}
                />
                <div
                    className={`fixed top-0 right-0 h-screen w-[92%] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuFilterSortOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                        }`}
                >
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="font-bold text-lg">Lọc & Sắp Xếp</h2>
                        <span
                            className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                            onClick={() => setIsMenuFilterSortOpen(false)}
                        >
                            <XmarkPlus className="w-5 h-5" />
                        </span>
                    </div>

                    <div className="p-4 flex flex-col">
                        {/* Availability */}
                        <div className="border-b border-b-black/20 pb-3">
                            <h4 className="font-semibold mb-2">Có sẵn</h4>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={inStockOnly}
                                    onChange={handleInStockToggle}
                                />
                                Còn hàng
                            </label>
                        </div>

                        {/* Sort */}
                        <div className="py-3">
                            <div
                                className="flex justify-between"
                                onClick={() => setIsMenuSortMobile((prev) => !prev)}
                            >
                                <h4 className="font-semibold mb-2 w-full">Sắp xếp</h4>
                                <Chevron
                                    className={`w-4 h-4 ${isMenuSortMobile
                                        ? "rotate-180 transition-all"
                                        : "rotate-0 transition-all"
                                        }`}
                                />
                            </div>
                            {isMenuSortMobile && (
                                <ul className="flex flex-col gap-1 mt-2 rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden">
                                    {[
                                        { key: "name-a-z", label: "Tên A - Z" },
                                        { key: "name-z-a", label: "Tên Z - A" },
                                        { key: "date-old-new", label: "Ngày cũ - mới" },
                                        { key: "date-new-old", label: "Ngày mới - cũ" },
                                    ].map((item) => (
                                        <li
                                            key={item.key}
                                            onClick={() => handleSortSelect(item.key)}
                                            className={`px-4 py-2 cursor-pointer transition-colors duration-200 ${sortType === item.key
                                                ? "bg-[#1fa12e]/10 text-[#1fa12e] font-semibold"
                                                : "text-gray-800 hover:bg-gray-100"
                                                }`}
                                        >
                                            {item.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Filter;
