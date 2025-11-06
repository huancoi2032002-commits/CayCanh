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
