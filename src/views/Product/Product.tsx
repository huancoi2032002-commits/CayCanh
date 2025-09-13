import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import { productsData } from "../../store/Product/Product";
import type { ProductProps } from "../../store/Product/Product";
import ProductItem from "../../components/ProductItem/ProductItem";
import Filter from "./Components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import './Product.scss'


const Product = () => {
    const [inStockOnly, setInStockOnly] = useState(false);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [sortType, setSortType] = useState<string | null>(null);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [filterType, setFilterType] = useState<"flash-sale" | "new" | "rare" | null>(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page") || 1);

    const listRef = useRef<HTMLDivElement>(null);

    // Responsive items per page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsPerPage(4);
            else setItemsPerPage(8);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const typeParam = searchParams.get("type");
        if (typeParam === "flash-sale" || typeParam === "new" || typeParam === "rare") {
            setFilterType(typeParam);
        } else {
            setFilterType(null);
        }
    }, [searchParams]);

    // Lọc sản phẩm theo stock & price
    const filteredProducts = useMemo(() => {
        return productsData.filter((p: ProductProps) => {
            // Giá cuối cùng
            const finalPrice = p.discountPrice != null ? p.price * (1 - p.discountPrice / 100) : p.price;

            // Lọc kho
            const matchStock = !inStockOnly || p.inStock;

            // Lọc theo giá
            const matchPrice = finalPrice >= priceRange[0] && finalPrice <= priceRange[1];

            // Lọc theo loại filterType
            let matchType = true;
            if (filterType === "flash-sale") {
                matchType = p.discountPrice != null;
            } else if (filterType === "new") {
                matchType = p.createdAt ? new Date(p.createdAt) >= new Date(new Date().setMonth(new Date().getMonth() - 1)) : false;
            } else if (filterType === "rare") {
                matchType = p.tags?.includes("rare") ?? false;
            }

            return matchStock && matchPrice && matchType;
        });
    }, [inStockOnly, priceRange, filterType]);



    // Sắp xếp sản phẩm
    const sortedProducts = useMemo(() => {
        const copy = [...filteredProducts];
        switch (sortType) {
            case "price-low-high": return copy.sort((a, b) => a.price - b.price);
            case "price-high-low": return copy.sort((a, b) => b.price - a.price);
            case "name-a-z": return copy.sort((a, b) => a.name.localeCompare(b.name));
            case "name-z-a": return copy.sort((a, b) => b.name.localeCompare(a.name));
            case "date-old-new":
                return copy.sort(
                    (a, b) =>
                        new Date(a.createdAt ?? 0).getTime() - new Date(b.createdAt ?? 0).getTime()
                );

            case "date-new-old":
                return copy.sort(
                    (a, b) =>
                        new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime()
                );
            default: return copy;
        }
    }, [filteredProducts, sortType]);

    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    // Lấy sản phẩm trang hiện tại
    const currentProducts = sortedProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Khi đổi trang → update query param
    const handlePageChange = (page: number) => {
        setSearchParams({ page: page.toString() });
        // Scroll lên đầu danh sách
        listRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <LayoutMain>
            <div className="w-full max-w-[1200px] mx-auto md:py-8">
                <Filter
                    onSortChange={setSortType}
                    onInStockChange={setInStockOnly}
                    onPriceChange={setPriceRange}
                />

                <div ref={listRef} className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {currentProducts.map(product => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="mt-8 flex justify-center">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange} // dùng hàm update URL
                        />
                    </div>
                )}
            </div>
        </LayoutMain>
    );
};

export default Product;
