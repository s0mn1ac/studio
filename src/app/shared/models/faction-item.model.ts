import { FilterItem } from './filter-item.model';

export class FactionItem {
    id!: number;
    name!: string;
    selected = false;
    expanded = false;
    disabled = false;
    filterItems!: FilterItem[];

    constructor() { }
}
