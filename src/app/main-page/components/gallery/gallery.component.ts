import { Component, OnInit, ViewChild } from '@angular/core';
import { Gallery } from 'angular-gallery';
import { ImageItem } from 'src/app/shared/models/image-item.model';
import { AppService } from 'src/app/shared/services/app.service';
import { FullScreenDialogComponent } from './full-screen-dialog/full-screen-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public imagesFirstRow: ImageItem[] = [];
  public imagesSecondRow: ImageItem[] = [];
  // public responsiveOptions!: any[];

  public isMainGalleryVisible = false;
  public nextGalleryTitle!: string;

  public images!: ImageItem[];

  private properties!: any;

  constructor(private appService: AppService, private gallery: Gallery) { }

  ngOnInit(): void {
    this.nextGalleryTitle = this.appService.translocoService.translate('mainPage.gallery.more');
    this.getImages();
    this.initImageItems();
  }

  private getImages(): void {

    


    // this.responsiveOptions = [
    //   {
    //       breakpoint: '1024px',
    //       numVisible: 5
    //   },
    //   {
    //       breakpoint: '768px',
    //       numVisible: 3
    //   },
    //   {
    //       breakpoint: '560px',
    //       numVisible: 1
    //   }
    // ];
  }

  private initImageItems(): void {

    this.properties = { images: [], index: 0 };

    this.imagesFirstRow = [
      { id: 0, active: true, title: 'Title', description: 'Description', thumbnail: '../../../../assets/images/gallery/image-0.jpeg', fullSize: '../../../../assets/images/gallery/image-0.jpeg' },
      { id: 1, active: true, title: 'Title', description: 'Description', thumbnail: '../../../../assets/images/gallery/image-1.jpeg', fullSize: '../../../../assets/images/gallery/image-1.jpeg' },
      { id: 2, active: true, title: 'Title', description: 'Description', thumbnail: '../../../../assets/images/gallery/image-2.jpeg', fullSize: '../../../../assets/images/gallery/image-2.jpeg' }
    ];

    this.imagesSecondRow = [
      { id: 3, active: true, title: 'Title', description: 'Description', thumbnail: '../../../../assets/images/gallery/image-3.jpeg', fullSize: '../../../../assets/images/gallery/image-3.jpeg' },
      { id: 4, active: true, title: 'Title', description: 'Description', thumbnail: '../../../../assets/images/gallery/image-4.jpeg', fullSize: '../../../../assets/images/gallery/image-4.jpeg' },
      { id: 5, active: true, title: 'Title', description: 'Description', thumbnail: '../../../../assets/images/gallery/image-5.jpeg', fullSize: '../../../../assets/images/gallery/image-5.jpeg' }
    ];
    
    this.images = this.imagesFirstRow.concat(this.imagesSecondRow);

    this.images.forEach((imageItem: ImageItem) => this.properties.images.push({ path: imageItem.fullSize }));
  }

  public showGallery(route: string): void {
    const index =  this.properties.images.findIndex((image: any) => image.path === route);
    this.properties.index = index;
    this.gallery.load(this.properties);
  }

  public swapGallery(): void {
    this.isMainGalleryVisible = !this.isMainGalleryVisible;
    this.nextGalleryTitle = this.isMainGalleryVisible ?
      this.appService.translocoService.translate('mainPage.gallery.more') : this.appService.translocoService.translate('mainPage.gallery.less');
  }

}
