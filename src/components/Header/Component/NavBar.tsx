import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Mark, Search, Bars, Chevron, XmarkPlus } from "../../../assets";
import SearchBar from "../../Search/SearchBar";
import Logo from "../../../assets/Logo.jpg";
import Dropdown from "../../Dropdown/Dropdown";
import "./Navbar.scss"

interface MenuItem {
    to: string;
    label: string;
    children?: MenuItem[];
}

const NavBar = () => {
    const location = useLocation();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const menuItems: MenuItem[] = [
        { to: "/", label: "Trang chủ" },
        {
            to: "/products",
            label: "Sản phẩm",
            children: [
                { to: "/products/indoor", label: "Cây trong nhà" },
                { to: "/products/outdoor", label: "Cây ngoài trời" },
            ],
        },
        {
            to: "/accessory",
            label: "Phụ kiện",
            children: [
                { to: "/accessory/indoor", label: "Cây trong nhà" },
                { to: "/accessory/outdoor", label: "Cây ngoài trời" },
            ],
        },
        { to: "/blog", label: "Bài viết" },
        { to: "/about", label: "Giới thiệu" },
        { to: "/contact", label: "Liên hệ" },
    ];

    return (
        <header className="h-20 w-full shadow-lg bg-white">
            <nav className="w-full max-w-[1200px] h-full flex items-center justify-between mx-auto" aria-label="Điều hướng chính">
                {/* Logo */}
                <div className="text-black text-2xl font-bold">
                    <Link to="/" aria-label="Trang chủ">
                        <img src={Logo} className="w-[120px]" alt="Logo" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="flex-1 hidden lg:flex justify-center">
                    {!isSearchOpen ? (
                        <ul className="flex gap-5 text-lg font-bold">
                            {menuItems.map((item) => {
                                const path = location.pathname.replace(/\/$/, ""); // loại bỏ dấu / cuối
                                const itemPath = item.to.replace(/\/$/, "");

                                // Check menu cha
                                const isParentActive = item.children?.some(child => path === child.to.replace(/\/$/, ""));

                                // Active cho menu hiện tại hoặc menu cha
                                const isActive = path === itemPath || isParentActive;

                                if (item.children) {
                                    return (
                                        <li key={item.to} className="relative group">
                                            {item.children ? (
                                                <>
                                                    <div
                                                        className={`flex items-center gap-1 cursor-pointer transition-colors hover:text-[#1fa12e] ${isActive ? "text-[#1fa12e]" : "text-[#111111]"
                                                            }`}
                                                    >
                                                        <Link to={item.to}>{item.label}</Link>
                                                        <Chevron className="w-3 h-3 transform transition-transform group-hover:rotate-180" />
                                                    </div>

                                                    {/* Dropdown menu */}
                                                    <Dropdown trigger="hover" className="mt-1 left-0">
                                                        <ul className="flex flex-col p-2 text-sm">
                                                            {item.children.map((child) => (
                                                                <li key={child.to}>
                                                                    <NavLink
                                                                        to={child.to}
                                                                        className={({ isActive: navIsActive }) =>
                                                                            `block px-2 py-1 rounded hover:bg-gray-100 ${navIsActive ? "text-[#1fa12e]" : "text-[#111111]"
                                                                            }`
                                                                        }
                                                                    >
                                                                        {child.label}
                                                                    </NavLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </Dropdown>
                                                </>
                                            ) : (
                                                <NavLink
                                                    to={item.to}
                                                    end
                                                    className={({ isActive: navIsActive }) =>
                                                        `flex items-center gap-1 cursor-pointer transition-colors hover:text-[#1fa12e] ${navIsActive ? "text-[#1fa12e]" : "text-[#111111]"
                                                        }`
                                                    }
                                                >
                                                    {item.label}
                                                </NavLink>
                                            )}

                                            {/* Underline */}
                                            <span
                                                className={`absolute left-0 -bottom-1 w-full h-[2px] bg-[#1fa12e] transition-transform duration-300 ease-out origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                                    }`}
                                            />
                                        </li>

                                    );
                                }

                                return (
                                    <li key={item.to} className="relative group">
                                        <NavLink
                                            to={item.to}
                                            className={() =>
                                                `flex items-center gap-1 cursor-pointer transition-colors ${isActive ? "text-[#1fa12e]" : "text-[#111111]"
                                                } hover:text-[#1fa12e]`
                                            }
                                            end={true}
                                        >
                                            {item.label}
                                        </NavLink>
                                        <span
                                            className={`absolute left-0 -bottom-1 w-full h-[2px] bg-[#1fa12e] transition-transform duration-300 ease-out origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                                }`}
                                        />
                                    </li>
                                );
                            })}
                        </ul>


                    ) : (
                        <SearchBar />
                    )}
                </div>

                {/* Desktop Search Button */}
                <div className="hidden lg:block">
                    <button
                        type="button"
                        aria-label={isSearchOpen ? "Đóng tìm kiếm" : "Mở tìm kiếm"}
                        className="p-2 rounded hover:bg-gray-100 transition-colors cursor-pointer"
                        onClick={() => setIsSearchOpen((prev) => !prev)}
                    >
                        {isSearchOpen ? <Mark className="w-5 h-5 text-black" /> : <Search className="w-5 h-5 text-black" />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
                        className="p-2 rounded hover:bg-gray-100 transition-colors cursor-pointer"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        {isMenuOpen ? <Mark className="w-6 h-6 text-black" /> : <Bars className="w-6 h-6 text-black" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <>
                {/* Overlay */}
                <div
                    className={`fixed top-0 left-0 w-screen h-screen bg-black/40 z-[140] transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    onClick={() => setIsMenuOpen(false)}
                />


                {/* Side Menu */}
                <div className={`fixed top-0 left-0 h-screen w-[92%] bg-white shadow-lg z-[150] transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                    <div className="py-2 flex items-center px-4 border-b border-b-black/30">
                        <span
                            className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <XmarkPlus className="w-5 h-5" />
                        </span>
                    </div>

                    <ul className="flex flex-col gap-2 py-6 text-lg font-bold px-4">
                        {menuItems.map((item, idx) => {
                            const isOpen = openDropdown === `${item.to}-${idx}`;
                            return (
                                <li key={`${item.to}-${idx}`} className="relative flex flex-col">
                                    <div className="flex justify-between items-center">
                                        <Link
                                            to={item.to}
                                            className="py-2 text-[#111111] hover:text-[#1fa12e] flex-1"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                        {item.children && (
                                            <button
                                                className="p-2"
                                                onClick={() =>
                                                    setOpenDropdown((prev) =>
                                                        prev === `${item.to}-${idx}` ? null : `${item.to}-${idx}`
                                                    )
                                                }
                                            >
                                                <Chevron
                                                    className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                        )}
                                    </div>
                                    {item.children && isOpen && (
                                        <ul className="flex flex-col gap-2 p-2 pl-4 transition-all duration-300">
                                            {item.children.map((child, cIdx) => (
                                                <li key={`${child.to}-${cIdx}`}>
                                                    <Link
                                                        to={child.to}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1fa12e] hover:text-white rounded"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}

                        <li>
                            <SearchBar />
                        </li>
                    </ul>
                </div>
            </>



        </header>
    );
};

export default NavBar;
