import { FactionItem } from './faction-item.model';

export class CollectionItem {
    id!: number;
    name!: string;
    disabled = false;
    factionItems!: FactionItem[];

    constructor() { }
}
