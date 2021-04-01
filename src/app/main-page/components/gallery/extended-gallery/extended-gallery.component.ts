import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Chip } from 'primeng/chip';
import { ChipItem } from 'src/app/shared/models/chip-item.model';
import { FactionItem } from 'src/app/shared/models/faction-item.model';
import { FilterItem } from 'src/app/shared/models/filter-item.model';
import { ImageItem } from 'src/app/shared/models/image-item.model';
import { CollectionItem } from 'src/app/shared/models/serie-item.model';
import { ChipComponent } from './chip/chip.component';

@Component({
  selector: 'app-extended-gallery',
  templateUrl: './extended-gallery.component.html',
  styleUrls: ['./extended-gallery.component.scss']
})
export class ExtendedGalleryComponent implements OnInit {

  @ViewChild('chipsListContainer') public chipsListContainer!: ChipComponent;

  public chips!: ChipItem[];
  public images!: ImageItem[];
  public collections!: CollectionItem[];

  constructor() { }

  ngOnInit(): void {
    this.initFilters();
    this.initImageItems();
    this.initChipItems();
  }

  private initImageItems(): void {


  }

  private initFilters(): void {
    this.collections = require('./filters/filters.json');
  }

  private initChipItems(): void {
    this.chips = [];
    this.collections.forEach((collectionItem: CollectionItem) => {

      collectionItem.factionItems.forEach((factionItem: FactionItem) => {
        const newFactionChip = new ChipItem();
        newFactionChip.id = factionItem.id;
        newFactionChip.label = factionItem.name;
        newFactionChip.active = factionItem.selected;
        this.chips.push(newFactionChip);
        factionItem.filterItems.forEach((filterItem: FilterItem) => {
          const newFilterChip = new ChipItem();
          newFilterChip.id = filterItem.id;
          newFilterChip.label = filterItem.name;
          newFilterChip.active = filterItem.selected;
          this.chips.push(newFilterChip);
        });
      });
    });

    // this.collections.mainFilterItem.forEach((mainFilterItem: MainFilterItem) => {
    //   if (mainFilterItem.subFilterItems?.length > 0) {
    //     this.generateChipsFromSubFilterItems(mainFilterItem.subFilterItems);
    //   }
    // });
  }

  private generateChipsFromSubFilterItems(subFilterItems: any[]): void {
    // subFilterItems.forEach((subFilterItem: SubFilterItem) => {
    //   const chip = new ChipItem();
    //   chip.active = subFilterItem.selected;
    //   chip.label = subFilterItem.label;
    //   chip.id = subFilterItem.id;
    //   this.chips.push(chip);
    //   if (subFilterItem.subFilterItems?.length > 0) {
    //     this.generateChipsFromSubFilterItems(subFilterItem.subFilterItems);
    //   }
    // });
  }

  public onClickFilterItem(item: FactionItem | FilterItem): void {
    item.selected = !item.selected;
    const foundChip = this.chips.find((chip: ChipItem) => chip.id === item.id);
    if (foundChip) {
      foundChip.active = item.selected;
    }
  }

  public onClickHideChip(chip: ChipItem): void {
    chip.active = false;
    this.collections.forEach((collectionItem: CollectionItem) => {

      collectionItem.factionItems.forEach((factionItem: FactionItem) => {
        if (chip.id === factionItem.id) {
          factionItem.selected = false;
        }
        factionItem.filterItems.forEach((filterItem: FilterItem) => {
          if (chip.id === filterItem.id) {
            filterItem.selected = false;
          }
        });
      });
    });
  }

  private searchBySubFilterItems(subFilterItems: any[], chip: ChipItem): void {
    // subFilterItems.forEach((subFilterItem) => {
    //   if (subFilterItem.id === chip.id) {
    //     subFilterItem.selected = false;
    //   }
    //   if (subFilterItem.subFilterItems?.length > 0) {
    //     this.searchBySubFilterItems(subFilterItem.subFilterItems, chip);
    //   }
    // });
  }

  public removeChip(chip: ChipItem): void {
    // console.log(chip)
    // console.log(this.chips)
  }

}
