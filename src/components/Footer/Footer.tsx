import { Link } from "react-router-dom";
import { Facebook, Instagram, Tiktok, Youtube } from "../../assets";

interface MenuItem {
    to?: string;
    title?: string;
    label?: string;
    children: MenuItem[];
}

const Footer = () => {
    const menuItems: MenuItem[] = [
        {
            title: "CỬA HÀNG",
            children: [
                { to: "/a", label: "Sản phẩm mới", children: [] },
                { to: "/b", label: "Bán chạy nhất", children: [] },
                { to: "/c", label: "Khuyến mãi", children: [] },
                { to: "/d", label: "Flash Sale", children: [] },
            ],
        },
        {
            title: "THÔNG TIN",
            children: [
                { to: "/our-story", label: "Câu chuyện của chúng tôi", children: [] },
                { to: "/reviews", label: "Đánh giá", children: [] },
                { to: "/terms", label: "Điều khoản & Điều kiện", children: [] },
                { to: "/faq", label: "Câu hỏi thường gặp", children: [] },
            ],
        },
        {
            title: "KHÁM PHÁ",
            children: [
                { to: "/contact", label: "Liên hệ", children: [] },
                { to: "/journal", label: "Nhật ký cây cảnh", children: [] },
                { to: "/wholesale", label: "Bán sỉ", children: [] },
            ],
        },
    ];


    return (
        <footer className="w-full text-[#1A1B18] py-10 flex flex-col items-center border-t border-t-black/20">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* About Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Về Đức</h2>
                    <p className="text-sm leading-relaxed text-gray-700">
                        Đức là một cá nhân được thành lập vào tháng 4/2024, chuyên bán các
                        loại cây cảnh như Arecaceae, Hoya và Succulents. Chúng tôi cam kết
                        mang đến sản phẩm chất lượng và dịch vụ tận tâm.
                    </p>
                </div>

                {/* Menu Sections */}
                {menuItems.map((menu) => (
                    <nav key={menu.title} aria-label={menu.title}>
                        <h3 className="text-lg font-semibold mb-4">{menu.title}</h3>
                        <ul className="space-y-2">
                            {menuItems[0].children.map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={item.to || "#"}
                                        className="
                                            relative inline-block text-gray-700 
                                            transition-colors duration-300 
                                            hover:text-black
                                            after:content-[''] after:absolute after:left-0 after:-bottom-1 
                                            after:w-0 after:h-[1px] after:bg-black/50 after:transition-all after:duration-300 
                                            hover:after:w-full
                                        "
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </nav>
                ))}
            </div>
            <div className="w-full max-w-[1200px] py-2 px-6">
                <p className="text-[16px] mb-4 font-semibold">Follow Us</p>
                <div className="w-auto h-10">
                    <ul className="flex gap-3">
                        <li>
                            <Link
                                to="https://www.facebook.com/ucnguyen.337352"
                                className="flex items-center justify-center w-6 h-6 rounded-full
                                    transition-all duration-500 ease-in-out
                                    hover:w-8 hover:h-8 hover:bg-black hover:border-black group"
                                aria-label="Facebook
                                "
                            >
                                <Facebook className="w-4 h-4 text-gray-700 transition-colors duration-500 group-hover:text-white" />
                            </Link>

                        </li>
                        <li>
                            <Link
                                to="https://www.facebook.com/ucnguyen.337352"
                                className="flex items-center justify-center w-6 h-6 rounded-full
                                    transition-all duration-500 ease-in-out
                                    hover:w-8 hover:h-8 hover:bg-black hover:border-black group"
                                aria-label="Facebook
                                "
                            >
                                <Instagram className="w-4 h-4 text-gray-700 transition-colors duration-500 group-hover:text-white" />
                            </Link>

                        </li>
                        <li>
                            <Link
                                to="https://www.facebook.com/ucnguyen.337352"
                                className="flex items-center justify-center w-6 h-6 rounded-full
                                    transition-all duration-500 ease-in-out
                                    hover:w-8 hover:h-8 hover:bg-black hover:border-black group"
                                aria-label="Facebook
                                "
                            >
                                <Tiktok className="w-4 h-4 text-gray-700 transition-colors duration-500 group-hover:text-white" />
                            </Link>

                        </li>
                        <li>
                            <Link
                                to="https://www.facebook.com/ucnguyen.337352"
                                className="flex items-center justify-center w-6 h-6 rounded-full
                                    transition-all duration-500 ease-in-out
                                    hover:w-8 hover:h-8 hover:bg-black hover:border-black group"
                                aria-label="Facebook
                                "
                            >
                                <Youtube className="w-4 h-4 text-gray-700 transition-colors duration-500 group-hover:text-white" />
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-t-black/20 mt-8 pt-4 text-center text-xs text-gray-500 w-full">
                © {new Date().getFullYear()} Đức Cây Cảnh. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
