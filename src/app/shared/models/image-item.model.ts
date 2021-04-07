export class ImageItem {
    id!: number;
    active = true;
    thumbnail!: string;
    fullSize!: string;
    title!: string;
    description!: string;
    tags!: number[];

    constructor() { }
}
