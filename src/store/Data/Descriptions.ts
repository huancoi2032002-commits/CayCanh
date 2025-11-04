import type { PlantDescriptionData } from "../Type/Plants.ts";

export const productDescriptions: Record<string, PlantDescriptionData> = {
    "1": {
        name: "Monstera Albo Variegata",
        intro: "Monstera Albo Variegata...",
        sections: [
            {
                title: "🌿 1. Thông tin tổng quan",
                type: "table",
                content: [
                    { label: "Tên khoa học", value: "Monstera deliciosa ‘Albo Variegata’" },
                    { label: "Tên thường gọi", value: "Monstera Albo, Monstera đột biến trắng" },
                    { label: "Họ thực vật", value: "Araceae (họ Ráy)" },
                    { label: "Nguồn gốc", value: "Trung và Nam Mỹ" },
                ],
            },
            {
                title: "🌱 2. Đặc điểm hình thái",
                type: "list",
                content: [
                    "Lá: Rất to (25–60 cm), có đốm, vệt hoặc mảng trắng sữa, kem hoặc ngà; phần trắng là do thiếu diệp lục (chlorophyll) – kết quả của đột biến tự nhiên.",
                    "Thân: Dạng leo, có rễ khí sinh bám vào giá thể hoặc cột xơ dừa.",
                    "Màu sắc: Màu loang trắng – xanh xen kẽ, tạo cảm giác “vẽ tay tự nhiên”, cực hiếm.",
                    "Tốc độ phát triển: Chậm hơn Monstera thường vì phần trắng không quang hợp được.",
                    "Tuổi thọ: Nhiều năm, có thể sống bền và ra hoa khi đủ trưởng thành.",
                ],
            },
            {
                title: "🌤️ 3. Điều kiện sinh trưởng",
                type: "list",
                content: [
                    "Ánh sáng: Ưa sáng gián tiếp (ánh sáng tán xạ). Nếu thiếu sáng, lá xanh lại, mất variegation. Nếu nắng gắt, phần trắng dễ cháy.",
                    "Nhiệt độ: 18–30°C (ổn định quanh 25°C là lý tưởng).",
                    "Độ ẩm: 60–80%. Có thể phun sương nhẹ 2–3 lần/tuần.",
                    "Không khí: Thoáng, tránh gió mạnh và không để quạt thổi trực tiếp.",
                ],
            },
            {
                title: "🪴 4. Cách trồng & chăm sóc",
                type: "list",
                content: [
                    {
                        title: "🌱 Đất trồng",
                        text: "Trộn theo tỉ lệ:",
                        items: [
                            "40% xơ dừa hoặc vỏ thông nhỏ",
                            "30% perlite (đá trân châu) hoặc pumice (đá bọt)",
                            "20% đất mùn tơi xốp",
                            "10% than hoạt tính hoặc vermicompost (phân trùn quế)",
                        ],
                    },
                    "→ Mục tiêu: thoáng khí, thoát nước tốt nhưng vẫn giữ ẩm.",
                    {
                        title: "💧 Tưới nước",
                        items: [
                            "Kiểm tra độ ẩm đất trước khi tưới (đất khô 2–3cm bề mặt mới tưới).",
                            "Mùa mưa: giảm tần suất để tránh úng.",
                            "Dùng nước lọc hoặc nước để qua đêm để giảm clo.",
                        ],
                    },
                    {
                        title: "🌿 Phân bón",
                        items: [
                            "Dùng phân hữu cơ hoai mục hoặc NPK loãng (10-10-10 hoặc 20-20-20) mỗi 2–3 tuần.",
                            "Bổ sung vi lượng (Mg, Ca, Fe) giúp lá xanh đậm và khỏe.",
                            "Tránh bón quá mức → gây cháy rễ, ảnh hưởng phần trắng.",
                        ],
                    },
                    {
                        title: "📏 Giá thể leo",
                        text: "Nên cho leo cột xơ dừa hoặc lưới trụ, giúp thân đứng vững và lá mở to, xẻ đẹp.",
                    },
                ],
            },
            {
                title: "🌱 5. Nhân giống",
                type: "list",
                content: [
                    {
                        title: "Phương pháp: Giâm cành.",
                        items: [
                            "Cắt đoạn thân có ít nhất 1 mắt ngủ + 1 rễ khí sinh + 1 lá khỏe.",
                            "Ngâm đầu cắt với thuốc kích rễ (N3M hoặc Atonik) vài phút.",
                            "Cắm vào giá thể ẩm, giữ sáng nhẹ, độ ẩm cao.",
                            "Sau 2–4 tuần sẽ ra rễ mới.",
                        ]
                    },
                    {
                        text: "Lưu ý: Vì là cây đột biến, tỉ lệ giữ đột biến trắng không ổn định — nên chọn cành có phần trắng rõ, tránh toàn xanh hoặc toàn trắng."
                    }

                ]
            },
            {
                title: "💎 6. Ý nghĩa phong thủy",
                type: "list",
                content: [
                    {
                        title: "Tượng trưng cho:",
                        items: [
                            "Sự quý hiếm, vượng khí, thịnh vượng và may mắn.",
                            "Phần trắng tượng trưng cho ánh sáng, trí tuệ, thanh khiết.",
                            "Phần xanh biểu trưng cho sức sống, tiền tài, sinh khí.",
                            "Sự hòa quyện giữa trắng – xanh thể hiện âm dương cân bằng, giúp gia chủ gặp thuận lợi, tránh điều xui rủi.",
                        ]
                    },
                    {
                        title: "Hợp mệnh:",
                        items: [
                            "Rất hợp với Mệnh Kim (màu trắng) và Mệnh Mộc (màu xanh).",
                            "Giúp mệnh Thổ tăng vận tài và năng lượng sáng tạo."
                        ]
                    },
                    {
                        title: "Vị trí đặt cây:",
                        items: [
                            "Phòng khách, văn phòng, gần cửa sổ sáng nhẹ – thu hút vượng khí.",
                            "Tránh nơi ẩm thấp hoặc thiếu sáng lâu ngày (sẽ mất đột biến)."
                        ]
                    }
                ]
            }
        ],
    },
    "2": {
        name: "Monstera Thaicons",
        intro: "Monstera Thaicons",
        sections: [
            {
                title: "🌿 1. Thông tin tổng quan",
                type: "table",
                content: [
                    { label: "<b>Nguồn gốc</b>", value: "Thái Lan" },
                    { label: "<b>Họ</b>", value: "Araceae" },
                ],
            },
            {
                title: "🌱 2. Độ khó trồng và chăm sóc",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Monstera Thai Constellation",
                    level: 2.5,
                    scale: 6,
                    description: "Khá Dễ",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                title: "Cây Monstera rất phù hợp cho người mới bắt đầu vì:",
                type: "list",
                content: [
                    {
                        title: "Ưu điểm",
                        items: [
                            "Dễ thích nghi với nhiều môi trường.",
                            "Chăm sóc đơn giản, không cần tưới nước thường xuyên.",
                            "Ít sâu bệnh, chỉ cần tránh tưới quá nhiều để không bị úng rễ."
                        ]
                    },
                ]
            },
            {
                title: "🌱 Công thức đất trồng Monstera chuẩn:",
                type: "list",
                content: [
                    {
                        title: "",
                        items: [
                            "<b>1 phần đất thịt nhẹ hoặc đất mùn </b>(cung cấp dinh dưỡng)",
                            "<b>1 phần xơ dừa hoặc than bùn (peat moss) </b>(giữ ẩm)",
                            "<b>1 phần trấu hun hoặc perlite </b>(giúp thoát nước, tránh úng)",
                            "<b>1 phần vỏ cây mục hoặc đá pumice </b>(tăng độ thoáng khí)",
                        ]

                    },
                    "🚫 <b>Tránh đất quá nén chặt hoặc giữ nước quá lâu</b>, vì dễ làm rễ bị thối.",
                    {
                        title: "💡 Lưu ý:",
                        items: [
                            "Nếu bạn trồng Monstera trong chậu, hãy đảm bảo <b>có lỗ thoát nước</b> dưới đáy chậu.",
                            "<b>Có thể bón phân hữu cơ </b>(phân trùn quế, phân cá, hoặc phân tan chậm) 1-2 tháng/lần để cây phát triển mạnh.",
                        ]
                    },
                ]
            },
            {
                title: "Ánh sáng phù hợp cho cây Monstera Thai Constellation",
                type: "list",
                content: [
                    "🔆 <b>Sáng gián tiếp, trung bình đến mạnh </b>(Bright, Indirect Light) là tốt nhất!",
                    {
                        title: "<b>Chi tiết về ánh sáng:</b>",
                        items: [
                            "<b>Tốt nhất</b>: Đặt gần cửa sổ có rèm, nơi có ánh sáng khuếch tán.",
                            "<b>Có thể chịu được</b>: Ánh sáng yếu, nhưng lá có thể phát triển chậm hơn.",
                            "<b>Tránh</b>: Ánh nắng trực tiếp gắt (đặc biệt là giữa trưa), vì có thể làm cháy lá, gây đốm nâu.",
                        ]
                    },
                    {
                        title: "💡 <b>Lưu ý:</b>",
                        items: [
                            "Nếu lá cây nhỏ hơn bình thường, ít rách (đối với Monstera lá xẻ), có thể cây đang thiếu sáng.",
                            "Nếu đặt trong phòng tối, có thể dùng đèn LED trồng cây (<b>grow light</b>) để hỗ trợ.",
                        ]
                    },
                    {
                        title: "📍 <b>Vị trí lý tưởng trong nhà:</b>",
                        items: [
                            "Gần cửa sổ hướng <b>Đông hoặc Tây</b> (có rèm nhẹ).",
                            "Nếu cửa sổ hướng Nam, cần để xa hơn hoặc có màng lọc ánh sáng.",
                        ]
                    }
                ]
            },
            {
                title: "Nhiệt độ phù hợp cho cây Monstera Thai Constellation",
                type: "list",
                content: [
                    "🌿 <b>Nhiệt độ lý tưởng:</b> cho cây Monstera: 18 - 30°C",
                    "Nếu nhiệt độ xuống dưới <b>10°C</b>, cây có thể bị sốc lạnh, ngừng phát triển hoặc rụng lá.",
                    {
                        title: "📌 <b>Lưu ý để giữ cây khỏe mạnh:</b>",
                        items: [
                            "<b>Tránh gió lùa và điều hòa thổi trực tiếp </b>(quạt, máy lạnh có thể làm khô lá).",
                            "<b>Không để cây ngoài trời vào mùa lạnh</b> nếu nhiệt độ xuống dưới 15°C.",
                            "<b>Nếu trời quá nóng </b>(>30°C), tăng cường tưới nước, tạo độ ẩm bằng phun sương hoặc đặt chậu cây gần khay nước.",
                        ]
                    },
                    {
                        title: "📍 <b>Dấu hiệu cây bị nhiệt độ ảnh hưởng:</b>",
                        items: [
                            "<b>Quá lạnh:</b> Lá chuyển vàng hoặc rũ xuống.",
                            "<b>Quá nóng:</b> Lá có đốm nâu, héo nhanh dù đất vẫn ẩm."
                        ]
                    },
                ]
            },
            {
                title: "Nước cho cây Monstera Thai Constellation",
                type: "list",
                content:[
                    "Cây Monstera thích đất ẩm nhưng không sũng nước. Cách tưới lý tưởng là <b>khi lớp đất mặt (khoảng 2-3cm) khô thì mới tưới tiếp.</b>",
                    {
                        title: "📌 <b>Nguyên tắc tưới nước:</b>",
                        items: [
                            "<b>Tưới sâu</b> đến khi nước chảy ra khỏi đáy chậu, giúp rễ hút đủ nước.",
                            "<b>Kiểm tra độ ẩm đất trước khi tưới</b> bằng cách chọc ngón tay hoặc dùng que thử.",
                            "<b>Giảm tưới vào mùa đông</b>, chỉ tưới khi đất khô hoàn toàn.",
                        ]
                    },
                    "🚫 Tránh tưới quá nhiều, vì dễ gây úng rễ, thối gốc. Nếu thấy lá vàng nhợt nhạt, có thể bạn đang tưới quá tay!",
                    {
                        title: "📍 <b>Tưới bao nhiêu lần một tuần?</b>",
                        items: [
                            "<b>Mùa nóng:</b> 1-2 lần/tuần",
                            "<b>Mùa lạnh:</b> 7-10 ngày/lần",
                            "<b>Nếu trồng trong nước (thủy sinh):</b> Thay nước 1-2 lần/tuần, tránh để nước bị đục.",
                        ]
                    },
                ]
            },
            {
                title: "Độ ẩm cho cây Monstera Thai Constellation",
                type: "list",
                content: [
                    "Cây Monstera có nguồn gốc từ rừng mưa nhiệt đới, nên thích môi trường ẩm cao.",
                    "Tuy nhiên, cây vẫn có thể chịu được độ ẩm khoảng <b>40 - 50%</b>, nhưng nếu quá thấp, lá có thể bị khô mép và quăn lại.",
                    {
                        title: "📌 <b>Cách duy trì độ ẩm phù hợp:</b>",
                        items: [
                            "<b>Phun sương nhẹ</b> vào buổi sáng (nhưng đừng làm lá quá ướt để tránh nấm).",
                            "<b>Đặt chậu cây trên khay đá cuội có nước</b> để tăng độ ẩm xung quanh.",
                            "<b>Dùng máy tạo độ ẩm</b>, nhất là khi bật điều hòa hoặc sống ở nơi hanh khô.",
                            "<b>Trồng cây theo nhóm</b> để tạo môi trường ẩm tự nhiên.",
                        ]
                    }
                ]
            },
            {
                title: "Độ pH lý tưởng cho cây Monstera Thai Constellation",
                type: "list",
                content: [
                    "Cây trầu bà Nam Mỹ (Monstera) phát triển tốt nhất trong đất có độ pH hơi chua đến trung tính, khoảng <b>5.5 - 7.0.</b>",
                    {
                        title: "",
                        items: [
                            "🌿 Nếu pH đất quá thấp (dưới 5.5), cây có thể gặp khó khăn trong việc hấp thụ chất dinh dưỡng, đặc biệt là canxi và magie.",
                            "🌱 Nếu pH quá cao (trên 7.0), cây có thể bị thiếu vi chất như sắt, dẫn đến hiện tượng vàng lá.",
                        ]
                    }
                ]
            }
        ]
    },
    "13": {
        name: "Thiên tuế",
        intro: "Thiên tuế...",
        sections: [
            {
                title: "💰 1. Thông tin giá",
                type: "table",
                content: [
                    { label: "Cao 1m5-2m", value: "Giá 1 triệu 6" },
                    { label: "Cao 2m1-2m5", value: "Giá 2 triệu 5" },
                    { label: "Cao 2m6-3m", value: "3 triệu 2" },
                ],
            },
        ]
    },
    "30": {
        name: "Dương xỉ Thân Gỗ",
        intro: "",
        sections: [
            {
                title: "💰 1. Thông tin giá",
                type: "table",
                content: [
                    { label: "Cao 1m-1m5", value: "190k" },
                    { label: "Cao 1m6-2m", value: "290k" },
                    { label: "Cao 2,1m-2,5m", value: "370k" },
                    { label: "Cao 2,6m-3m", value: "440k" },
                    { label: "Cao 3,1m-4m", value: "530k" },
                ],
            },
        ]
    },
};
