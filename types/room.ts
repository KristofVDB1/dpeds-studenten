import type { Card } from "~/types/card";
import type { Paragraph } from "~/types/paragraph";
import type { Image } from "~/types/image";
import type { Banner } from "~/types/banner";

export interface Room extends Card {
    paragraphs?: Paragraph[];
    images?: Image[];
    details?: RoomDetail[]
    banner?: Banner
}

export interface RoomDetail {
    [key: string]: string | number | boolean;
}