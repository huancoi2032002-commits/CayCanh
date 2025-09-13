import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { Plus, Chevron, FilterIcon, XmarkPlus } from "../../../../assets";
import "./Filter.scss"

interface FilterProps {
    onSortChange?: (sortType: string | null) => void;
    onInStockChange?: (inStockOnly: boolean) => void;
    onPriceChange?: (priceRange: [number, number]) => void;
}

const Filter: React.FC<FilterProps> = ({ onSortChange, onInStockChange, onPriceChange }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isMenuFilterSortOpen, setIsMenuFilterSortOpen] = useState(false);
    const [isMenuSortMobile, setIsMenuSortMobile] = useState(false);
    const [sortType, setSortType] = useState<string | null>(null);
    const [inStockOnly, setInStockOnly] = useState(false);
    const buttonSortRef = useRef<HTMLButtonElement>(null);
    const buttonFilterRef = useRef<HTMLButtonElement>(null);

    const maxPriceValue = 10000000;
    const [price, setPrice] = useState<number>(maxPriceValue);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(maxPriceValue);

    useEffect(() => {
        onPriceChange?.([minPrice, maxPrice]);
    }, []);

    // Đóng dropdown khi mở dropdown khác
    useEffect(() => { if (isFilterOpen) setIsSortOpen(false); }, [isFilterOpen]);
    useEffect(() => { if (isSortOpen) setIsFilterOpen(false); }, [isSortOpen]);

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        setPrice(val);
        setMaxPrice(val); // cập nhật maxPrice để thống nhất với slider
        onPriceChange?.([0, val]);

        const percent = (val / maxPriceValue) * 100;
        e.target.style.background = `linear-gradient(to right, #111 ${percent}%, #d1d5db ${percent}%)`;
    };

    const handleSortSelect = (type: string) => {
        setSortType(type);
        onSortChange?.(type);
        setIsSortOpen(false);
    };

    const handleInStockToggle = () => {
        setInStockOnly(prev => {
            const newVal = !prev;
            onInStockChange?.(newVal);
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
                        onClick={() => setIsFilterOpen(prev => !prev)}
                    >
                        <h2 className="font-semibold flex items-center gap-2">LỌC</h2>
                        <Plus className={`w-3 h-3 transform transition-transform duration-300 ${isFilterOpen ? "rotate-45" : ""}`} />
                    </button>

                    <Dropdown
                        isOpen={isFilterOpen}
                        width="w-full lg:w-[900px] md:w-[500px]"
                        className="absolute top-full left-0 rounded p-4 shadow-lg bg-white z-10"
                        onClose={() => setIsFilterOpen(false)}
                        ignoreRef={buttonFilterRef}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Availability */}
                            <div>
                                <h4 className="font-semibold mb-2">Có sẵn</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" checked={inStockOnly} onChange={handleInStockToggle} />
                                            Còn hàng
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            {/* Price */}
                            <div>
                                <h4 className="font-semibold mb-2">Giá</h4>
                                <input
                                    type="range"
                                    min={0}
                                    max={maxPriceValue}
                                    value={price}
                                    onChange={handlePriceChange}
                                    className="w-full"
                                />
                                <p className="text-sm text-gray-600 mt-1">Price: $0 — ${price}</p>
                            </div>
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
                        onClick={() => setIsSortOpen(prev => !prev)}
                    >
                        <h2 className="font-semibold text-black text-sm flex items-center gap-2">SẮP XẾP</h2>
                        <Chevron className={`w-3 h-3 text-black transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`} />
                    </button>

                    <Dropdown
                        isOpen={isSortOpen}
                        className="absolute left-0 top-10 rounded p-4 shadow-lg bg-white z-10 w-full"
                        onClose={() => setIsSortOpen(false)}
                        ignoreRef={buttonSortRef}
                    >
                        <ul className="flex flex-col gap-2">
                            {["price-high-low", "price-low-high", "name-a-z", "name-z-a", "date-old-new", "date-new-old"].map(type => (
                                <li
                                    key={type}
                                    onClick={() => handleSortSelect(type)}
                                    className={`cursor-pointer hover:text-blue-600 ${sortType === type ? "font-semibold text-blue-600" : ""}`}
                                >
                                    {type.replace(/-/g, " ").toUpperCase()}
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
                    className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isMenuFilterSortOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    onClick={() => setIsMenuFilterSortOpen(false)}
                />

                <div
                    className={`fixed top-0 right-0 h-screen w-[92%] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuFilterSortOpen ? "translate-x-0" : "translate-x-full"}`}
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
                                <input type="checkbox" checked={inStockOnly} onChange={handleInStockToggle} />
                                Còn hàng
                            </label>
                        </div>

                        {/* Price */}
                        <div className="py-3 border-b border-b-black/20">
                            <h4 className="font-semibold mb-2">Giá</h4>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    min={0}
                                    max={maxPriceValue}
                                    placeholder="Từ"
                                    value={minPrice}
                                    onChange={(e) => {
                                        const val = Number(e.target.value) || 0;
                                        setMinPrice(val);
                                        onPriceChange?.([val, maxPrice]);
                                    }}
                                    className="w-20 border px-2 py-1 rounded text-sm"
                                />
                                <span>-</span>
                                <input
                                    type="number"
                                    min={0}
                                    max={maxPriceValue}
                                    placeholder="Đến"
                                    value={maxPrice}
                                    onChange={(e) => {
                                        const val = Number(e.target.value) || maxPriceValue;
                                        setMaxPrice(val);
                                        onPriceChange?.([minPrice, val]);
                                    }}
                                    className="w-24 border px-2 py-1 rounded text-sm"
                                />
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                                Price: {minPrice} — {maxPrice}
                            </p>
                        </div>

                        {/* Sort */}
                        <div className="py-3">
                            <div className="flex justify-between" onClick={() => setIsMenuSortMobile(prev => !prev)}>
                                <h4 className="font-semibold mb-2 w-full">Sắp xếp</h4>
                                <Chevron
                                    className={`w-4 h-4 ${isMenuSortMobile ? "rotate-180 transition-all" : "rotate-0 transition-all"}`}
                                />
                            </div>
                            {isMenuSortMobile && (
                                <ul className="flex flex-col gap-1 mt-2 rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden">
                                    {[
                                        { key: "price-high-low", label: "Giá cao - thấp" },
                                        { key: "price-low-high", label: "Giá thấp - cao" },
                                        { key: "name-a-z", label: "Tên A - Z" },
                                        { key: "name-z-a", label: "Tên Z - A" },
                                        { key: "date-old-new", label: "Ngày cũ - mới" },
                                        { key: "date-new-old", label: "Ngày mới - cũ" },
                                    ].map(item => (
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
