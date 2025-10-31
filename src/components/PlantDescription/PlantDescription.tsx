import React from "react";

interface TableData {
    label: string;
    value: string;
}

// Dữ liệu có thể là chuỗi hoặc danh sách con
interface ListItem {
    title?: string;       // ví dụ: "🌱 Đất trồng"
    items?: string[];     // danh sách con
    text?: string;        // mô tả ngắn trước danh sách
}

interface Section {
    title: string;
    type?: "text" | "table" | "list";
    content: string | TableData[] | (string | ListItem)[];
}

interface PlantDescriptionProps {
    name: string;
    intro: string;
    sections: Section[];
}

const PlantDescription: React.FC<PlantDescriptionProps> = ({ name, intro, sections }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 mt-10">
            <h1 className="text-center text-3xl font-bold mb-4">
                Mô tả chi tiết — {name}
            </h1>
            <p className="text-lg text-gray-700 mb-6 text-justify">{intro}</p>

            {sections.map((section, index) => (
                <div key={index} className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-green-700">
                        {section.title}
                    </h2>

                    {/* Bảng */}
                    {section.type === "table" && Array.isArray(section.content) ? (
                        <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-gray-700">
                            <tbody>
                                {(section.content as TableData[]).map((row, i) => (
                                    <tr
                                        key={i}
                                        className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b border-gray-200`}
                                    >
                                        <td className="py-2 px-4 font-medium w-1/3">{row.label}</td>
                                        <td className="py-2 px-4">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : section.type === "list" && Array.isArray(section.content) ? (
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            {(section.content as (string | ListItem)[]).map((item, i) => {
                                if (typeof item === "string") {
                                    return <p key={i}>{item}</p>;
                                }

                                return (
                                    <div key={i}>
                                        {item.title && (
                                            <h3 className="font-semibold text-[18px] text-green-800 mt-3 mb-2">
                                                {item.title}
                                            </h3>
                                        )}
                                        {item.text && (
                                            <p className="text-gray-700 mb-2">{item.text}</p>
                                        )}
                                        {item.items && (
                                            <ul className="list-disc pl-6 space-y-1">
                                                {item.items.map((li, idx) => (
                                                    <li key={idx}>{li}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {section.content as string}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PlantDescription;
