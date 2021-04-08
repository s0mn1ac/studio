import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageItem } from 'src/app/shared/models/image-item.model';
import { AppService } from 'src/app/shared/services/app.service';
import { FullScreenDialogComponent } from './full-screen-dialog/full-screen-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @ViewChild('fullScreenDialog') public fullScreenDialog!: FullScreenDialogComponent;

  public imagesFirstRow: ImageItem[] = [];
  public imagesSecondRow: ImageItem[] = [];
  public responsiveOptions!: any[];

  public imageSelected!: ImageItem;
  public isDialogVisible = false;

  public isMainGalleryVisible = true;
  public nextGalleryTitle!: string;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.nextGalleryTitle = this.appService.translocoService.translate('mainPage.gallery.more');
    this.getImages();
  }

  private getImages(): void {

    for (let i = 0; i < 3; i++) {
      const imageItem = new ImageItem();
      imageItem.title =  `image${i}`;
      imageItem.fullSize = `../../../../assets/images/miniatures/full-size/image-${i}.jpeg`;
      this.imagesFirstRow.push(imageItem);
    }

    for (let i = 3; i < 6; i++) {
      const imageItem = new ImageItem();
      imageItem.title =  `image${i}`;
      imageItem.fullSize = `../../../../assets/images/miniatures/full-size/image-${i}.jpeg`;
      this.imagesSecondRow.push(imageItem);
    }

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
    ];
  }

  public selectImage(image: ImageItem): void {
    this.imageSelected = image;
    this.fullScreenDialog.showDialog();
  }

  public swapGallery(): void {
    this.isMainGalleryVisible = !this.isMainGalleryVisible;
    this.nextGalleryTitle = this.isMainGalleryVisible ?
      this.appService.translocoService.translate('mainPage.gallery.more') : this.appService.translocoService.translate('mainPage.gallery.less');
  }

}
