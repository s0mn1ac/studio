import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Chip } from 'primeng/chip';
import { ChipItem } from 'src/app/shared/models/chip-item.model';
import { FactionItem } from 'src/app/shared/models/faction-item.model';
import { FilterItem } from 'src/app/shared/models/filter-item.model';
import { ImageItem } from 'src/app/shared/models/image-item.model';
import { CollectionItem } from 'src/app/shared/models/serie-item.model';
import { AppService } from 'src/app/shared/services/app.service';
import { ChipComponent } from './chip/chip.component';
import * as jsonFilters from '../../../../../assets/data/filters.json';
import * as jsonImages from '../../../../../assets/data/images.json';
import { Gallery } from 'angular-gallery';

@Component({
  selector: 'app-extended-gallery',
  templateUrl: './extended-gallery.component.html',
  styleUrls: ['./extended-gallery.component.scss']
})
export class ExtendedGalleryComponent implements OnInit {

  @ViewChild('chipsListContainer') public chipsListContainer!: ChipComponent;

  public chips!: ChipItem[];
  public images!: ImageItem[];
  public imagesAll!: ImageItem[];
  public collections!: CollectionItem[];

  private properties!: any;
  private propertiesAll!: any;

  constructor(public appService: AppService, private gallery: Gallery) { }

  ngOnInit(): void {
    this.initFilters();
    this.initImageItems();
    this.initChipItems();
  }

  private initImageItems(): void {
    this.propertiesAll = { images: [], index: 0 };
    this.imagesAll = (jsonImages as any).default;
    this.imagesAll.forEach((imageItem: ImageItem) => this.propertiesAll.images.push({ path: imageItem.fullSize }));
    this.images = this.imagesAll;
    this.properties = this.propertiesAll;
  }

  private reloadGallery(): void {
    this.properties = undefined;
    this.properties = { images: [], index: 0 };
    this.images = [];

    let isAnyFilterSelected = false;

    this.imagesAll.forEach((imageToFilter: ImageItem) => {
      this.chips.forEach((chipItem: ChipItem) => {
        if (chipItem.active) {
          if (imageToFilter.tags.includes(chipItem.id)) {
            const imageAlreadyListed = this.images.find((imageItem: ImageItem) => imageItem.id === imageToFilter.id );
            if (!imageAlreadyListed) {
              isAnyFilterSelected = true;
              this.images.push(imageToFilter);
              this.properties.images.push({ path: imageToFilter.fullSize });
            }
          }
        }
      });
    });

    if (this.images?.length === 0 && !isAnyFilterSelected) {
      this.images = this.imagesAll;
      this.properties = this.propertiesAll;
    }
  }

  public showGallery(route: string): void {
    const index =  this.properties.images.findIndex((image: any) => image.path === route);
    this.properties.index = index;
    this.gallery.load(this.properties);
  }

  private initFilters(): void {
    this.collections = (jsonFilters as any).default;
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
  }

  public onClickFilterItem(item: FactionItem | FilterItem): void {
    item.selected = !item.selected;
    const foundChip = this.chips.find((chip: ChipItem) => chip.id === item.id);
    if (foundChip) {
      foundChip.active = item.selected;
    }
    this.reloadGallery();
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
    this.reloadGallery();
  }

}
