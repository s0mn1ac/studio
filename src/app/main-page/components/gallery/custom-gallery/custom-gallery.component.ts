import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GalleryImageItem } from 'src/app/shared/models/gallery-image-item.modal';
import * as jsonFilters from '../../../../../assets/data/menu-item-filters.json';
import * as jsonImages from '../../../../../assets/data/images.json';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-custom-gallery',
  templateUrl: './custom-gallery.component.html',
  styleUrls: ['./custom-gallery.component.scss']
})
export class CustomGalleryComponent implements OnInit {

  public images: GalleryImageItem[] = [];

  public responsiveOptions: any[] = [];

  public menuItems: MenuItem[] = [];

  constructor(private appService: AppService) {

    this.responsiveOptions = [
      { breakpoint: '1024px', numVisible: 5 },
      { breakpoint: '768px', numVisible: 3 },
      { breakpoint: '560px', numVisible: 1 }
    ];

  }

  ngOnInit(): void {
    this.initGalleryImageItems();
    this.initMenuItems();
  }

  private initGalleryImageItems(): void {

    this.images = [
      {
        previewImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria1.jpg',
        alt: 'Text',
        title: 'Text'
      },
      {
        previewImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria2.jpg',
        alt: 'Text',
        title: 'Text'
      },
      {
        previewImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria3.jpg',
        thumbnailImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria3.jpg',
        alt: 'Text',
        title: 'Text'
      },
      {
        previewImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria4.jpg',
        thumbnailImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria4.jpg',
        alt: 'Text',
        title: 'Text'
      },
      {
        previewImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria5.jpg',
        thumbnailImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria5.jpg',
        alt: 'Text',
        title: 'Text'
      },
      {
        previewImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria6.jpg',
        thumbnailImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria6.jpg',
        alt: 'Text',
        title: 'Text'
      },
      {
        previewImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria7.jpg',
        thumbnailImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria7.jpg',
        alt: 'Text',
        title: 'Text'
      },
      {
        previewImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria8.jpg',
        thumbnailImageSrc: 'https://www.primefaces.org/primeng/showcase/assets/showcase/images/galleria/galleria8.jpg',
        alt: 'Text',
        title: 'Text'
      }
    ]

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
    console.log('test', id)
  }

}
