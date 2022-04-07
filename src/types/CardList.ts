export interface Card {
    dsList: CardData[];
}

export interface CardData {

    id: number;
    name: string;
    photo: string;
    theme: string;
    emoji: string;
}