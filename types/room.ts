import type { Card } from "~/types/card";
import type { Paragraph } from "~/types/paragraph";
import type { Image } from "~/types/image";

export interface Room extends Card {
    paragraphs?: Paragraph[];
    images?: Image[];
    details?: RoomDetail[]
}

export interface RoomDetail {
    [key: string]: string | number | boolean;
}