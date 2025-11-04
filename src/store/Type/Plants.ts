export interface DifficultyLevel {
    title: string;           // ví dụ: "Độ khó trồng cây Monstera Thai Constellation"
    level: number;           // ví dụ: 2.5
    scale: number;           // tổng thang đo, ví dụ: 6
    description: string;     // mô tả: "Khá Dễ"
    labels: string[];        // ["Rất Dễ", "Khá Dễ", "Dễ Trồng", "Hơi Khó", "Khá Khó", "Rất Khó"]
    icons?: string[];        // nếu bạn có icon tương ứng
}

export interface TableData {
    label: string;
    value: string;
}

export interface ListItem {
    title?: string;
    items?: string[];
    text?: string;
}

export interface Section {
    title: string;
    type?: "text" | "table" | "list" | "difficulty";
    content: string | TableData[] | (string | ListItem)[] | DifficultyLevel;
}

export interface PlantDescriptionData {
    name: string;
    intro: string;
    sections: Section[];
}
