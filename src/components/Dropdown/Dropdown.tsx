import { useEffect, useRef } from "react";

interface DropdownProps {
    isOpen?: boolean;
    trigger?: "hover" | "click";
    direction?: "down" | "left" | "right";
    className?: string;
    width?: string;
    maxHeight?: string;
    children: React.ReactNode;
    onClose?: () => void;
    ignoreRef?: React.RefObject<HTMLElement | null>;
}

const Dropdown: React.FC<DropdownProps> = ({
    isOpen = false,
    trigger = "click",
    direction = "down",
    className = "",
    width = "w-[300px]",
    maxHeight = "max-h-[300px]",
    children,
    onClose,
    ignoreRef,
}) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Click-outside only for click trigger & when open
    useEffect(() => {
        if (trigger === "hover" || !isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(target) &&
                !(ignoreRef?.current && ignoreRef.current.contains(target))
            ) {
                onClose?.();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose, ignoreRef, trigger]);

    const baseClasses =
        "bg-white shadow-xl z-50 overflow-hidden transition-all duration-200 ease-in-out";

    // HOVER MODE: dùng group-hover (parent phải có class "group")
    if (trigger === "hover") {
        return (
            <div
                ref={dropdownRef}
                className={[
                    "dropdown-container absolute left-0 top-full",
                    width,
                    baseClasses,
                    // hidden by default
                    "opacity-0 max-h-0 invisible pointer-events-none -translate-y-2",
                    // show when parent .group hovere
                    "group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:max-h-[500px]",
                    className,
                ].join(" ")}
            >
                {children}
            </div>
        );
    }

    // CLICK MODE: dùng isOpen để show/hide
    let animation = "";
    if (direction === "down") {
        animation = isOpen
            ? `opacity-100 ${maxHeight} translate-y-0`
            : "opacity-0 max-h-0 -translate-y-2 pointer-events-none";
    } else if (direction === "right") {
        animation = isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none";
    } else {
        animation = isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full pointer-events-none";
    }

    return (
        <div
            ref={dropdownRef}
            className={`dropdown-container absolute left-0 z-50 ${width} ${baseClasses} ${animation} ${className}`}
        >
            {children}
        </div>
    );
};

export default Dropdown;
