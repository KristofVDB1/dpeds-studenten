import type { Image } from "~/types/image";
import type { Link } from "~/types/link";

export interface Card {
    title: string;
    description?: string;
    image?: Image;
    link?: Link;
}