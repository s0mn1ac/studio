export class FilterItem {
    mainFilterItem!: MainFilterItem[];

    constructor() { }
}

export class MainFilterItem {
    id!: number;
    title!: string;
    img!: string;
    subFilterItems!: SubFilterItem[];

    constructor() { }
}


export class SubFilterItem {
    id!: number;
    selected = false;
    label!: string;
    subFilterItems!: SubFilterItem[];

    constructor() { }
}
