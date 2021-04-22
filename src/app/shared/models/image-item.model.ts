export class ImageItem {
    id!: number;
    active!: boolean;
    thumbnail!: string;
    fullSize!: string;
    title!: string;
    description!: string;
    tags?: number[];

    constructor() { }
}
