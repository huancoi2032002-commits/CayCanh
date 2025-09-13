import Duc from "../../../../assets/duc.jpg";

const Connect = () => {
    return (
        <section
            className="w-full pb-9"
            aria-labelledby="connect-heading"
        >
            <div className="relative w-full lg:h-[550px]">
                {/* Background image */}
                <div>
                    <img
                        src={Duc}
                        alt="Chuyên gia tư vấn chăm sóc cây cảnh"
                        className="max-h-[550px] w-full object-cover"
                    />
                </div>

                {/* Overlay content */}
                <div
                    className="
            absolute top-0 left-0 w-full h-full bg-[#25958FEB]
            flex flex-col justify-center px-6 py-8
            lg:left-1/2 lg:w-1/2 lg:px-[70px]
          "
                >
                    <h2
                        id="connect-heading"
                        className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#212326]"
                    >
                        Hỏi ngay chuyên gia cây cảnh của chúng tôi!
                    </h2>

                    <div className="mt-4 md:mt-5 max-w-[600px]">
                        <p className="text-[#212326] text-sm md:text-base leading-relaxed">
                            Bạn gặp khó khăn khi làm quen và chăm sóc cây?
                            Các chuyên gia của chúng tôi sẽ hướng dẫn bạn cách chăm sóc và giải đáp mọi thắc mắc liên quan.
                            Hãy cho chúng tôi biết ngay nhé!
                        </p>

                        <a
                            href="#"
                            aria-label="Kết nối với chuyên gia cây cảnh"
                            className="
                                inline-flex items-center justify-center w-[200px] md:w-[240px] h-[45px] md:h-[50px]
                                bg-[#1A1B18] text-white mt-4
                                transition-all duration-300 ease-in-out
                                hover:bg-[#1A1B18]/80 hover:scale-105 hover:shadow-lg
                            "
                        >
                            Kết nối
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
