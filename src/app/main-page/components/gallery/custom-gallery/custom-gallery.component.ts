import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GalleryImageItem } from 'src/app/shared/models/gallery-image-item.modal';
import * as jsonFilters from '../../../../../assets/data/menu-item-filters.json';
import * as jsonImages from '../../../../../assets/data/images.json';
import { AppService } from 'src/app/shared/services/app.service';
import { ImageItem } from 'src/app/shared/models/image-item.model';
import { Galleria } from 'primeng/galleria';

@Component({
  selector: 'app-custom-gallery',
  templateUrl: './custom-gallery.component.html',
  styleUrls: ['./custom-gallery.component.scss']
})
export class CustomGalleryComponent implements OnInit {

  @ViewChild('mainGallery') mainGallery!: Galleria;

  public images: GalleryImageItem[] = [];

  public responsiveOptions: any[] = [];

  public menuItems: MenuItem[] = [];

  public allImageItems!: ImageItem[];

  public selectedFilter = 0;

  public isGalleryVisible = false;

  get activeIndex(): number {
    return this._activeIndex;
}

  set activeIndex(newValue) {
      if (this.images && 0 <= newValue && newValue <= (this.images.length - 1)) {
        this._activeIndex = newValue;
      } else if (this._activeIndex === 0) {
        this._activeIndex = this.images.length - 1;
      } else {
        this._activeIndex = 0;
      }
  }

  _activeIndex: number = 0;

  constructor(private appService: AppService) {

    this.responsiveOptions = [
      { breakpoint: '1024px', numVisible: 5 },
      { breakpoint: '768px', numVisible: 3 },
      { breakpoint: '560px', numVisible: 1 }
    ];

  }

  ngOnInit(): void {
    this.initImageItems();
    this.initGallery();
    this.initMenuItems();
  }

  private initImageItems(): void {
    this.allImageItems = (jsonImages as any).default;
    console.log(this.allImageItems)
  }

  private initGallery(): void {

    this.images = [];

    this.allImageItems.forEach((imageItem: ImageItem) => {
      if (imageItem.tags?.includes(this.selectedFilter)) {
        this.images.push({
          previewImageSrc: imageItem.fullSize,
          thumbnailImageSrc: imageItem.thumbnail,
          alt: imageItem.description,
          title: imageItem.title
        });
      }
    });

    setTimeout(() => this.isGalleryVisible = true, 100);
  }

  private initMenuItems(): void {
    this.menuItems = this.buildMenuItems((jsonFilters as any).default);
  }

  private buildMenuItems(rawMenuItems: any): MenuItem[] {

    const menuItems: MenuItem[] = [];

    rawMenuItems.forEach((rawMenuItem: any) => {

      const menuItem: MenuItem = {
        disabled: false,
        id: rawMenuItem.id,
        command: () => this.test(rawMenuItem.id),
        label: this.appService.translocoService.translate(`filters.${rawMenuItem.label}`),
        items: rawMenuItem.items ? this.buildMenuItems(rawMenuItem.items) : undefined
      };

      menuItems.push(menuItem);
      
    });

    return menuItems;

  }

  private test(id: number): void {
    this.selectedFilter = id;
    this.initGallery();
    this.activeIndex = 1;
  }

  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }

}
