import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Chip } from 'primeng/chip';
import { ChipItem } from 'src/app/shared/models/chip-item.model';
import { FilterItem, MainFilterItem, SubFilterItem } from 'src/app/shared/models/filter-item.model';
import { ImageItem } from 'src/app/shared/models/image-item.model';
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
  public filters!: FilterItem;

  constructor() { }

  ngOnInit(): void {
    this.initFilters();
    this.initImageItems();
    this.initChipItems();
  }

  private initImageItems(): void {


    
  }

  private initFilters(): void {
    this.filters = require('./filters/filters.json');
  }

  private initChipItems(): void {
    this.chips = [];
    this.filters.mainFilterItem.forEach((mainFilterItem: MainFilterItem) => {
      if (mainFilterItem.subFilterItems?.length > 0) {
        this.generateChipsFromSubFilterItems(mainFilterItem.subFilterItems);
      }
    });
  }

  private generateChipsFromSubFilterItems(subFilterItems: SubFilterItem[]): void {
    subFilterItems.forEach((subFilterItem: SubFilterItem) => {
      const chip = new ChipItem();
      chip.active = subFilterItem.selected;
      chip.label = subFilterItem.label;
      chip.id = subFilterItem.id;
      this.chips.push(chip);
      if (subFilterItem.subFilterItems?.length > 0) {
        this.generateChipsFromSubFilterItems(subFilterItem.subFilterItems);
      }
    });
  }

  public onClickFilterItem(subFilterItem: SubFilterItem): void {
    subFilterItem.selected = !subFilterItem.selected;
    const foundChip = this.chips.find((chip: ChipItem) => chip.id === subFilterItem.id);
    if (foundChip) {
      foundChip.active = subFilterItem.selected;
    }
  }

  public onClickHideChip(chip: ChipItem): void {
    chip.active = false;
    this.filters.mainFilterItem.forEach((mainFilterItem: MainFilterItem) => {
      this.searchBySubFilterItems(mainFilterItem.subFilterItems, chip);
    });
  }

  private searchBySubFilterItems(subFilterItems: SubFilterItem[], chip: ChipItem): void {
    subFilterItems.forEach((subFilterItem) => {
      if (subFilterItem.id === chip.id) {
        subFilterItem.selected = false;
      }
      if (subFilterItem.subFilterItems?.length > 0) {
        this.searchBySubFilterItems(subFilterItem.subFilterItems, chip);
      }
    });
  }

  public removeChip(chip: ChipItem): void {
    console.log(chip)
    console.log(this.chips)
  }

}
