import type { Header } from "~/types/header";
import type { Room } from "~/types/room";
import type { Paragraph } from "~/types/paragraph";

export interface StudentHouse {
    header: Header;
    rooms: Room[];
    paragraphs: Paragraph[];
}