import type { Button } from "~/types/button";
import type { Image } from "~/types/image";

export interface Header {
    title: string;
    description?: string;
    button?: Button
    image?: Image
}