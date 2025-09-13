import type React from "react";

interface ButtonProps {
    icon?: React.ReactNode;
    title?: string; // text hiển thị trong nút
    text?: string;  // dùng cho aria-label
    onClick?: () => void; // logic khi click
    type?: "button" | "submit" | "reset"; // hỗ trợ form
    className?: string; // cho phép custom style
    color?: string; // màu nền chính
    hover?: string; // màu nền khi hover
    width?: string; // chiều rộng custom
    height?: string; // chiều cao custom
    disabled?: boolean; // trạng thái disabled
}

const Button: React.FC<ButtonProps> = ({
    icon,
    text,
    title,
    onClick,
    type = "button",
    className = "",
    color = "bg-white text-black",
    hover = "hover:bg-gray-100",
    width,
    height,
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            aria-label={text || title}
            disabled={disabled}
            className={`
                flex items-center gap-2 rounded-lg transition-colors duration-200 py-2
                ${color} ${hover}
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1fa12e]
                ${width ? width : "px-3"} ${height ? height : "py-2"}
                ${className}
            `}
        >
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {title && <span>{title}</span>}
        </button>
    );
};

export default Button;
