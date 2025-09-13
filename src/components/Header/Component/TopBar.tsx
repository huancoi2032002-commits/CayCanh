import React from "react";
import { Link } from "react-router-dom";

const TopBar: React.FC = () => {
    return (
        <div className="w-full max-w-[1600px] h-full px-[50px] text-white text-[14px] flex gap-[70px] justify-between mx-auto ">
            <div className="h-full flex justify-center items-center flex-1">
                <Link
                    to="/khuyen-mai"
                    title="Xem chi tiết khuyến mãi tuần này"
                    aria-label="Khuyến mãi sốc chỉ trong tuần này"
                >
                    <strong>KHUYẾN MÃI SỐC!</strong> Chỉ trong tuần này! Mua ngay kẻo lỡ!
                </Link>
            </div>

            <div className="h-full flex justify-center items-center flex-1">
                <Link
                    to="/dieu-khoan"
                    title="Xem điều khoản và điều kiện"
                    aria-label="Điều khoản và điều kiện khi đặt hàng"
                >
                    Vui lòng đọc <strong>Điều khoản &amp; Điều kiện</strong> trước khi đặt hàng [Nhấn để xem]
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
