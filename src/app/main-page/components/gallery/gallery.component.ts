import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images: any[] = [];
  public responsiveOptions!: any[];

  constructor() { }

  ngOnInit(): void {
    this.getImages();
  }

  private getImages(): void {

    for (let i = 0; i < 20; i++) {
      this.images.push({
        previewImageSrc: `../../../../assets/images/miniatures/image-${i}.jpg`,
        thumbnailImageSrc: `../../../../assets/images/miniatures/image-${i}.jpg`,
      });
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

}
