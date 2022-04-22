export type IconNames = "add" | "back" | "cancel" | "confirm" | "edit" | "link" | "question" | "search" | "trash";
export type FillNames = "red" | "red-30" | "red-50" | "black" | "black-30" | "black-50" | "white" | "white-50" | "gray" | "brown" | "brown-30" | "brown-50";

export interface IconProps {
    size?: string;
    name?: IconNames;
    fill?: FillNames;
}