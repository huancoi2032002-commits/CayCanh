import React from "react";
import type {
    TableData,
    ListItem,
    PlantDescriptionData,
    DifficultyLevel
} from "../../store/Type/Plants";

interface PlantDescriptionProps extends PlantDescriptionData { }

const PlantDescription: React.FC<PlantDescriptionProps> = ({ intro, sections }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 mt-10">
            <h1 className="text-center text-3xl font-bold mb-4">
                Mô tả chi tiết
            </h1>

            {/* ✅ intro có thể chứa HTML */}
            <p
                className="text-lg text-gray-700 mb-6 text-justify"
                dangerouslySetInnerHTML={{ __html: intro }}
            />

            {sections.map((section, index) => (
                <div key={index} className="mb-10">
                    {/* ✅ title cũng hỗ trợ HTML */}
                    <h2
                        className="text-2xl font-semibold mb-3 text-green-700"
                        dangerouslySetInnerHTML={{ __html: section.title }}
                    />

                    {/* ✅ difficulty */}
                    {section.type === "difficulty" ? (
                        <div className="text-center">
                            {(() => {
                                const diff = section.content as DifficultyLevel;
                                return (
                                    <>
                                        <h3
                                            className="font-semibold text-lg mb-3"
                                            dangerouslySetInnerHTML={{ __html: diff.title }}
                                        />
                                        <p className="text-gray-700 mb-2">
                                            Độ khó: <b>{diff.level}</b>/{diff.scale} —{" "}
                                            <span className="font-medium text-green-600">
                                                {diff.description}
                                            </span>
                                        </p>
                                        <div className="flex justify-center gap-3 mt-3 flex-wrap">
                                            {diff.labels.map((label, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`flex flex-col items-center text-sm ${idx + 1 <= diff.level
                                                            ? "text-green-600"
                                                            : "text-gray-400"
                                                        }`}
                                                >
                                                    <div className="w-8 h-8 rounded-full border flex items-center justify-center mb-1 font-medium">
                                                        {idx + 1}
                                                    </div>
                                                    <span>{label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    ) : section.type === "table" && Array.isArray(section.content) ? (
                        /* ✅ table cho phép HTML trong label & value */
                        <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-gray-700">
                            <tbody>
                                {(section.content as TableData[]).map((row, i) => (
                                    <tr
                                        key={i}
                                        className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"
                                            } border-b border-gray-200`}
                                    >
                                        <td
                                            className="py-2 px-4 font-medium w-1/3"
                                            dangerouslySetInnerHTML={{ __html: row.label }}
                                        />
                                        <td
                                            className="py-2 px-4"
                                            dangerouslySetInnerHTML={{ __html: row.value }}
                                        />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : section.type === "list" && Array.isArray(section.content) ? (
                        /* ✅ list cho phép HTML ở tất cả cấp */
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            {(section.content as (string | ListItem)[]).map((item, i) => {
                                if (typeof item === "string") {
                                    return (
                                        <p
                                            key={i}
                                            className="text-gray-700"
                                            dangerouslySetInnerHTML={{ __html: item }}
                                        />
                                    );
                                }

                                return (
                                    <div key={i}>
                                        {item.title && (
                                            <h3
                                                className="font-semibold text-[18px] text-green-800 mt-3 mb-2"
                                                dangerouslySetInnerHTML={{ __html: item.title }}
                                            />
                                        )}
                                        {item.text && (
                                            <p
                                                className="text-gray-700 mb-2"
                                                dangerouslySetInnerHTML={{ __html: item.text }}
                                            />
                                        )}
                                        {item.items && (
                                            <ul className="list-disc pl-6 space-y-1">
                                                {item.items.map((li, idx) => (
                                                    <li
                                                        key={idx}
                                                        dangerouslySetInnerHTML={{ __html: li }}
                                                    />
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        /* ✅ kiểu mặc định (text) cũng cho phép HTML */
                        <p
                            className="text-gray-700 leading-relaxed whitespace-pre-line"
                            dangerouslySetInnerHTML={{
                                __html: section.content as string,
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default PlantDescription;
