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
import * as jsonData from '../../../../../assets/data/filters.json';
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
  public selectedImagesIds!: number[];

  private properties!: any;
  private propertiesAll!: any;

  constructor(public appService: AppService, private gallery: Gallery) { }

  ngOnInit(): void {
    this.initFilters();
    this.initImageItems();
    this.initChipItems();
  }

  private initImageItems(): void {
    const imageItem = new ImageItem();
    const fullSize = `../../../../../assets/images/miniatures/full-size/image-0.jpeg`;
    const thumbnail = `../../../../../assets/images/miniatures/thumbnail/image-0.jpeg`;
    imageItem.id = 0;
    imageItem.fullSize = fullSize;
    imageItem.thumbnail = thumbnail;
    imageItem.tags = [2, 3, 4];

    const imageItem2 = new ImageItem();
    const fullSize2 = `../../../../../assets/images/miniatures/full-size/image-1.jpeg`;
    const thumbnail2 = `../../../../../assets/images/miniatures/thumbnail/image-1.jpeg`;
    imageItem2.id = 1;
    imageItem2.fullSize = fullSize2;
    imageItem2.thumbnail = thumbnail2;
    imageItem2.tags = [4];

    const imageItem3 = new ImageItem();
    const fullSize3 = `../../../../../assets/images/miniatures/full-size/image-2.jpeg`;
    const thumbnail3 = `../../../../../assets/images/miniatures/thumbnail/image-2.jpeg`;
    imageItem3.id = 2;
    imageItem3.fullSize = fullSize3;
    imageItem3.thumbnail = thumbnail3;
    imageItem3.tags = [6];

    const imageItem4 = new ImageItem();
    const fullSize4 = `../../../../../assets/images/miniatures/full-size/image-3.jpeg`;
    const thumbnail4 = `../../../../../assets/images/miniatures/thumbnail/image-3.jpeg`;
    imageItem4.id = 3;
    imageItem4.fullSize = fullSize4;
    imageItem4.thumbnail = thumbnail4;
    imageItem4.tags = [8];

    const imageItem5 = new ImageItem();
    const fullSize5 = `../../../../../assets/images/miniatures/full-size/image-4.jpeg`;
    const thumbnail5 = `../../../../../assets/images/miniatures/thumbnail/image-4.jpeg`;
    imageItem5.id = 4;
    imageItem5.fullSize = fullSize5;
    imageItem5.thumbnail = thumbnail5;
    imageItem5.tags = [2, 3];

    this.selectedImagesIds = [];
    this.imagesAll = [];
    this.images = [];

    this.imagesAll.push(imageItem, imageItem2, imageItem3, imageItem4, imageItem5);
    this.images.push(imageItem, imageItem2, imageItem3, imageItem4, imageItem5);

    this.properties = { images: [], index: 0 };
    this.properties.images.push(
      {path: imageItem.fullSize},
      {path: imageItem2.fullSize},
      {path: imageItem3.fullSize},
      {path: imageItem4.fullSize},
      {path: imageItem5.fullSize});

    this.propertiesAll = { images: [], index: 0 };
    this.propertiesAll.images.push(
      {path: imageItem.fullSize},
      {path: imageItem2.fullSize},
      {path: imageItem3.fullSize},
      {path: imageItem4.fullSize},
      {path: imageItem5.fullSize});
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
    this.collections = (jsonData as any).default;
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
