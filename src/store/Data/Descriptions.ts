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
                            "<b>1 phần đất tribat nhẹ hoặc đất mùn </b>(tạo nền dinh dưỡng)",
                            "<b>1 phần xơ dừa hoặc than bùn (peat moss) </b>(giữ ẩm vừa phải)",
                            "<b>1 phần trấu hun hoặc perlite </b>(giúp thoát nước, tránh úng)",
                            "<b>1 phần vỏ cây mục hoặc đá pumice hoặc akadama</b>(tăng độ thoáng khí cho rễ)",
                        ]

                    },
                    "🚫 <b>Tránh đất giữ nước quá lâu — nguyên nhân số 1 gây thối rễ.</b>",
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
    "3": {
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
                            "<b>1 phần đất tribat nhẹ hoặc đất mùn </b>(tạo nền dinh dưỡng)",
                            "<b>1 phần xơ dừa hoặc than bùn (peat moss) </b>(giữ ẩm vừa phải)",
                            "<b>1 phần trấu hun hoặc perlite </b>(giúp thoát nước, tránh úng)",
                            "<b>1 phần vỏ cây mục hoặc đá pumice hoặc akadama</b>(tăng độ thoáng khí cho rễ)",
                        ]

                    },
                    "🚫 <b>Tránh đất giữ nước quá lâu — nguyên nhân số 1 gây thối rễ.</b>",
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
    "5": {
        name:"Monstera Deliciosa",
        intro: "Monstera Deliciosa là dòng cây cảnh lá lớn, tạo cảm giác xanh mát và sang trọng, rất phù hợp để trang trí phòng khách, quán cà phê, studio hoặc cảnh quan sân vườn. Đặc biệt, đây là một trong những loại Monstera dễ chăm nhất, nên rất phù hợp cho người mới bắt đầu.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Monstera Deliciosa</b> (còn gọi là <b>Trầu bà Nam Mỹ</b>) có nguồn gốc từ rừng mưa nhiệt đới <b>Trung Mỹ</b> – <b>Mexico</b> – <b>Panama.</b>",
                    "Trong tự nhiên, cây leo bám vào thân gỗ lớn, tán lá có thể phát triển rộng và tạo hình <b>lá xẻ rất đẹp & đặc trưng.</b>",
                    "Dòng <b>Monstera</b> này được du nhập và nhân giống tại <b>Việt Nam</b> từ lâu, hiện rất phổ biến trong <b>trang trí nội thất</b>, <b>cảnh quan sân vườn</b> hoặc <b>không gian quán cà phê, homestay.</b>",

                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Monstera Deliciosa",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Dễ thích nghi với nhiều điều kiện ánh sáng và môi trường.",
                            "Chăm sóc đơn giản, không cần tưới nước thường xuyên.",
                            "Rất ít sâu bệnh. Chỉ cần tránh tưới quá nhiều để không gây úng rễ.",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Công Thức Đất Trồng Chuẩn",
                type: "list",
                content: [
                    {
                        title: "Để cây phát triển tán lá to, xẻ đẹp, rễ khoẻ:",
                        items: [
                            "1 phần đất mùn/đất tribat (cung cấp dinh dưỡng)",
                            "1 phần xơ dừa hoặc than bùn (giữ ẩm vừa phải)",
                            "1 phần trấu hun hoặc perlite (thoát nước tốt)",
                            "1 phần vỏ thông mục / đá pumice (tăng độ thông thoáng cho rễ)",
                        ],
                        
                    },
                    "<b>Tránh:</b> đất nén chặt giữ nước quá lâu → dễ làm thối rễ.",
                    "Nếu trồng trong chậu: nhớ có lỗ thoát nước dưới đáy.",
                    "Có thể bón phân trùn quế / phân cá / phân tan chậm định kỳ 1–2 tháng/lần để lá to và xanh bóng.",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Tốt nhất: ánh sáng gián tiếp, sáng vừa đến sáng mạnh (gần cửa sổ).",
                            "Chịu được: ánh sáng yếu, nhưng lá sẽ phát triển chậm hơn.",
                            "Tránh hoàn toàn: nắng trưa chiếu trực tiếp → dễ cháy lá.",
                        ]
                    },
                    "<b>Nếu lá nhỏ dần, ít xẻ → cây đang thiếu sáng.</b>",
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: 18 – 30°C",
                            "Dưới 10°C cây có thể bị sốc lạnh và ngừng phát triển.",
                        ]
                    },
                    "<b>Lưu ý:</b> Tránh để <b>điều hòa</b> hoặc <b>quạt thổi trực tiếp</b> vào lá."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới khi lớp đất mặt <b>khô 2–3cm.</b>",
                            "Mỗi lần tưới <b>tưới đẫm</b> đến khi nước chảy đáy chậu.",
                            "Giảm tưới vào <b>mùa lạnh.</b>",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng nhợt → <b>tưới quá nhiều</b>",
                            "Lá rũ mềm → <b>thiếu nước</b>",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây yêu thích <b>độ ẩm trung bình đến cao.</b>",
                            "Nếu môi trường quá khô → mép lá có thể bị khô nâu.",
                        ]
                        
                    },
                    {
                        title: "Cách tăng ẩm đơn giản:",
                        items: [
                            "Đặt chậu cây gần <b>khay nước</b> + <b>đá cuội</b>",
                            "<b>Phun sương nhẹ</b> vào buổi sáng (không để lá ướt đọng lâu)",
                        ]
                    }
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 7.0</b> (hơi chua đến trung tính)"]
                    },
                    "→ Giúp cây hấp thu dinh dưỡng tối ưu và lên lá xanh bóng."
                ]
            },
        ]
    },
    "6": {
        name:"Monstera Deli Để Bàn",
        intro: "Monstera Deliciosa Để Bàn phù hợp đặt bàn làm việc, bàn học, kệ tivi, quầy lễ tân, không gian nhỏ trong phòng khách hoặc phòng ngủ.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "Cây gọn, khỏe, dễ chăm và phát triển càng lớn lá càng xẻ đẹp theo thời gian.</b>",
                    "<b>Monstera Deli Để Bàn</b> (còn gọi là <b>Trầu bà Nam Mỹ</b>) có nguồn gốc từ rừng mưa nhiệt đới <b>Trung Mỹ</b> – <b>Mexico</b> – <b>Panama.</b>",
                    "Cây phù hợp đặt bàn làm việc, phòng ngủ, phòng khách, quán cà phê, quầy lễ tân, đem lại cảm giác xanh mát & sang tự nhiên.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Monstera Deli Để Bàn",
                    level: 2,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Dễ thích nghi với nhiều điều kiện ánh sáng và môi trường.",
                            "Chăm sóc đơn giản, không cần tưới nước thường xuyên.",
                            "Rất ít sâu bệnh. Chỉ cần tránh tưới quá nhiều để không gây úng rễ.",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Công Thức Đất Trồng Chuẩn",
                type: "list",
                content: [
                    {
                        title: "Để cây phát triển tán lá to, xẻ đẹp, rễ khoẻ:",
                        items: [
                            "1 phần đất mùn/đất tribat (cung cấp dinh dưỡng)",
                            "1 phần xơ dừa hoặc than bùn (giữ ẩm vừa phải)",
                            "1 phần trấu hun hoặc perlite (thoát nước tốt)",
                            "1 phần vỏ thông mục / đá pumice (tăng độ thông thoáng cho rễ)",
                        ],
                        
                    },
                    "<b>Tránh:</b> đất nén chặt giữ nước quá lâu → dễ làm thối rễ.",
                    "Nếu trồng trong chậu: nhớ có lỗ thoát nước dưới đáy.",
                    "Có thể bón phân trùn quế / phân cá / phân tan chậm định kỳ 1–2 tháng/lần để lá to và xanh bóng.",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Tốt nhất: ánh sáng gián tiếp, sáng vừa đến sáng mạnh (gần cửa sổ).",
                            "Chịu được: ánh sáng yếu, nhưng lá sẽ phát triển chậm hơn.",
                            "Tránh hoàn toàn: nắng trưa chiếu trực tiếp → dễ cháy lá.",
                        ]
                    },
                    "<b>Nếu lá nhỏ dần, ít xẻ → cây đang thiếu sáng.</b>",
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: 18 – 30°C",
                            "Dưới 10°C cây có thể bị sốc lạnh và ngừng phát triển.",
                        ]
                    },
                    "<b>Lưu ý:</b> Tránh để <b>điều hòa</b> hoặc <b>quạt thổi trực tiếp</b> vào lá."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới khi lớp đất mặt <b>khô 2–3cm.</b>",
                            "Mỗi lần tưới <b>tưới đẫm</b> đến khi nước chảy đáy chậu.",
                            "Giảm tưới vào <b>mùa lạnh.</b>",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng nhợt → <b>tưới quá nhiều</b>",
                            "Lá rũ mềm → <b>thiếu nước</b>",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây yêu thích <b>độ ẩm trung bình đến cao.</b>",
                            "Nếu môi trường quá khô → mép lá có thể bị khô nâu.",
                        ]
                        
                    },
                    {
                        title: "Cách tăng ẩm đơn giản:",
                        items: [
                            "Đặt chậu cây gần <b>khay nước</b> + <b>đá cuội</b>",
                            "<b>Phun sương nhẹ</b> vào buổi sáng (không để lá ướt đọng lâu)",
                        ]
                    }
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 7.0</b> (hơi chua đến trung tính)"]
                    },
                    "→ Giúp cây hấp thu dinh dưỡng tối ưu và lên lá xanh bóng."
                ]
            },
        ]
    },
    "8": {
        name:"Monstera Deli Nhổ Trần",
        intro: "Monstera Deliciosa nhổ trần là cây được lấy ra khỏi chậu, rũ bớt đất để lộ phần rễ, thuận tiện cho vận chuyển xa mà không làm cây bị nóng hoặc úng. Cây vẫn giữ được toàn bộ thân lá và sức sống, chỉ cần trồng lại đúng cách là sẽ hồi rất nhanh. Cây phù hợp đặt bàn làm việc, kệ trang trí, phòng khách hoặc phòng ngủ, đem lại vẻ xanh mát tự nhiên và hiện đại.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "Monstera Deliciosa (Trầu bà Nam Mỹ) có nguồn gốc từ rừng mưa nhiệt đới Trung Mỹ – Mexico – Panama, nổi tiếng là dòng cây lá xẻ khỏe, dễ thích nghi và phát triển tốt trong điều kiện trong nhà.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Monstera Deli Nhổ Trần",
                    level: 2,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Dễ vận chuyển đi xa, không lo úng nóng khi gửi hàng.",
                            "Dễ trồng lại, rễ khỏe, hồi rất nhanh khi vào đúng giá thể.",
                            "Ít sâu bệnh, chỉ cần tránh tưới quá nhiều để không gây thối rễ.",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Công Thức Đất Trồng Chuẩn Khi Vào Lại Chậu",
                type: "list",
                content: [
                    {
                        title: "Để cây hồi rễ tốt và phát triển khỏe:",
                        items: [
                            "1 phần đất mùn/đất tribat (cung cấp dinh dưỡng)",
                            "1 phần xơ dừa hoặc than bùn (giữ ẩm vừa phải)",
                            "1 phần trấu hun hoặc perlite (thoát nước tốt)",
                            "1 phần vỏ thông mục / đá pumice (tăng độ thông thoáng)",
                        ],
                        
                    },
                    "<b>Tránh đất nén chặt giữ nước, đặc biệt trong tuần đầu sau khi nhổ trần.</b>",
                    "Nếu trồng trong chậu: phải có lỗ thoát nước dưới đáy.",
                    "Bón phân trùn quế hoặc phân tan chậm sau khi <b>cây đã ổn định 2–3 tuần</b>.",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Đặt ở nơi <b>sáng gián tiếp</b>, <b>thoáng khí.</b>",
                            "<b>Tránh nắng</b> gắt trong <b>5–7 ngày</b> đầu để cây <b>không mất nước lá.</b>",
                            "Sau khi cây ổn định, có thể để gần cửa sổ sáng nhẹ như bình thường.",
                        ]
                    },
                    "<b>Nếu lá nhỏ dần, ít xẻ → cây đang thiếu sáng.</b>",
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>18 – 30°C</b>",
                        ]
                    },
                    "<b>Lưu ý:</b> Tránh để cây bị <b>gió mạnh</b> hoặc <b>điều hòa</b> thổi trực tiếp trong thời gian hồi rễ."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "<b>3–7 ngày đầux:</b> chỉ <b>phun ẩm nhẹ</b>, không <b>tưới đẫm.</b>",
                            "<b>Khi lá bắt đầu căng trở lại:</b> tưới theo chế độ bình thường.",
                            "Tưới khi lớp đất <b>mặt khô 2–3cm</b> và tưới đẫm đến khi nước thoát đáy chậu.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng nhợt → <b>tưới quá nhiều</b>",
                            "Lá rũ mềm → <b>thiếu nước</b>",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây yêu thích <b>độ ẩm trung bình đến cao.</b>",
                            "Nếu môi trường quá khô → mép lá có thể bị khô nâu.",
                        ]
                        
                    },
                    {
                        title: "Cách tăng ẩm đơn giản:",
                        items: [
                            "Đặt chậu cây gần <b>khay nước</b> + <b>đá cuội</b>",
                            "<b>Phun sương nhẹ</b> vào buổi sáng (không để lá ướt đọng lâu)",
                        ]
                    }
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 7.0</b> (hơi chua đến trung tính)"]
                    },
                    "→ Giúp cây hấp thu dinh dưỡng tối ưu và lên lá xanh bóng."
                ]
            },
        ]
    },
    "9": {
        name:"Monstera Compacta",
        intro: "<b>Monstera Deliciosa Compacta</b> là dạng form thấp – lá xẻ nhỏ – tán gọn, rất phù hợp đặt bàn làm việc, tủ sách, kệ trang trí, góc phòng ngủ hoặc một góc chill thư giãn. Cây phát triển theo dáng thu gọn, không leo cao nhanh như Monstera Deliciosa trưởng thành, vì vậy giữ form đẹp và hài hòa trong không gian nhỏ.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "Monstera Compacta (Trầu bà Nam Mỹ lá xẻ form lùn) có nguồn gốc từ rừng mưa nhiệt đới Trung Mỹ – Mexico – Panama. Dáng lá xẻ mềm tự nhiên, cảm giác mát mắt và tinh tế, tạo điểm nhấn nhẹ nhàng mà nổi bật trong không gian.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Monstera Compacta",
                    level: 2,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Form tán gọn, đẹp, không chiếm diện tích.",
                            "Dễ chăm, chịu được nhiều môi trường ánh sáng.",
                            "Lá xẻ tự nhiên, càng nuôi lâu form càng chín và đẹp.",
                            "Hầu như ít sâu bệnh, rất dễ ổn định.",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Công Thức Đất Trồng Chuẩn",
                type: "list",
                content: [
                    {
                        title: "Để cây hồi rễ tốt và phát triển khỏe:",
                        items: [
                            "1 phần đất mùn/đất tribat (cung cấp dinh dưỡng)",
                            "1 phần xơ dừa hoặc than bùn (giữ ẩm vừa phải)",
                            "1 phần trấu hun hoặc perlite (thoát nước tốt)",
                            "1 phần vỏ thông mục / đá pumice (tăng độ thông thoáng)",
                        ],
                        
                    },
                    "<b>Tránh đất giữ nước quá lâu để hạn chế nguy cơ úng rễ.</b>",
                    "Nếu trồng trong chậu: phải có lỗ thoát nước dưới đáy.",
                    "Có thể bón phân trùn quế hoặc phân tan chậm 1–2 tháng/lần để lá xanh bóng.",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Tốt nhất là ánh sáng gián tiếp, sáng vừa đến sáng mạnh (gần cửa sổ có rèm).",
                            "Cây chịu được môi trường sáng yếu nhưng tốc độ phát triển sẽ chậm hơn.",
                            "Tránh nắng trưa chiếu trực tiếp để không gây cháy mép lá.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>18 – 30°C</b>",
                        ]
                    },
                    "<b>Lưu ý:</b> Tránh để cây bị gió máy lạnh thổi trực tiếp."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới khi lớp đất mặt <b>khô 2–3cm</b>.",
                            "Mỗi lần tưới <b>tưới đẫm</b> để nước chảy đáy chậu.",
                            "<b>Giảm tưới</b> vào <b>mùa lạnh</b> hoặc khi <b>đặt trong phòng điều hòa</b>.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng nhợt → <b>tưới quá nhiều</b>",
                            "Lá rũ mềm → <b>thiếu nước</b>",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây yêu thích <b>độ ẩm trung bình đến cao.</b>",
                            "Nếu môi trường quá khô → mép lá có thể bị khô nâu.",
                        ]
                        
                    },
                    {
                        title: "Cách tăng ẩm đơn giản:",
                        items: [
                            "Đặt chậu cây gần <b>khay nước</b> + <b>đá cuội</b>",
                            "<b>Phun sương nhẹ</b> vào buổi sáng (không để lá ướt đọng lâu)",
                        ]
                    }
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 7.0</b> (hơi chua đến trung tính)"]
                    },
                    "→ Giúp cây hấp thu dinh dưỡng tối ưu và lên lá xanh bóng."
                ]
            },
        ]
    },
    "10": {
        name:"Đế Vương Lâu",
        intro: "<b>Đế Vương Lâu</b> là dòng <b>Philodendron</b> thân bụi, form lá đứng sang trọng, màu lá xanh đậm kết hợp cuống đỏ nổi bật, rất phù hợp đặt bàn làm việc, kệ tivi, quầy lễ tân hoặc làm điểm nhấn trong phòng khách, phòng ngủ. Cây mang cảm giác hiện đại, mạnh mẽ và ấm áp trong không gian.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Đế Vương Lâu</b> có nguồn gốc từ rừng mưa nhiệt đới <b>Nam Mỹ</b>, thuộc họ <b>ráy (Araceae)</b>, cùng họ với <b>Trầu Bà</b>, <b>Monstera</b> và <b>Philodendron</b> khác. Nhờ đặc tính bản địa sống dưới tán rừng, cây thích ánh sáng tán xạ và môi trường ẩm nhẹ, rất dễ chăm trong điều kiện trong nhà.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Đế Vương Lâu",
                    level: 2,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Dáng lá đứng <b>sang trọng</b>, màu lá <b>đẹp quanh năm</b>.",
                            "<b>Chịu bóng tốt</b>, trồng được trong nhà hoặc văn phòng có ánh sáng nhẹ.",
                            "<b>Ít bệnh</b>, gần như không phải xử lý gì nhiều khi chăm.",
                            "Phong thủy tượng trưng cho sự <b>vững vàng</b> – <b>quyền lực</b> – <b>tài lộc</b> ổn định.",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Đất Trồng Phù Hợp",
                type: "list",
                content: [
                    "Cây thích giá thể thoáng – giữ ẩm vừa – thoát nước tốt.",
                    {
                        title: "<b>Có thể phối trộn:</b>",
                        items: [
                            "1 phần đất mùn/đất tribat (cung cấp dinh dưỡng)",
                            "1 phần xơ dừa hoặc than bùn (giữ ẩm vừa phải)",
                            "1 phần trấu hun hoặc perlite (thoát nước tốt)",
                            "1 phần vỏ thông mục / đá pumice (tăng độ thông thoáng)",
                        ],
                        
                    },
                    "<b>Tránh đất giữ nước quá lâu để hạn chế nguy cơ úng rễ.</b>",
                    "Nếu trồng trong chậu: phải có lỗ thoát nước dưới đáy.",
                    "Bón phân trùn quế hoặc phân tan chậm mỗi <b>1–2 tháng</b> giúp lá xanh bóng và khỏe.",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Đặt nơi <b>ánh sáng</b> gián tiếp, sáng nhẹ đến trung bình (bàn làm việc, phòng khách, gần cửa sổ có rèm).",
                            "Cây chịu bóng tốt nhưng nếu <b>thiếu</b> sáng lâu, lá có thể xanh đậm hơn và nhỏ lại.",
                            "<b>Tránh nắng gắt</b> chiếu trực tiếp để không làm cháy lá.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>18 – 30°C</b>",
                        ]
                    },
                    "<b>Lưu ý:</b> Cây không thích <b>gió điều hòa</b> thổi thẳng vào lá quá lâu."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới khi lớp đất mặt <b>khô 2–3cm</b>.",
                            "Mỗi lần tưới <b>tưới đẫm</b> để nước chảy đáy chậu.",
                            "<b>Giảm tưới</b> vào <b>mùa lạnh</b> hoặc khi <b>đặt trong phòng điều hòa</b>.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng nhợt → <b>tưới quá nhiều</b>",
                            "Lá rũ mềm → <b>thiếu nước</b>",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây thích độ ẩm <b>trung bình (50–70%)</b>.",
                            "Nếu môi trường quá khô → mép lá có thể bị khô nâu.",
                        ]
                        
                    },
                    {
                        title: "Cách tăng ẩm đơn giản:",
                        items: [
                            "<b>Phun sương nhẹ</b> vào buổi sáng (không để lá ướt đọng lâu)",
                        ]
                    }
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 7.0</b> (hơi chua đến trung tính)"]
                    },
                    "→ <b>Giúp cây hấp thụ dinh dưỡng tốt và lá mượt tự nhiên.</b>"
                ]
            },
        ]
    },
    "11": {
        name:"Đế Vương Vàng",
        intro: "<b>Đế Vương Vàng</b> là dòng <b>Philodendron</b> có sắc lá vàng ánh mật ong nổi bật, tạo cảm giác tươi sáng và thu hút trong không gian. Lá có form mềm, bóng nhẹ tự nhiên, màu sắc thay đổi từ vàng sáng đến vàng chanh tùy ánh sáng, rất phù hợp đặt trên bàn làm việc, cửa sổ sáng nhẹ, kệ trang trí hoặc góc phòng cần điểm nhấn tinh tế.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "Cây có nguồn gốc từ rừng mưa nhiệt đới <b>Nam Mỹ</b>, thuộc họ <b>ráy (Araceae)</b> – nhóm cây rất khỏe, thích nghi tốt với môi trường <b>trong nhà</b> và <b>văn phòng</b>. <b>Đế Vương Vàng</b> đặc biệt được ưa chuộng nhờ màu lá nổi bật và khả năng làm sáng không gian rất mạnh.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Đế Vương Vàng",
                    level: 2,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Cây khỏe, phát triển ổn định, phù hợp cho cả người mới bắt đầu. Chỉ cần tránh nắng quá gắt và tưới nước hợp lý là cây luôn giữ được màu lá đẹp và sáng."
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "<b>Màu lá vàng</b> nổi bật, hiệu ứng trang trí mạnh",
                            "<b>Dễ chăm, ít sâu bệnh</b>",
                            "<b>Sống tốt </b>trong nhà, văn phòng, quán café, studio",
                            "Tạo cảm giác ấm, <b>sáng</b> và <b>sang</b> không gian",
                            "<b>Ý nghĩa phong thủy:</b> thu hút năng lượng <b>tích cực</b>, <b>tài lộc</b> và sự <b>may mắn</b>",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Đất Trồng Phù Hợp",
                type: "list",
                content: [
                    "Cây thích giá thể <b>thoáng</b> – <b>nhẹ</b> – <b>giữ ẩm vừa</b>.",
                    {
                        title: "<b>Có thể phối trộn:</b>",
                        items: [
                            "1 phần đất mùn/đất tribat (cung cấp dinh dưỡng)",
                            "1 phần xơ dừa hoặc than bùn (giữ ẩm vừa phải)",
                            "1 phần trấu hun hoặc perlite (thoát nước tốt)",
                            "1 phần vỏ thông mục / đá pumice (tăng độ thông thoáng)",
                        ],
                        
                    },
                    "<b>Tránh đất giữ nước quá lâu để hạn chế nguy cơ úng rễ.</b>",
                    "Nếu trồng trong chậu: phải có lỗ thoát nước dưới đáy.",
                    "Bón phân trùn quế hoặc phân tan chậm mỗi <b>1–2 tháng</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Đặt nơi <b>ánh sáng</b> gián tiếp, sáng nhẹ đến trung bình (bàn làm việc, phòng khách, gần cửa sổ có rèm).",
                            "Trong điều kiện thiếu sáng kéo dài, lá có thể xanh hơn, màu vàng nhạt bớt.",
                            "<b>Đế Vương Vàng</b> không thích <b>nắng gắt</b>, vì nắng mạnh có thể làm cháy mép lá.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>18 – 30°C</b>",
                        ]
                    },
                    "<b>Lưu ý:</b> Cây không thích <b>gió điều hòa</b> thổi thẳng vào lá quá lâu."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới khi lớp đất mặt <b>khô 2–3cm</b>.",
                            "<b>Tưới đẫm</b> để nước chảy đáy chậu rồi để <b>ráo</b>.",
                            "<b>Giảm tưới</b> vào <b>mùa lạnh</b> hoặc khi <b>đặt trong phòng điều hòa</b>.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng nhợt → <b>tưới quá nhiều</b>",
                            "Lá rũ mềm → <b>thiếu nước</b>",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây thích độ ẩm <b>trung bình (50–70%)</b>.",
                            "Nếu môi trường quá khô → mép lá có thể bị khô nâu.",
                        ]
                        
                    },
                    {
                        title: "Cách tăng ẩm đơn giản:",
                        items: [
                            "<b>Phun sương nhẹ</b> vào buổi sáng (không để lá ướt đọng lâu)",
                        ]
                    }
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 7.0</b> (hơi chua đến trung tính)"]
                    },
                    "→ <b>Giúp cây hấp thụ dinh dưỡng tốt và lá mượt tự nhiên.</b>"
                ]
            },
        ]
    },
    "12": {
        name:"Dương Xỉ Thái Thòng",
        intro: "<b>Dương Xỉ Thái Thòng</b> là dòng dương xỉ lá dài mềm rũ xuống tự nhiên, tạo hiệu ứng xanh tươi và thoáng mát rất đẹp mắt. Cây thường được treo trong chậu để tán lá buông thả, phù hợp trang trí ban công, hiên nhà, giếng trời, cửa sổ sáng nhẹ hoặc không gian sân vườn. Khi được treo cao, cây tạo cảm giác như một mảng xanh rơi xuống rất tự nhiên và thư thái.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Dương Xỉ Thái Thòng</b> có nguồn gốc từ rừng ẩm nhiệt đới <b>Đông Nam Á</b>, nơi cây phát triển dưới tán rừng, nên ưa sáng nhẹ và độ ẩm cao, thích môi trường thoáng khí, mát mẻ.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Dương Xỉ Thái Thòng",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Cây phát triển tốt khi có <b>độ ẩm phù hợp</b>. Chỉ cần duy trì đất ẩm vừa và đặt nơi thoáng sáng là cây luôn xanh đẹp và bung tán mềm."
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Tán lá <b>thòng tự nhiên</b> tạo <b>hiệu ứng xanh mềm</b> rất đẹp",
                            "<b>Trồng treo</b> giúp trang trí không gian cực hiệu quả",
                            "Tạo cảm giác <b>mát</b> và <b>mang không khí</b> nhiệt đới vào nhà",
                            "Phù hợp trang trí <b>balcony, hiên nhà, quán café, giếng trời, homestay<b>",
                            "<b>Lọc khí nhẹ</b>, đem lại sự thư giãn thị giác",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Giá Thể & Đất Trồng",
                type: "list",
                content: [
                    "Cây thích giá thể <b>thoáng</b> – <b>ẩm</b> – <b>thoát nước tốt</b>.",
                    {
                        title: "<b>Thường trồng bằng hỗn hợp:</b>",
                        items: [
                            "<b>Xơ dừa</b>",
                            "<b>Rêu hoặc than bùn</b> (giữ ẩm)",
                            "<b>Trấu hun hoặc perlite</b> (thoáng rễ)",
                            "<b>Có thể bổ sung thêm mùn dừa sợi dài giúp tán giữ ẩm tốt hơn</b>",
                        ],
                        
                    },
                    "<b>Không nên dùng đất nén cứng, dễ bí rễ.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "<b>Dương Xỉ Thái</b> ưa sáng gián tiếp, sáng tán xạ.",
                            "Đặt nơi có <b>ánh sáng nhẹ</b>, <b>thoáng gió</b> là cây phát triển rất nhanh.",
                            "<b>Tránh nắng gắt</b> trực tiếp, đặc biệt là nắng trưa.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>18 – 30°C</b>",
                        ]
                    },
                    "<b>Lưu ý:</b> Môi trường mát và thông thoáng giúp cây mềm tán và lên màu lá đẹp."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "<b>Giữ ẩm vừa</b> cho đất, <b>không để khô</b> hoàn toàn.",
                            "Tưới <b>2–4 lần/tuần</b> tùy thời tiết và vị trí trồng.",
                            "Nếu cây treo ngoài hiên gió, có thể <b>phun sương</b> lá hằng ngày.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá khô mép, quăn → thiếu ẩm.",
                            "Gốc mềm và có mùi → tưới quá nhiều hoặc bí rễ.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây thích độ ẩm <b>trung bình đến cao</b>.",
                            "Nếu môi trường khô có thể phun sương vào buổi sáng hoặc đặt gần nguồn nước.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b> (hơi chua đến trung tính)"]
                    },
                    "→ <b>Giúp rễ hấp thu dinh dưỡng tốt và lá xanh mềm bóng.</b>"
                ]
            },
        ]
    },
    "13": {
        name: "Cây Thiên tuế",
        intro: "<b>Cây Thiên Tuế</b> là cây thân gỗ lâu năm, dáng đứng vững chắc, tán lá xòe đều, tạo cảm giác uy nghi, sang trọng và mạnh mẽ. Cây thường được trồng làm điểm nhấn trước nhà, cổng, sân vườn, khuôn viên biệt thự, quán cà phê sân vườn, resort hoặc cảnh quan công trình. Thiên Tuế có hình thái đẹp, ít rụng lá, rất dễ phối cảnh.",
        sections: [
            {
                title: "💰 Thông tin giá",
                type: "table",
                content: [
                    { label: "Cao 1m5-2m", value: "Giá 1 triệu 6" },
                    { label: "Cao 2m1-2m5", value: "Giá 2 triệu 5" },
                    { label: "Cao 2m6-3m", value: "3 triệu 2" },
                ],
            },
            {
                title: "",
                type: "text",
                content: [
                    "Cây có nguồn gốc từ vùng nhiệt đới <b>châu Á</b>, thuộc nhóm <b>cây lá cứng</b>, sinh trưởng chậm nhưng bền và có tuổi thọ cao. Trong <b>văn hóa Á Đông</b>, <b>Thiên Tuế</b> tượng trưng cho sự trường tồn, vững bền, phát triển bền vững và tài lộc lâu dài."
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Cây Thiên tuế",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Cây khỏe, chịu nắng tốt, chịu hạn tốt, hầu như rất ít sâu bệnh. Chỉ cần trồng nơi thoáng sáng và đất thoát nước là cây có thể sống lâu năm và phát triển ổn định."
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "<b>Dáng đẹp, tán lá xòe đều, rất phù hợp làm cây cảnh sân vườn</b>",
                            "<b>Chịu nắng tốt, chịu hạn tốt</b>",
                            "<b>Ít rụng lá, giữ form đẹp quanh năm</b>",
                            "<b>Ý nghĩa phong thủy: vững bền – trường thọ – thịnh vượng</b>",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Giá Thể & Đất Trồng",
                type: "list",
                content: [
                    "<b>Thiên Tuế</b> thích đất tơi xốp – thoát nước tốt – hơi khô nhẹ.",
                    {
                        title: "<b>Nên trộn:</b>",
                        items: [
                            "Đất thịt pha cát hoặc đất đỏ bazan",
                            "Trộn thêm trấu hun hoặc đá nhỏ để tăng thoát nước",
                            "Tránh đất giữ nước quá lâu vì dễ làm hỏng rễ",
                        ],
                        
                    },
                    "<b>Nếu trồng chậu: chậu phải có lỗ thoát nước.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Ưa nắng hoàn toàn.",
                            "Đặt ngoài trời càng đẹp, tán lá căng, màu lá bóng tự nhiên.",
                            "Không nên trồng nơi thiếu sáng lâu ngày, lá dễ nhỏ và thưa.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Phù hợp khí hậu <b>Việt Nam</b>, <b>chịu nhiệt tốt</b>.",
                            "Lý tưởng từ <b>20 – 35°C</b>.",
                            "Không bị ảnh hưởng bởi nắng nóng như nhiều cây lá mềm khác.",
                        ]
                    },
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới vừa phải, không tưới quá nhiều.",
                            "Tưới khi đất bề mặt đã khô.",
                            "Vào mùa mưa có thể giảm tưới để tránh úng gốc.",
                        ]
                    },
                    "Lá vàng ở gốc → thay lá già tự nhiên (không phải bệnh).",
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây chịu được độ ẩm thấp và khô ráo ngoài trời.",
                            "Không cần phun sương.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 6.0 – 7.5</b>"]
                    },
                ]
            },
        ]
    },
    "14": {
        name:"Đuôi Công Khổng Tước",
        intro: "<b>Đuôi Công Khổng Tước</b> là dòng <b>Calathea</b> có họa tiết lá đẹp mắt, mặt trên lá xanh phối sọc sáng như lông chim công, mặt dưới có sắc tím nhạt rất nổi bật. Cây mang vẻ mềm mại, thanh nhã, tạo điểm nhấn sang và tinh tế cho bàn làm việc, kệ trang trí, quầy lễ tân, phòng ngủ hoặc không gian phòng khách.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "Cây có nguồn gốc từ rừng mưa nhiệt đới <b>Nam Mỹ</b>, nơi độ ẩm cao và ánh sáng tán xạ, nên khi trồng trong nhà cây rất thích không gian sáng nhẹ, thoáng khí và ẩm vừa.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Đuôi Công Khổng Tước",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "<b>Đuôi Công Khổng Tước</b> chỉ cần giữ độ ẩm hợp lý và tránh ánh nắng gắt. Nếu chăm đúng môi trường sáng nhẹ và đất ẩm thoáng, cây phát triển rất ổn định và lên màu lá đẹp."
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Lá có <b>họa tiết đẹp</b>, <b>trang trí</b> rất nổi bật.",
                            "Phù hợp không gian trong <b>nhà, văn phòng, quán café</b>.",
                            "Không chiếm diện tích, <b>form lá mềm dễ kết hợp decor</b>.",
                            "Tạo cảm giác tươi mát và cân bằng không gian",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Đất Trồng Phù Hợp",
                type: "list",
                content: [
                    "Cây thích giá thể <b>tơi xốp</b> – <b>giữ ẩm nhẹ</b> – <b>thoát nước tốt</b>.",
                    {
                        title: "<b>Có thể phối trộn:</b>",
                        items: [
                            "Đất <b>mùn</b> hoặc <b>tribat</b>",
                            "Trộn cùng <b>xơ dừa</b> / <b>than bùn</b> để giữ ẩm",
                            "Thêm <b>trấu hun</b> hoặc <b>perlite</b> để thoáng rễ",
                            "Có thể bổ sung vỏ thông mịn giúp đất không bị nén chặt",
                        ],
                        
                    },
                    "<b>Chậu nên có lỗ thoát nước để tránh ứ nước ở gốc.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "<b>Ưa sáng gián tiếp</b>, sáng nhẹ hoặc ánh sáng tự nhiên lọc qua rèm.",
                            "Tránh ánh nắng trực tiếp chiếu thẳng lên lá vì dễ cháy mép lá.",
                            "Nếu đặt nơi ít sáng lâu ngày, màu lá có thể nhạt hơn.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>18 – 30°C</b>",
                        ]
                    },
                    "<b>Lưu ý:</b> Cây không thích <b>gió điều hòa</b> thổi thẳng vào lá quá lâu."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Giữ <b>ẩm vừa</b>, tưới khi mặt đất khô nhẹ..",
                            "<b>Tưới đẫm</b> để nước chảy đáy chậu rồi để <b>ráo</b>.",
                            "Giảm tưới vào mùa lạnh hoặc khi độ ẩm không khí thấp.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá <b>quăn</b> hoặc <b>khô mép</b> → không khí quá <b>khô</b> hoặc thiếu nước.",
                            "Mép lá bị <b>vàng</b> → <b>tưới</b> quá nhiều hoặc đất <b>bí</b>.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây yêu thích độ ẩm <b>trung bình đến cao</b>.",
                            "Có thể phun sương nhẹ buổi sáng hoặc đặt gần khay nước/đá cuội để tăng ẩm.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b>"]
                    },
                    "→ <b>Giúp cây giữ màu lá đẹp, tươi và mềm.</b>"
                ]
            },
        ]
    },
    "15": {
        name:"Dương Xỉ Culi",
        intro: "<b>Dương Xỉ Culi</b> là dòng dương xỉ lá nhỏ, bẹ lá mảnh nhẹ, tán xòe dày và lan rộng, tạo cảm giác mềm mại và xanh mát tự nhiên. Cây rất phù hợp trồng phủ nền sân vườn, tiểu cảnh, gốc cây lớn, hồ cá koi, lối đi, hoặc trồng chậu treo để tán rủ nhẹ xuống. Khi được trồng thành thảm, Dương Xỉ Culi tạo nên mảng xanh tươi mịn và rất thư giãn cho không gian.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Cây có nguồn gốc từ rừng ẩm nhiệt đới <b>châu Á</b>, sinh trưởng mạnh ở nơi độ ẩm cao, mát và ánh sáng tán xạ. Vì vậy cây rất thích hợp với khí hậu <b>Việt Nam</b> và đặc biệt hợp với không gian xanh ngoài trời.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Dương Xỉ Culi",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Chỉ cần giữ đất ẩm nhẹ và đặt nơi sáng thoáng, cây sẽ phát triển nhanh, đẻ nhánh mạnh và tán lan rất đẹp."
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Tán lá mềm, xanh mịn, phủ nền cực đẹp.",
                            "Trồng được cả chậu lẫn tiểu cảnh sân vườn.",
                            "Tạo cảm giác mát, thư thái và tự nhiên.",
                            "Phát triển nhanh, dễ nhân giống.",
                            "Rất phù hợp với <b>ban công, sân vườn, góc hồ cá, homestay, quán café sân vườn</b>.",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Giá Thể & Đất Trồng",
                type: "list",
                content: [
                    "Cây thích giá thể <b>ẩm</b> – <b>tơi</b> – <b>thoáng</b>.",
                    {
                        title: "<b>Có thể phối trộn:</b>",
                        items: [
                            "<b>Đất mùn hoặc tribat</b> (giữ dinh dưỡng)",
                            "<b>Xơ dừa hoặc than bùn</b> (giữ ẩm)",
                            "<b>Trấu hun hoặc perlite</b> (thoát nước)",
                            "Có thể bổ sung rêu hoặc vỏ thông vụn để đất không bị nén chặt",
                        ],
                        
                    },
                    "<b>Tránh đất quá khô hoặc bí rễ trong thời gian dài.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Ưa <b>ánh sáng gián tiếp</b> / <b>nắng nhẹ</b> buổi sáng.",
                            "Đặt nơi có <b>ánh sáng nhẹ</b>, <b>thoáng gió</b> là cây phát triển rất nhanh.",
                            "<b>Tránh nắng gắt</b> trực tiếp, đặc biệt là nắng trưa.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>18 – 30°C</b>",
                        ]
                    },
                    "<b>Lưu ý:</b> Không thích môi trường quá nóng và gió khô mạnh."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Giữ ẩm thường xuyên cho đất, không để khô hoàn toàn.",
                            "<b>Tưới 2–5 lần/tuần</b> tùy thời tiết.",
                            "Nếu trồng chậu treo → có thể phun sương hằng ngày.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá khô hoặc xoăn → thiếu ẩm.",
                            "Gốc mềm hoặc lá úng → tưới quá nhiều hoặc bí rễ.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "<b>Dương Xỉ Culi</b> ưa độ ẩm <b>trung bình đến cao</b>.",
                            "Phun sương nhẹ buổi sáng sẽ giúp tán lá xanh mềm và đẹp hơn.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b>"]
                    },
                ]
            },
        ]
    },
    "16": {
        name:"Cây Lục Quạ",
        intro: "<b>Cây Lục Quạ</b> có tán lá xanh sáng, phiến lá dài và mép lá lượn nhẹ, tạo hiệu ứng tươi mới và rất tự nhiên. Cây phát triển thành bụi, tán xòe đều và lan rộng, phù hợp trồng phủ nền sân vườn, tiểu cảnh hồ cá, bồn cây cảnh quan hoặc trồng chậu treo để tạo mảng xanh mềm nhẹ.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Cây có nguồn gốc từ rừng ẩm nhiệt đới <b>châu Á</b>, nơi có ánh sáng tán xạ và độ ẩm cao. Vì vậy, <b>Lục Quạ</b> rất hợp <b>khí hậu Việt Nam</b>, sinh trưởng nhanh và dễ chăm trong môi trường ngoài trời thoáng mát.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Cây Lục Quạ",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Chỉ cần giữ đất ẩm nhẹ và đặt nơi sáng tán xạ, cây phát triển mạnh, lá bung đẹp và form bụi đầy rất nhanh."
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Tán lá mềm và xanh tươi, nhìn rất mát mắt",
                            "Phủ nền sân vườn hoặc tiểu cảnh cực đẹp",
                            "Phát triển nhanh, dễ nhân giống và lan bụi",
                            "Hợp ban công, hồ cá koi, quán café sân vườn, homestay",
                            "Tạo cảm giác tự nhiên và thoáng xanh cho không gian",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Đất Trồng Phù Hợp",
                type: "list",
                content: [
                    "Cây thích giá thể <b>tơi</b> – <b>ẩm</b> – <b>thoát</b> nước tốt.",
                    {
                        title: "<b>Có thể phối trộn:</b>",
                        items: [
                            "<b>Đất mùn hoặc tribat</b>",
                            "<b>Xơ dừa hoặc than bùn để giữ ẩm",
                            "<b>Trấu hun hoặc perlite để thoáng rễ",
                            "<b>Có thể thêm vỏ thông vụn để đất không bị nén</b>",
                        ],
                        
                    },
                    "<b>Tránh để đất khô hoàn toàn trong thời gian dài.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Ưa <b>ánh sáng gián tiếp</b> / <b>nắng sáng nhẹ</b>.",
                            "Đặt dưới giàn lưới, dưới tán cây lớn, hiên nhà sáng hoặc bên hồ nước là đẹp nhất.",
                            "<b>Tránh nắng</b> trưa gắt để không cháy mép lá.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Thích hợp: <b>18 – 30°C</b>",
                            "Sống tốt ngoài trời, đặc biệt trong môi trường ẩm và thoáng.",
                        ]
                    },
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Giữ ẩm thường xuyên, không để đất khô hoàn toàn.",
                            "Tưới <b>2–5 lần/tuần</b> tùy vị trí trồng và thời tiết.",
                            "Nếu trồng chậu treo hoặc nơi nhiều gió → nên phun sương hằng ngày.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá khô xoăn → thiếu ẩm.",
                            "Gốc nhũn hoặc có mùi → tưới quá nhiều hoặc đất bí.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây thích độ <b>ẩm trung bình đến cao</b>.",
                            "Phun sương sáng giúp lá mềm và lên màu đẹp hơn.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b> (hơi chua đến trung tính)"]
                    },
                ]
            },
        ]
    },
    "17": {
        name:"Cây Râu Rồng",
        intro: "<b>Cây Râu Rồng</b> là dòng cây thân rủ độc đáo với những cành dài mềm buông xuống tự nhiên như những dải râu xanh, tạo hiệu ứng mềm mại và thu hút cho không gian. Cây thường được trồng treo chậu để tán rủ, cực phù hợp trang trí ban công, sân hiên, mái hiên quán cà phê, homestay, khu vườn nhiệt đới hoặc các góc chill thư giãn.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "Cây có nguồn gốc từ rừng nhiệt đới <b>châu Á</b> và <b>Nam Mỹ</b>, nơi có khí hậu ẩm và thoáng, nên khi trồng ở <b>Việt Nam</b> cây phát triển rất tốt và rất dễ chăm.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Cây Râu Rồng",
                    level: 2,
                    scale: 6,
                    description: "Khá Dễ",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Cây khỏe, chịu được nhiều điều kiện môi trường, đặc biệt rất hợp trồng ngoài trời sáng tán xạ."
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Tán rủ mềm đẹp, trang trí cực có hiệu ứng",
                            "Rất hợp treo ban công, hiên nhà, quán café sân vườn",
                            "Ít sâu bệnh, phát triển nhanh",
                            "Tạo cảm giác <b>thoáng mát</b> – <b>thư giãn</b> – <b>nhẹ nhàng</b>",
                            "Độ bao phủ tốt, dễ nhân giống",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Đất Trồng Phù Hợp",
                type: "list",
                content: [
                    "Cây thích giá thể <b>thoáng</b> – <b>giữ ẩm nhẹ</b> – <b>thoát nước tốt</b>.",
                    {
                        title: "<b>Có thể trộn:</b>",
                        items: [
                            "Xơ dừa / than bùn",
                            "<b>Trấu hun</b> hoặc <b>perlite</b> (tăng thoáng rễ)",
                            "<b>Vỏ thông vụn</b> (giúp đất không bị nén chặt)",
                            "Một ít <b>đất mùn</b> giữ dinh dưỡng",
                        ],
                        
                    },
                    "<b>Hạn chế đất quá bí nước trong chậu treo.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "<b>Ưa ánh sáng gián tiếp</b> hoặc <b>nắng sáng nhẹ</b>.",
                            "Cực kỳ hợp trồng ngoài trời có mái che / giàn lưới.",
                            "Tránh nắng trưa gắt chiếu thẳng vì dễ làm cháy đầu lá.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Thích hợp: <b>18 – 30°C</b>",
                            "Cây lên màu đẹp và tán mềm hơn trong môi trường thoáng gió.",
                        ]
                    },
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Giữ ẩm vừa, không để đất khô hoàn toàn trong thời gian dài.",
                            "Tưới <b>2–4 lần/tuần</b> tùy thời tiết.",
                            "Nếu treo nơi nắng nhiều và gió → có thể phun sương hằng ngày.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá héo mềm → thiếu nước.",
                            "Đầu lá cháy vàng → nắng gắt trực tiếp.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây ưa độ <b>ẩm trung bình đến cao</b>.",
                            "Phun sương nhẹ buổi sáng giúp tán rủ đẹp và lá mềm tươi.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b>"]
                    },
                ]
            },
        ]
    },
    "18": {
        name:"Cọ Lá Xếp",
        intro: "<b>Cọ Lá Xếp</b> là dòng cọ cảnh có dáng lá xòe rộng và xếp nếp tự nhiên như cánh quạt, tạo hiệu ứng sang trọng và rất bắt mắt trong không gian. Form lá tròn mềm, đường gân rõ và bề mặt lá bóng nhẹ giúp cây nổi bật dù đặt ở vị trí nào. <b>Cọ Lá Xếp</b> phù hợp trồng trong chậu đặt phòng khách, sảnh đón tiếp, hành lang, ban công có mái che hoặc sân vườn tạo điểm nhấn.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "Cây có nguồn gốc từ rừng nhiệt đới <b>Đông Nam Á</b>, thích môi trường thoáng khí, ánh sáng tán xạ và đất thoát nước tốt. Cọ Lá Xếp sinh trưởng chậm nhưng bền, giữ dáng rất lâu và xanh quanh năm.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Cọ Lá Xếp",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Cây ổn định, ít sâu bệnh, chịu được khí hậu nóng ẩm và mưa nhiều. Chỉ cần tránh úng gốc và tránh nắng gắt chiếu trực tiếp trong thời gian dài."
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Lá xếp nếp đẹp, tạo hiệu ứng sang và tinh tế",
                            "Giữ dáng xanh đẹp quanh năm, không rụng lá nhiều",
                            "Hợp trang trí nhà ở, resort, quán café, khách sạn, villa",
                            "Mang cảm giác <b>thoáng mát – sạch sẽ – thanh lịch</b>",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Đất Trồng Phù Hợp",
                type: "list",
                content: [
                    "<b>Cọ Lá Xế</b>p thích đất <b>tơi</b> – <b>thoát nước tố</b>t – <b>hơi ẩm nhẹ</b>.",
                    {
                        title: "<b>Có thể trộn:</b>",
                        items: [
                            "Đất mùn hoặc đất tribat",
                            "Trấu hun / xơ dừa giữ ẩm nhẹ",
                            "Đá pumice hoặc perlite giúp thoáng rễ",
                            "Một ít sỏi nhẹ hoặc vỏ thông để tránh nén đất",
                        ],
                        
                    },
                    "<b>Chậu cần có lỗ thoát nước để tránh úng.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Ưa <b>ánh sáng gián tiếp</b>, <b>sáng nhẹ</b> hoặc <b>nắng sớm</b>.",
                            "Có thể sống tốt trong nhà gần cửa sổ hoặc ban công râm mát.",
                            "Tránh nắng trưa gay gắt để không làm cháy mép lá.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>20 – 32°C</b>",
                        ]
                    },
                    "<b>Lưu ý:</b> Cây chịu nhiệt tốt, thích không gian thông thoáng."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới khi <b>lớp đất mặt đã khô nhẹ</b>.",
                            "<b>Tưới đẫm</b> để nước thoát đáy chậu, không để đọng lâu.",
                            "Giảm tưới vào mùa lạnh hoặc khi trời nhiều mưa.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng nhẹ ở lá già → bình thường, có thể tỉa bỏ.",
                            "Gốc mềm hoặc có mùi → tưới quá tay hoặc đất bí.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây thích độ ẩm <b>trung bình</b>.",
                            "Nếu không khí khô, có thể phun sương nhẹ buổi sáng giúp lá mượt hơn.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.8 – 7.0</b> (hơi chua đến trung tính)"]
                    },
                    "→ <b>Giúp cây hấp thu dinh dưỡng tốt và lá xanh đều.</b>"
                ]
            },
        ]
    },
    "19": {
        name:"Trầu Bà Chân Vịt",
        intro: "<b>Trầu Bà Chân Vịt</b> là dòng <b>Philodendron</b> dạng bụi, có lá xẻ tự nhiên thành các thùy giống hình chân vịt rất đặc trưng. Tán lá xanh bóng, mọc đều và liên tục, giúp không gian trở nên tươi mát, mềm mại và hiện đại hơn. Cây phù hợp đặt phòng khách, bàn làm việc, quầy lễ tân, ban công hoặc trồng phủ nền sân vườn – rất linh hoạt trong trang trí.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "Cây có nguồn gốc từ vùng nhiệt đới <b>Nam Mỹ</b>, sinh trưởng dưới tán rừng nên ưa sáng gián tiếp và độ ẩm ổn định, dễ chăm và rất thích hợp với khí hậu <b>Việt Nam</b>.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Trầu Bà Chân Vịt",
                    level: 2,
                    scale: 6,
                    description: "Khá Dễ",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Cây khỏe, nhanh phát triển, gần như không kén môi trường.",
                    "Chỉ cần tưới khi đất khô và đặt nơi sáng nhẹ là cây luôn xanh đẹp."
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Lá xẻ độc đáo, lạ mắt, tạo điểm nhấn mạnh trong trang trí",
                            "Dễ trồng, dễ chăm, phù hợp mọi không gian",
                            "Đẻ bụi nhanh, form cây đẹp và dày lá",
                            "Lọc không khí nhẹ, tạo cảm giác thư giãn, xanh mát",
                            "Hợp décor <b>nhà ở – quán café – homestay – văn phòng – sân vườn</b>",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Đất Trồng Phù Hợp",
                type: "list",
                content: [
                    "Cây thích giá thể thoáng – giữ ẩm nhẹ – thoát nước tốt:",
                    {
                        title: "<b>Có thể trộn:</b>",
                        items: [
                            "<b>Đất mùn</b> / <b>Tribat</b> (giữ dinh dưỡng)",
                            "<b>Xơ dừa</b> hoặc <b>than bùn</b> (giữ ẩm)",
                            "<b>Trấu hun</b> hoặc <b>perlite</b> (thoáng rễ)",
                            "Có thể thêm vỏ thông để đất không bị nén",
                        ],
                        
                    },
                    "<b>Chậu nên có lỗ thoát nước.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Ưa <b>ánh sáng gián tiếp</b>, <b>sáng tán xạ</b>.",
                            "Có thể sống tốt trong nhà gần cửa sổ sáng nhẹ.",
                            "Tránh nắng gắt trực tiếp lâu dài để không làm cháy lá.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>18 – 30°C</b>",
                        ]
                    },
                    "Cây chịu nhiệt và ẩm ngoài trời tốt, đặc biệt nơi thoáng khí."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới khi mặt đất <b>khô 2–3cm</b>.",
                            "Tưới đẫm rồi để nước thoát đáy chậu.",
                            "Giảm tưới vào mùa lạnh hoặc đặt phòng điều hòa.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng nhạt → tưới quá nhiều / đất bí.",
                            "Lá héo nhẹ → cây đang cần nước.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây ưa độ <b>ẩm trung bình đến cao</b>.",
                            "Có thể phun sương nhẹ buổi sáng nếu môi trường hanh khô.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b>"]
                    },
                    "→ <b>Giúp cây hấp thu dinh dưỡng tốt và lá xanh đều.</b>"
                ]
            },
        ]
    },
    "20": {
        name:"Cây Trầu Bà Subin",
        intro: "<b>Cây Trầu Bà Subin</b> là dòng <b>Philodendron</b> lá lớn, phiến lá to bản và gân lá nổi rõ tạo cảm giác mạnh mẽ, sang trọng và đầy sức sống. Tán lá xoè rộng, bề mặt lá bóng mượt giúp không gian trở nên ấn tượng và hiện đại hơn. Cây rất phù hợp trang trí phòng khách rộng, sảnh đón, hành lang, studio, quán cà phê, showroom và biệt thự sân vườn.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "Cây có nguồn gốc từ rừng <b>nhiệt đới Nam Mỹ</b>, sinh trưởng dưới tán cây lớn, vì vậy ưu thích ánh sáng tán xạ và môi trường thoáng khí, dễ chăm và phát triển tốt trong <b>khí hậu Việt Nam</b>.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Cây Trầu Bà Subin",
                    level: 2,
                    scale: 6,
                    description: "Khá Dễ",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Cây khỏe, lớn nhanh, không đòi hỏi chăm sóc phức tạp.",
                    "Chỉ cần ánh sáng gián tiếp và tưới nước hợp lý là cây luôn tươi xanh và bung lá đẹp."
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Lá to bản đẹp, tạo điểm nhấn mạnh cho không gian",
                            "Dáng sang, phù hợp trang trí nội thất & cảnh quan",
                            "Dễ chăm, phát triển nhanh, ít sâu bệnh",
                            "Lọc không khí nhẹ, mang lại cảm giác xanh mát và thư giãn",
                            "Rất hợp décor <b>phong cách tropical / hiện đại / tối giản</b>",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Đất Trồng Phù Hợp",
                type: "list",
                content: [
                    "Cây thích giá thể tơi <b>xốp</b> – <b>ẩm nhẹ</b> – <b>thoát nước tốt</b>",
                    {
                        title: "<b>Có thể trộn:</b>",
                        items: [
                            "<b>Đất mùn</b> / <b>Tribat</b> (giữ dinh dưỡng)",
                            "<b>Xơ dừa</b> hoặc <b>than bùn</b> (giữ ẩm vừa)",
                            "<b>Trấu hun</b> hoặc <b>perlite</b> (thoáng rễ)",
                            "Có thể thêm vỏ thông để đất không bị nén",
                        ],
                        
                    },
                    "<b>Chậu cần có lỗ thoát nước.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Ưa <b>ánh sáng gián tiếp sáng nhẹ đến trung bình</b>.",
                            "Đặt gần cửa sổ, giếng trời hoặc ban công có rèm là đẹp nhất.",
                            "Tránh nắng trưa trực tiếp để không cháy mép lá.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>18 – 30°C</b>",
                        ]
                    },
                    "Cây chịu nóng ẩm tốt và thích không gian thông thoáng."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới khi mặt đất <b>khô 2–3cm</b>.",
                            "Tưới đẫm để nước thoát đáy chậu rồi để ráo.",
                            "Giảm tưới vào mùa lạnh hoặc khi đặt trong phòng điều hòa.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng nhạt → tưới quá nhiều / đất bí.",
                            "Lá mềm hoặc xoắn nhẹ → cây đang thiếu nước.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây ưa độ <b>ẩm trung bình đến cao</b>.",
                            "Có thể phun sương nhẹ buổi sáng giúp lá căng bóng và mượt hơn.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b>"]
                    },
                    "→ <b>Giúp cây hấp thu dinh dưỡng tốt và lá xanh đều.</b>"
                ]
            },
        ]
    },
    "21": {
        name:"Philodendron Gloriosum Dark Form",
        intro: "<b>Philodendron Gloriosum Dark Form</b> là dòng <b>Philodendron</b> lá to bò thân, nổi bật với màu lá xanh thẫm và đường gân sáng rõ chạy dọc phiến lá tạo nên hiệu ứng tương phản rất hút mắt. Bề mặt lá mờ mịn như nhung nhẹ giúp cây mang cảm giác trang nhã, sang trọng và sâu không gian. Cây thích hợp đặt trong phòng khách, studio, quán café phong cách tropical hoặc những không gian décor nghệ thuật.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Gloriosum</b> có nguồn gốc từ rừng mưa nhiệt đới <b>Colombia</b> và <b>Peru</b>, nơi cây bò sát mặt đất dưới tán rừng, vì vậy cây ưa sáng tán xạ, gió thoáng và ẩm nhẹ.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Philodendron Gloriosum Dark Form",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Chỉ cần chọn giá thể thoáng rễ, tránh úng và đảm bảo cây có không gian bò ngang là <b>Gloriosum</b> phát triển rất ổn định. Phù hợp cả người chơi mới và người sưu tầm <b>Philodendronv.",
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Lá to mềm, màu xanh đậm sâu rất sang",
                            "Gân sáng nổi bật tạo hiệu ứng ánh sáng đẹp mắt",
                            "Form bò ngang giúp cây phát triển tự nhiên và mềm mại",
                            "Hợp décor phong cách <b>tropical – hiện đại – tối giản sang trọng</b>",
                            "Dễ chăm, thích nghi tốt trong không gian trong nhà",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Đất Trồng Phù Hợp",
                type: "list",
                content: [
                    "Cây thích giá thể tơi <b>xốp</b> – <b>ẩm nhẹ</b> – <b>thoát nước tốt</b>",
                    {
                        title: "<b>Có thể trộn:</b>",
                        items: [
                            "<b>Đất mùn</b> / <b>Tribat</b> (giữ dinh dưỡng)",
                            "<b>Xơ dừa</b> hoặc <b>than bùn</b> (giữ ẩm vừa)",
                            "<b>Perlite</b> / <b>pumice</b> / <b>đá nhẹ</b> (thoáng rễ)",
                            "Vỏ thông hoặc sợi dừa để chống nén và hỗ trợ rễ bò",
                        ],
                        
                    },
                    "<b>Nên trồng trong khay hoặc chậu dài để rễ củ có chỗ bò tiến về phía trước.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Ưa <b>ánh sáng gián tiếp sáng nhẹ</b> (gần cửa sổ có rèm).",
                            "Tránh nắng trực tiếp để không làm cháy bề mặt lá nhung.",
                            "Thiếu sáng → lá nhỏ hơn và gân kém nổi.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>20 – 30°C</b>",
                        ]
                    },
                    "Không thích gió điều hòa thổi trực tiếp quá lâu."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Giữ <b>ẩm nhẹ</b>, không để giá thể khô hoàn toàn nhưng cũng không sũng nước..",
                            "Tưới khi thấy mặt đất <b>khô 2–3cm</b>.",
                            "<b>Tưới đẫm</b> 1 lần, để ráo hoàn toàn.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng đều → tưới quá tay hoặc rễ bí.",
                            "Lá rũ mềm → cây đang thiếu ẩm.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây thích độ <b>ẩm trung bình 60–80%</b>.",
                            "Phun sương nhẹ buổi sáng giúp lá căng và gân nổi đẹp hơn.",
                            "Không phun khi cây đang ở nơi bí gió.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b>"]
                    },
                ]
            },
        ]
    },
    "22": {
        name:"Caladium Hồng",
        intro: "<b>Caladium Hồng</b> có lá màu với sắc hồng phấn pha trắng ngọc, viền lá xanh mảnh tạo nên hiệu ứng nghệ thuật rất mềm mại và thu hút. Lá mỏng nhẹ, trong ánh sáng đẹp sẽ thấy các đường gân nổi rõ, giúp cây trở thành điểm nhấn nổi bật trong không gian. Cây phù hợp đặt phòng khách, bàn làm việc, ban công nhẹ sáng, studio décor, quán café phong cách nhiệt đới hoặc vintage.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Caladium</b> có nguồn gốc từ rừng mưa vùng <b>Nam Mỹ</b> – sinh trưởng dưới tán rừng ẩm, vì vậy ưa sáng gián tiếp và độ ẩm ổn định, rất hợp khí hậu <b>Việt Nam</b>.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Caladium Hồng",
                    level: 2,
                    scale: 6,
                    description: "Khá Dễ",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Chỉ cần giữ ẩm đúng cách và tránh nắng gắt trực tiếp, cây sẽ phát triển tốt và lên màu lá rất đẹp.",
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Màu lá hồng phấn nổi bật, trang trí không gian rất sang và mềm mại",
                            "Form lá mỏng nhẹ, càng lớn màu càng rõ và đều",
                            "Dễ chăm, phát triển nhanh, ít sâu bệnh",
                            "Hợp décor nhà ở, studio, quán café, homestay",
                            "Cây nhỏ nhưng hiệu ứng thẩm mỹ mạnh, rất “ăn hình” khi chụp ảnh",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Đất Trồng Phù Hợp",
                type: "list",
                content: [
                    "Cây thích giá thể tơi <b>xốp</b> – <b>ẩm nhẹ</b> – <b>thoát nước tốt</b>",
                    {
                        title: "<b>Có thể trộn:</b>",
                        items: [
                            "<b>Đất mùn</b> / <b>Tribat</b> (giữ dinh dưỡng)",
                            "<b>Xơ dừa</b> hoặc <b>than bùn</b> (giữ ẩm vừa)",
                            "<b>Trấu hun</b> hoặc <b>perlite</b> (thoáng rễ)",
                            "Có thể thêm vỏ thông mịn để giá thể không bị nén",
                        ],
                        
                    },
                    "<b>Chậu cần có lỗ thoát nước.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Ưa <b>ánh sáng gián tiếp sáng nhẹ</b>.",
                            "Đặt cạnh cửa sổ có rèm, logia, giếng trời hoặc ban công sáng nhẹ là đẹp nhất.",
                            "Tránh nắng trưa chiếu trực tiếp → dễ cháy lá và làm phai màu hồng.",
                        ]
                    },
                    {
                        items: [
                            "Thiếu sáng → màu hồng nhạt dần.",
                            "Đủ sáng → lá lên hồng sâu, rõ gân, rất đẹp.",
                        ]
                    }
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>20 – 30°C</b>",
                        ]
                    },
                    "Tránh gió điều hòa mạnh thổi trực tiếp quá lâu."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Giữ ẩm vừa, không sũng gốc.",
                            "Tưới khi lớp đất mặt khô nhẹ 1–2cm.",
                            "Tưới đẫm một lần rồi để ráo nước hoàn toàn.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng → tưới quá nhiều / giá thể bí.",
                            "Lá khô mép → thiếu ẩm hoặc nắng quá mạnh.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây thích độ <b>ẩm trung bình đến cao (55–80%)</b>.",
                            "Có thể phun sương nhẹ buổi sáng để lá tươi và màu đẹp hơn.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b>"]
                    },
                    "→ <b>Giúp cây hấp thu dinh dưỡng tốt và lá xanh đều.</b>"
                ]
            },
        ]
    },
    "23": {
        name:"Hotumi",
        intro: "<b>Dương Xỉ Sừng Hươu Hotumi</b> là dòng dương xỉ trang trí có dáng lá độc đáo, phần lá rũ và xoè ra như cặp sừng hươu mạnh mẽ. Khi treo cao, tán lá bung mềm rất đẹp, tạo cảm giác hoang dã và xanh mát chuẩn phong cách rừng nhiệt đới. Cây thường được trồng treo tường, treo giàn, treo ban công, quán cà phê sân vườn, homestay, villa hoặc các không gian décor tropical.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Hotumi</b> có nguồn gốc từ các khu rừng ẩm nhiệt đới <b>châu Á</b> – nơi cây bám vào thân cây lớn và phát triển theo chiều rủ xuống. Vì vậy, cây ưa sáng tán xạ, thoáng khí và độ ẩm ổn định.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Hotumi",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Chỉ cần giữ ẩm vừa phải và tránh nắng gắt trực tiếp, cây sẽ phát triển ổn định và tán rủ đẹp.",
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Dáng lá rủ – xoè – uốn mềm tạo hiệu ứng rất hút mắt",
                            "Rất hợp décor treo: ban công, hiên nhà, giàn treo, café, studio",
                            "Tạo cảm giác <b>xanh mát – phóng khoáng – tự nhiên</b>",
                            "Phát triển ổn định trong khí hậu <b>Việt Nam</b>",
                            "Rất “ăn hình”, hợp góc chụp – quay video decor",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Giá Thể & Cách Trồng",
                type: "list",
                content: [
                    "Hotumi thích giá thể thoáng & giữ ẩm nhẹ",
                    {
                        title: "<b></b>",
                        items: [
                            "<b>Rêu</b> / <b>xơ dừa</b> / <b>than bùn</b> (giữ ẩm mềm)",
                            "<b>Vỏ thông</b> / <b>dớn bảng</b> (giúp bám & thoát nước)",
                            "Có thể gắn trên <b>bảng gỗ, thân lũa hoặc treo chậu rỗng</b>",
                        ],
                        
                    },
                    "<b>Không trồng bằng đất nén chặt → dễ bí rễ.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Ưa <b>ánh sáng gián tiếp / sáng tán xạ</b>.",
                            "Treo dưới mái che, giàn lưới hoặc bóng cây lớn là lý tưởng.",
                            "Tránh nắng giữa trưa → cháy mép lá.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>18 – 30°C</b>",
                        ]
                    },
                    "Cây phát triển tốt trong môi trường mát & thông thoáng."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Giữ ẩm đều, không để quá khô.",
                            "Phun sương lên tán lá và rễ bám <b>3–5 lần/tuần</b> tùy thời tiết.",
                            "Nếu mưa nhiều → giảm tưới để tránh úng.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá khô xoăn → thiếu ẩm.",
                            "Gốc nhũn → tưới quá tay hoặc giá thể không thoát nước.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây rất thích độ ẩm trung bình đến <b>cao (60–80%)</b>.",
                            "Phun sương buổi sáng giúp tán mềm và lá xanh tươi.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b>"]
                    },
                ]
            },
        ]
    },
    "24": {
        name:"Philodendron Pink Princess",
        intro: "<b>Philodendron Pink Princess</b> là dòng <b>Philodendron</b> đặc biệt nổi tiếng nhờ những mảng var hồng trên lá, tạo hiệu ứng tương phản rất cuốn hút. Lá màu xanh thẫm pha đen, xen cùng các mảng loang hồng pastel hoặc hồng đậm tùy cây, mỗi lá mọc ra đều có họa tiết riêng, giống như một tác phẩm nghệ thuật tự nhiên. Cây rất hợp trang trí phòng khách, bàn làm việc, studio, quán café, homestay phong cách tropical hoặc hiện đại trẻ trung.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Pink Princess</b> có nguồn gốc từ rừng nhiệt đới <b>Nam Mỹ</b>, phát triển dưới tán cây lớn nên ưa sáng gián tiếp, môi trường thoáng và độ ẩm ổn định.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Philodendron Pink Princess",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Chăm dễ, nhưng để giữ var hồng đẹp, cần lưu ý ánh sáng phù hợp (không thiếu – không gắt).",
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Lá có var hồng độc đáo, không cây nào giống cây nào",
                            "Tính trang trí mạnh, tạo điểm nhấn <b>sang – lạ – hiện đại</b>",
                            "Dễ chăm trong nhà, phát triển ổn định",
                            "Rất hợp décor studio, café, phòng khách, góc chụp ảnh",
                            "Cây càng lớn <b>mảng hồng</b> càng rõ và <b>đẹp</b>",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Đất Trồng Phù Hợp",
                type: "list",
                content: [
                    "Cây thích giá thể thoáng – giữ ẩm nhẹ – thoát nước tốt, công thức gợi ý:",
                    {
                        title: "<b></b>",
                        items: [
                            "<b>Đất mùn</b> / <b>tribat</b> (dinh dưỡng nền)",
                            "<b>Xơ dừa</b> hoặc <b>than bùn</b> (giữ ẩm mềm)",
                            "<b>Perlite</b> / <b>pumice</b> / <b>trấu hun</b> (tăng thoáng rễ)",
                            "Vỏ thông giúp đất không bị nén chặt",
                        ],
                        
                    },
                    "<b>Chậu phải có lỗ thoát nước.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Đặt ở nơi <b>sáng gián tiếp, sáng nhẹ đến trung bình</b>.",
                            "Ánh sáng đúng → var hồng sắc nét, rõ mảng.",
                            "Thiếu sáng → lá xanh đậm, mất var.",
                            "Nắng gắt trực tiếp → cháy mép lá và phai màu hồng.",
                        ]
                    },
                    "Gợi ý: gần cửa sổ có rèm, logia sáng, giếng trời.",
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>20 – 30°C</b>",
                        ]
                    },
                    "Không để cây cạnh điều hòa hoặc gió mạnh thổi trực tiếp lâu."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới khi mặt đất khô 2–3cm.",
                            "Tưới đẫm 1 lần, để nước thoát đáy chậu rồi để ráo.",
                            "Tránh để giá thể ẩm liên tục quá lâu.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng → tưới quá nhiều / đất bí rễ.",
                            "Lá rũ mềm → cây đang thiếu nước.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây rất thích độ <b>ẩm trung bình đến cao (60–80%)</b>.",
                            "Phun sương nhẹ buổi sáng giúp lá tươi và màu var đẹp hơn.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b>"]
                    },
                ]
            },
        ]
    },
    "25": {
        name:"Dương xỉ Tổ Quạ",
        intro: "<b>Dương xỉ Tổ Quạ</b> là dòng dương xỉ lá dài mọc từ tâm bụi, tán xoè đều thành dạng hình hoa thị rất đẹp mắt. Mép lá cong lượn nhẹ tạo cảm giác tự nhiên, mềm mại và xanh mát. Cây phù hợp trồng chậu đặt bàn, bồn cảnh, trồng phủ nền sân vườn hoặc treo để tạo điểm nhấn xanh tươi trong không gian.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "Cây có nguồn gốc từ rừng ẩm nhiệt đới, phát triển dưới tán cây lớn, vì vậy ưa sáng gián tiếp, gió thoáng và độ ẩm ổn định. Rất hợp khí hậu <b>Việt Nam</b> và dễ sinh trưởng ngoài trời.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Dương xỉ Tổ Quạ",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Chỉ cần giữ độ ẩm vừa phải và tránh nắng gắt trực tiếp, cây sẽ phát triển nhanh và tán lá bung đều rất đẹp.",
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Tán lá xoè tròn, form bụi đẹp, xanh mát tự nhiên",
                            "Trang trí rất hiệu quả cho ban công, sân vườn, hiên nhà, café sân vườn, homestay",
                            "Dễ chăm, ít sâu bệnh",
                            "Tạo cảm giác <b>mềm – xanh – thư giãn</b> trong không gian",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Giá Thể & Đất Trồng",
                type: "list",
                content: [
                    "Cây thích giá thể <b>tơi – giữ ẩm nhẹ – thoát nước tốt</b>:",
                    {
                        title: "<b></b>",
                        items: [
                            "<b>Đất mùn</b> / <b>tribat</b> (dinh dưỡng nền)",
                            "<b>Xơ dừa</b> hoặc <b>than bùn</b> (giữ ẩm mềm)",
                            "<b>Perlite</b> / <b>trấu hun</b> (tăng thoáng rễ)",
                            "Có thể thêm vỏ thông hoặc dớn để chống nén đất",
                        ],
                        
                    },
                    "<b>Chậu nên có lỗ thoát nước để tránh úng.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Ưa <b>ánh sáng gián tiếp hoặc nắng sáng nhẹ.</b>.",
                            "Đặt dưới mái che, tán cây, giàn lưới là lý tưởng.",
                            "Tránh nắng trưa chiếu trực tiếp → dễ cháy mép lá.",
                        ]
                    },
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>18 – 30°C</b>",
                        ]
                    },
                    "Càng thoáng gió, cây càng xanh và mềm tán."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Giữ <b>ẩm ổn định</b>, không để đất khô kéo dài.",
                            "Tưới <b>2–4 lần/tuần</b> tùy thời tiết và vị trí đặt.",
                            "Phun sương nhẹ buổi sáng giúp lá căng bóng và đẹp hơn.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá xoăn khô → thiếu ẩm.",
                            "Gốc nhũn → tưới quá nhiều hoặc giá thể bí.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Cây thích độ <b>ẩm trung bình đến cao</b>.",
                            "Phun sương đều giúp lá mềm và màu đẹp hơn.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b>"]
                    },
                ]
            },
        ]
    },
    "26": {
        name:"Ráy Var Đột Biến",
        intro: "<b>Ráy Var Đột Biến</b> gây ấn tượng mạnh với những mảng loang trắng – kem – xanh phân bố ngẫu nhiên trên lá, mỗi lá mọc ra đều có họa tiết khác nhau như một “bức tranh tự nhiên” độc nhất. Form lá lớn, bản mềm, hơi cong nhẹ tạo cảm giác tự nhiên và rất nổi bật trong không gian trang trí.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Ráy Var</b> có nguồn gốc từ rừng mưa nhiệt đới, phát triển dưới tán cây lớn nên ưa sáng gián tiếp, không thích nắng gắt. Cây phù hợp đặt phòng khách, bàn làm việc, kệ tủ, ban công che nắng, quán cà phê, studio hoặc trồng chung tiểu cảnh phong cách tropical.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Ráy Var Đột Biến",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Chăm dễ, nhưng để giữ var loang đẹp và ổn định, cần ánh sáng vừa đủ và không để cây thiếu ẩm kéo dài.",
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Hoa văn var đột biến <b>đẹp – lạ – sang</b>, không cây nào giống cây nào",
                            "Tính trang trí cao, hợp decor mọi phong cách",
                            "Dễ sống trong nhà, ít sâu bệnh",
                            "Càng lớn form lá càng đẹp và rõ mảng hơn",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Giá Thể & Đất Trồng",
                type: "list",
                content: [
                    "Cây thích giá thể <b>thoáng</b> – <b>giữ ẩm</b> nhưng không bí:",
                    {
                        title: "<b></b>",
                        items: [
                            "<b>Đất mùn</b> / <b>tribat</b> (dinh dưỡng nền)",
                            "<b>Xơ dừa</b> hoặc <b>than bùn</b> (giữ ẩm mềm)",
                            "<b>Perlite</b> / <b>pumice</b> / <b>trấu hun</b> (tăng thoáng rễ)",
                            "Có thể thêm vỏ thông để chống nén đất",
                        ],
                        
                    },
                    "<b>Chậu có lỗ thoát nước là bắt buộc.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "</b>Tốt nhất:</b> ánh sáng <b>gián tiếp – sáng đều</b>.",
                            "Đặt gần cửa sổ có rèm hoặc nơi sáng tán xạ.",
                            "Tránh nắng gắt trực tiếp → dễ <b>cháy mảng trắng</b>.",
                        ]
                    },
                    "Thiếu sáng → var mờ, lá xanh nhiều.",
                    "Sáng đúng → var rõ, bố cục mảng đẹp và sắc nét.",
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>20 – 30°C</b>",
                        ]
                    },
                    "Không để cạnh điều hòa thổi trực tiếp lâu → dễ khô lá."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới khi mặt đất khô 2–3cm.",
                            "Tưới đẫm 1 lần để nước thoát đáy chậu rồi để ráo.",
                            "Không giữ đất ẩm liên tục → tránh úng rễ.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá mềm rũ → thiếu nước.",
                            "Lá vàng nhạt → tưới quá nhiều hoặc đất bí.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Ưa độ <b>ẩm trung bình đến cao</b>.",
                            "Phun sương nhẹ buổi sáng giúp lá căng bóng và var đẹp hơn.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b>"]
                    },
                ]
            },
        ]
    },
    "27": {
        name:"Cây Melano",
        intro: "<b>Melano</b> nổi bật với lá dài thuôn, mặt lá nhung ánh lụa, gân lá màu vàng sáng chạy dọc rất cuốn hút. Khi trưởng thành, lá có thể dài đến <b>40–70cm</b>, rủ mềm tao nhã, tạo cảm giác sang trọng, nghệ thuật và đậm chất tropical. Cây leo thân, phát triển đẹp nhất khi được <b>dẫn cọc hoặc leo trụ</b>.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Melano</b> có nguồn gốc từ rừng mưa nhiệt đới <b>Nam Mỹ</b>, sống dưới tán cây lớn nên ưa sáng gián tiếp, độ ẩm cao và môi trường thoáng.",
                    "Cây phù hợp đặt <b>phòng khách, góc đọc sách, studio, phòng làm việc, sảnh tiếp khách, quán café, homestay</b> theo phong cách tropical hoặc tinh giản sang trọng.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Melano",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Dễ chăm nếu giữ độ ẩm ổn định và có cọc để cây leo.",
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Lá nhung đen ánh lụa <b>sang – lạ – rất nghệ</b>",
                            "Càng lớn lá càng dài và form càng đẹp",
                            "Tạo điểm nhấn cao cấp trong không gian nội thất",
                            "Dễ sống, ít sâu bệnh",
                            "Hợp decor <b>hiện đại, tropical, luxury</b>"
                        ]
                    }
                ]
            },
            {
                title: "🌱 Giá Thể & Đất Trồng",
                type: "list",
                content: [
                    "Cây thích giá thể <b>thoáng – giàu hữu cơ – thoát nước tốt</b>, gợi ý:",
                    {
                        title: "<b></b>",
                        items: [
                            "<b>Đất mùn</b> / <b>tribat</b> hoặc <b>đất thịt nhẹ</b> (dinh dưỡng nền)",
                            "<b>Xơ dừa</b> hoặc <b>than bùn</b> (giữ ẩm mềm)",
                            "<b>Perlite</b> / <b>pumice</b> / <b>trấu hun</b> (tăng thoáng rễ)",
                            "Vỏ thông cỡ nhỏ (giúp đất không bị nén)",
                        ],
                        
                    },
                    "<b>Luôn trồng kèm cọc hoặc trụ rêu để lá phát triển bản lớn đẹp.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Tốt nhất: ánh sáng gián tiếp <b>sáng vừa – sáng mạnh</b>.",
                            "Đặt gần cửa sổ có rèm, giếng trời, hiên sáng.",
                        ]
                    },
                    "Nắng gắt trực tiếp → dễ cháy lá, mất độ nhung.",
                    "Thiếu sáng → lá nhỏ và nhạt màu.",
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>20 – 30°C</b>",
                        ]
                    },
                    "Tránh gió điều hoà thổi thẳng và gió lạnh đột ngột."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới khi mặt đất khô 2–3cm.",
                            "Tưới đẫm để nước thoát đáy, không giữ ẩm liên tục.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng, đốm thối → tưới quá tay / giá thể bí.",
                            "Lá mềm cụp → cây thiếu nước hoặc thiếu ẩm.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Ưa độ <b>ẩm trung bình đến cao (60–85%)</b>.",
                            "Phun sương nhẹ buổi sáng giúp lá mượt và bóng nhung.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 6.8</b>"]
                    },
                ]
            },
        ]
    },
    "28": {
        name:"Cây Ổ rồng CORO Thuần",
        intro: "<b>Ổ rồng CORO Thuần</b> là dòng Dương xỉ tổ chim cao cấp, có form lá rủ mềm, uốn sóng tự nhiên rất nghệ. Khi trưởng thành, cây tạo thành cụm lá “râu rồng” dài rủ xuống, kết hợp với lá bản to ôm gốc tạo hiệu ứng như một tác phẩm điêu khắc sống. Càng nuôi lâu, cây càng đẹp và mang giá trị sưu tầm cao.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Ổ Rồng CORO Thuần</b> là loại <b>bám giá thể/ bám thân cây</b>, sống khỏe ở môi trường thoáng gió và ánh sáng tán xạ. Cây càng thuần lâu năm trên thân gỗ hoặc giá thể lớn thì form càng đẹp, lá càng sắc nét và độ rủ càng mềm.",
                    "<b>Ổ Rồng CORO Thuần</b> phù hợp trang trí <b>sân vườn, sân thượng, hiên nhà, cổng, ban công giàn treo</b>, hoặc các không gian tropical nghệ thuật, resort, homestay.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Ổ rồng CORO Thuần",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Chỉ cần <b>thoáng gió + ánh sáng nhẹ + tưới vừa phải</b>, cây phát triển cực tốt.",
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Form lá rủ <b>đẹp – nghệ – có chiều sâu</b>",
                            "Càng nuôi lâu giá trị càng tăng, thích hợp dạng cây sưu tầm",
                            "Dễ chăm trong điều kiện khí hậu <b>Việt Nam</b>",
                            "Trang trí sân vườn cực <b>nổi bật và giàu tính thẩm mỹ</b>",
                            "Sống lâu năm, bền và rất ít sâu bệnh"
                        ]
                    }
                ]
            },
            {
                title: "🌱 Giá Thể & Đất Trồng",
                type: "list",
                content: [
                    "Ổ Rồng CORO không ưa đất.",
                    "Thích bám trên thân cây / bảng gỗ / tổ dớn / khúc lũa, vì rễ của nó là rễ bám.",
                    {
                        title: "<b>Giá thể lý tưởng:</b>",
                        items: [
                            "Dớn bảng / dớn cục / gỗ lũa / thân cây sống",
                            "Một lớp rêu giữ ẩm phía sau để rễ bám và phát triển",
                        ],
                        
                    },
                    "<b>Cố định gốc chắc chắn → cây sẽ tự bám theo thời gian.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Tốt nhất: <b>ánh sáng tán xạ – nắng sáng nhẹ</b>.",
                            "Đặt dưới mái che, giàn cây, hoặc dưới tán cây lớn.",
                        ]
                    },
                    "Nắng trưa trực tiếp quá gắt → cháy mép lá.",
                    "Thiếu sáng → lá dài nhưng yếu, không có form chuẩn.",
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>20 – 32°C</b>",
                        ]
                    },
                    "Thoáng gió càng tốt → giúp cây khỏe và lá đẹp."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    "Ổ rồng thích ẩm thoáng, không sũng nước.",
                    {
                        title: "Tưới vào mặt sau của gốc và rễ:",
                        items: [
                            "<b>Mùa nóng:</b> 1–2 lần/ngày (phun hoặc xả nhanh)",
                            "<b>Mùa mát:</b> 3–5 lần/tuần",
                        ]
                    },
                    "Không tưới đọng lâu ở lá chắn (lá tròn ôm gốc) → dễ thối.",
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Ưa độ <b>ẩm trung bình đến cao (60–85%)</b>.",
                            "Phun sương sáng sớm giúp lá căng và phát triển khỏe.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Tương thích tốt với môi trường hơi <b>chua – trung tính x(pH 5.5 – 7.0)</b>"]
                    },
                ]
            },
        ]
    },
    "29": {
        name:"Trầu Bà Lỗ",
        intro: "<b>Trầu Bà Lỗ</b> nổi bật với những chiếc lá xanh mềm có các lỗ tự nhiên độc đáo, tạo cảm giác sinh động và rất “tropical”. Cây leo nhẹ, có thể để rũ mềm tự nhiên hoặc cho leo cọc/mắc treo đều đẹp. Càng lớn, lá càng to và lỗ càng rõ, nhìn rất ấn tượng.",
        sections: [
            {
                title:"",
                type: "list",
                content: [
                    "<b>Trầu Bà Lỗ</b> có nguồn gốc từ rừng mưa <b>Trung & Nam Mỹ</b>, sinh trưởng dưới tán cây nên <b>ưa sáng gián tiếp</b>, <b>thoáng khí và độ ẩm ổn định</b>. Cây phù hợp đặt bàn, giá sách, kệ tivi, ban công sáng, quán cà phê, studio trang trí.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Ráy Var Đột Biến",
                    level: 2,
                    scale: 6,
                    description: "Khá Dễ",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Chỉ cần ánh sáng dịu + tưới vừa phải → cây phát triển nhanh, ra tược liên tục.",
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Lá có lỗ tự nhiên đẹp lạ, rất dễ nhận diện",
                            "Tạo hiệu ứng <b>xanh mềm – nghệ – tropical</b>",
                            "Dễ chăm, phát triển nhanh",
                            "Phù hợp nhiều không gian từ nhỏ đến lớn",
                            "Có thể <b>trồng treo hoặc cho leo cọc tùy gu</b>",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Giá Thể & Đất Trồng",
                type: "list",
                content: [
                    "Cây thích giá thể <b>thoáng</b> – <b>giữ ẩm</b> nhưng không bí:",
                    {
                        title: "<b></b>",
                        items: [
                            "<b>Đất mùn</b> / <b>tribat</b> (dinh dưỡng nền)",
                            "<b>Xơ dừa</b> hoặc <b>than bùn</b> (giữ ẩm mềm)",
                            "<b>Perlite</b> / <b>pumice</b> / <b>trấu hun</b> (tăng thoáng rễ)",
                            "Vỏ thông nhỏ giúp đất không bị nén",
                        ],
                        
                    },
                    "<b>Chậu nên có lỗ thoát nước.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "</b>Tốt nhất:</b> sáng gián tiếp – sáng nhẹ.",
                            "Tránh nắng trưa chiếu trực tiếp → cháy lá.",
                            "Thiếu sáng → lá nhỏ, lỗ ít và thưa.",
                        ]
                    },
                    "Gợi ý: ban công sáng, giếng trời, kệ cạnh cửa sổ.",
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>18 – 30°C</b>",
                        ]
                    },
                    "Tránh gió điều hòa thổi trực tiếp."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        items: [
                            "Tưới khi mặt đất khô 2–3cm.",
                            "Tưới đẫm 1 lần để nước thoát đáy rồi để ráo.",
                        ]
                    },
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá vàng nhạt → tưới quá tay/đất bí rễ.",
                            "Lá rũ mềm → cây đang thiếu nước.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Ưa độ <b>ẩm trung bình đến cao</b>.",
                            "Phun sương nhẹ buổi sáng giúp lá mềm và bóng đẹp.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 7.0</b>"]
                    },
                ]
            },
        ]
    },
    "30": {
        name: "Dương xỉ Thân Gỗ",
        intro: "<b>Dương Xỉ Thân Gỗ</b> là dòng dương xỉ lâu năm có thân mọc cao như thân cọ thu nhỏ, tán lá xòe mềm tự nhiên rất thanh thoát. Khi trưởng thành, thân cây có thể cao từ <b>40cm đến hơn 1m</b>, tạo điểm nhấn xanh ấn tượng cho sân vườn, hồ cá koi, lối đi, bồn cây hoặc không gian cảnh quan nghệ thuật.",
        sections: [
            {
                title: "💰 Thông tin giá",
                type: "table",
                content: [
                    { label: "Cao 1m-1m5", value: "190k" },
                    { label: "Cao 1m6-2m", value: "290k" },
                    { label: "Cao 2,1m-2,5m", value: "370k" },
                    { label: "Cao 2,6m-3m", value: "440k" },
                    { label: "Cao 3,1m-4m", value: "530k" },
                ],
            },
            {
                title:"",
                type: "list",
                content: [
                    "Cây có nguồn gốc từ rừng ẩm nhiệt đới, thích môi trường thoáng gió, ánh sáng tán xạ và độ ẩm ổn định. Đặc biệt, cây sống rất bền, <b>càng thuần lâu năm thân càng đẹp và giá trị càng cao</b>.",
                ]
            },
            {
                title: "Độ Khó Trồng",
                type: "difficulty",
                content: {
                    title: "Độ khó trồng cây Dương xỉ Thân Gỗ",
                    level: 3,
                    scale: 6,
                    description: "Dễ Trồng",
                    labels: ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"],
                },
            },
            {
                
                title:"",
                type: "text",
                content: [
                    "Chỉ cần giữ ẩm đều và che nắng gắt, cây phát triển rất nhanh.",
                ]
            },
            {
                title: "🌿 Ưu điểm:",
                type: "list",
                content: [
                    {
                        items: [
                            "Thân mọc đứng vươn cao, tạo điểm nhấn đẹp cho sân vườn",
                            "Lá mềm, xanh tươi, cảm giác <b> tự nhiên & thư giãn</b> ",
                            "Rất hợp trang trí hồ cá koi, giếng trời, sân thượng, cổng – lối đi",
                            "<b>Sống bền</b>, ít sâu bệnh, chịu mưa nắng tốt khi đã thuần",
                            "Càng nuôi lâu thân càng già, càng đẹp <b>giá trị tăng theo thời gian</b>",
                        ]
                    }
                ]
            },
            {
                title: "🌱 Giá Thể & Đất Trồng",
                type: "list",
                content: [
                    "Dương xỉ thân gỗ thích <b>giá thể thoáng ẩm – không</b> nén chặt:",
                    {
                        title: "<b></b>",
                        items: [
                            "<b>Đất thịt nhẹ</b> / <b>tribat</b> (dinh dưỡng nền)",
                            "<b>Xơ dừa</b> hoặc <b>Dớn mềm</b> (giữ ẩm mềm)",
                            "<b>Perlite</b> / <b>trấu hun</b> (tăng thoáng rễ)",
                            "Có thể phủ thêm rêu trên bề mặt để giữ ẩm tự nhiên",
                        ],
                        
                    },
                    "<b>Trồng chậu hoặc trồng xuống đất đều được.</b>",
                ]
            },
            {
                title: "🔆 Ánh Sáng Phù Hợp",
                type: "list",
                content: [
                    {
                        items:[
                            "Tốt nhất:<b> ánh sáng tán xạ – mát – không nắng gắt</b>.",
                            "Đặt dưới <b>tán cây lớn / giàn lưới / mái che sáng</b>.",
                        ]
                    },
                    "Nắng trưa gắt → cháy mép lá.",
                    "Thiếu sáng → lá dài nhưng mỏng, kém đẹp.",
                ]
            },
            {
                title: "🌡 Nhiệt Độ",
                type: "list",
                content: [
                    {
                        items: [
                            "Lý tưởng: <b>20 – 32°C</b>",
                        ]
                    },
                    "Thoáng gió càng tốt → cây càng xanh và tán càng mềm."
                ]
            },
            {
                title: "💧 Tưới Nước",
                type: "list",
                content: [
                    {
                        title: "Cây thích ẩm liên tục nhưng không đọng nước:",
                        items: [
                            "Tưới 1–2 lần/ngày vào mùa nóng",
                            "3–5 lần/tuần vào mùa mát",
                        ]
                    },
                    "Ưu tiên tưới vào <b>thân</b> và <b>gốc</b>, <b>phun</b> sương tán lá buổi sáng rất tốt.",
                    {
                        title: "<b>Dấu hiệu:</b>",
                        items: [
                            "Lá rủ khô → thiếu nước / môi trường quá khô.",
                            "Lá vàng đốm → úng gốc hoặc giá thể bí.",
                        ]
                    }
                ]
            },
            {
                title: "💦 Độ Ẩm",
                type: "list",
                content: [
                    {
                        items: [
                            "Ưa <b>độ ẩm không khí từ 60–90%</b>",
                            "Cực hợp những không gian có hồ nước, vườn râm, sân mát.",
                        ]
                        
                    },
                ]
            },
            {
                title: "🧪 pH Đất",
                type: "list",
                content: [
                    {
                        items: ["Thích hợp: <b>pH 5.5 – 7.0</b>"]
                    },
                ]
            },
        ]
    },
};
