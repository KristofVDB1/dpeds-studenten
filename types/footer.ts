import type { Image } from "~/types/image";
import type { Link } from "~/types/link";

export interface Footer {
    image?: Image,
    links?: Link[]
    details: {
        email: string,
        phone: string
        address: {
            text: string,
            href: string
        },
    }
}