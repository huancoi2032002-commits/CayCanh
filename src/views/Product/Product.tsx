import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import LayoutMain from "../../layouts/LayoutMain/LayoutMain";
import { productsData } from "../../store/Product/Product";
import type { ProductProps } from "../../store/Product/Product";
import ProductItem from "../../components/ProductItem/ProductItem";
import Filter from "./Components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import "./Product.scss";

const Product = () => {
    const [inStockOnly, setInStockOnly] = useState(false);
    const [sortType, setSortType] = useState<string | null>(null);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [filterType, setFilterType] = useState<"new" | "rare" | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = Number(searchParams.get("page") || 1);
    const listRef = useRef<HTMLDivElement>(null);

    // Responsive items per page
    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 768 ? 4 : 8);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Đọc query param để xác định loại filter
    useEffect(() => {
        const typeParam = searchParams.get("type");
        if (typeParam === "new" || typeParam === "rare") {
            setFilterType(typeParam);
        } else {
            setFilterType(null);
        }
    }, [searchParams]);

    // 🔍 Lọc sản phẩm
    const filteredProducts = useMemo(() => {
        return productsData.filter((p: ProductProps) => {
            // Lọc theo tồn kho
            const matchStock = !inStockOnly || p.inStock;

            // Lọc theo loại filterType
            let matchType = true;
            if (filterType === "new") {
                matchType = p.createdAt
                    ? new Date(p.createdAt) >=
                    new Date(new Date().setMonth(new Date().getMonth() - 1))
                    : false;
            } else if (filterType === "rare") {
                matchType = p.tags?.includes("rare") ?? false;
            }

            return matchStock && matchType;
        });
    }, [inStockOnly, filterType]);

    // 🔢 Sắp xếp sản phẩm
    const sortedProducts = useMemo(() => {
        const copy = [...filteredProducts];
        switch (sortType) {
            case "name-a-z":
                return copy.sort((a, b) => a.name.localeCompare(b.name));
            case "name-z-a":
                return copy.sort((a, b) => b.name.localeCompare(a.name));
            case "date-old-new":
                return copy.sort(
                    (a, b) =>
                        new Date(a.createdAt ?? 0).getTime() -
                        new Date(b.createdAt ?? 0).getTime()
                );
            case "date-new-old":
                return copy.sort(
                    (a, b) =>
                        new Date(b.createdAt ?? 0).getTime() -
                        new Date(a.createdAt ?? 0).getTime()
                );
            default:
                return copy;
        }
    }, [filteredProducts, sortType]);

    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    // 🔄 Chia trang
    const currentProducts = sortedProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        setSearchParams({ page: page.toString() });
        listRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <LayoutMain>
            <div className="w-full max-w-[1200px] mx-auto md:py-8">
                <Filter
                    onSortChange={setSortType}
                    onInStockChange={setInStockOnly}
                    onPriceChange={() => { }} // không dùng lọc theo giá nữa
                />

                <div
                    ref={listRef}
                    className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
                >
                    {currentProducts.map((product) => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="mt-8 flex justify-center">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                )}
            </div>
        </LayoutMain>
    );
};

export default Product;
