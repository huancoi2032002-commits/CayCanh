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
    type?: "text" | "table" | "list";
    content: string | TableData[] | (string | ListItem)[];
}

export interface PlantDescriptionData {
    name: string;
    intro: string;
    sections: Section[];
}
