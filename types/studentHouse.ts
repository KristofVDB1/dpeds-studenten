import type { Header } from "~/types/header";
import type { Room } from "~/types/room";
import type { Paragraph } from "~/types/paragraph";
import type { Banner } from "~/types/banner";

export interface StudentHouse {
    header: Header;
    rooms: Room[];
    paragraphs: Paragraph[];
    banner?: Banner;
}