export interface Image {
    src: string;
    title?: string;
    alt?: string;
    width?: number;
    height?: number;
}

export type CustomImage = {
    idx: number;
    path: string;
    filename: string;
    alt: string;
    width: number;
    height: number;
    aspectRatio: number;
};

export type ImageItemProps = {
    image: CustomImage;
    loading: "lazy" | "eager";
    preload: boolean;
};

export type ImageAction = "download" | "source" | "close";

export type ImageActionProps = {
    image: CustomImage;
    action: ImageAction;
};
