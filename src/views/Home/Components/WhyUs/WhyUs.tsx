import { Deliver } from "../../../../assets";

interface WhyUsItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const items: WhyUsItem[] = [
    {
        icon: <Deliver className="w-[32px] h-[32px]" />,
        title: "Giao hàng tận nhà",
        description:
            "Dành riêng cho khách hàng tại Việt Nam, cây được vận chuyển an toàn từ vườn đến tận cửa nhà bạn.",
    },
    {
        icon: <span className="w-[32px] h-[32px]">🌱</span>,
        title: "Thân thiện môi trường",
        description:
            "Chúng tôi cam kết đóng gói và vận chuyển với giải pháp xanh, giảm thiểu rác thải nhựa.",
    },
    {
        icon: <span className="w-[32px] h-[32px]">✨</span>,
        title: "Chất lượng vượt trội",
        description:
            "Cây được chăm sóc bởi đội ngũ nhà vườn hơn 20 năm kinh nghiệm, đảm bảo khỏe mạnh và đẹp nhất.",
    },
    {
        icon: <span className="w-[32px] h-[32px]">🛡</span>,
        title: "Không sâu bệnh",
        description:
            "Mỗi cây đều được kiểm tra kỹ lưỡng để đảm bảo sạch sâu bệnh trước khi đến tay khách hàng.",
    },
];

const WhyUs = () => {
    return (
        <section
            className="w-full py-12 flex justify-center bg-white border-b border-b-black/20"
            aria-labelledby="whyus-heading"
        >
            <div className="max-w-[1200px] w-full flex flex-col items-center px-4">
                {/* Heading */}
                <div className="w-full mb-10 text-center">
                    <h2
                        id="whyus-heading"
                        className="text-3xl md:text-4xl font-bold text-[#1A1B18]"
                    >
                        Vì sao chọn chúng tôi?
                    </h2>
                </div>

                {/* Mobile scrollable / Desktop grid */}
                <ul className="flex gap-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 w-full scrollbar-hide">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="flex-shrink-0 w-[250px] sm:w-auto flex flex-col items-center text-center p-4 rounded-lg transition hover:shadow-md"
                        >
                            <div className="mb-4 text-green-600">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-[#1A1B18]">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default WhyUs;
