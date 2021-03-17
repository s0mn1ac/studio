export class FilterItem {
    selected = false;
    label!: string;
    subFilterItems!: FilterItem[];

    constructor() { }
}
