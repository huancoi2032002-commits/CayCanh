import type {PlantDescriptionData } from "../Type/Plants.ts";

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
