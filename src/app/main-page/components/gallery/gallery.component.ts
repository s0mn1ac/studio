import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public imagesFirstRow: any[] = [];
  public imagesSecondRow: any[] = [];
  public responsiveOptions!: any[];

  constructor() { }

  ngOnInit(): void {
    this.getImages();
  }

  private getImages(): void {

    for (let i = 0; i < 3; i++) {
      this.imagesFirstRow.push({
        title: `image${i}`,
        url: `url(../../../../assets/images/miniatures/full-size/image-${i}.jpeg)`,
      });
    }

    for (let i = 3; i < 6; i++) {
      this.imagesSecondRow.push({
        title: `image${i}`,
        url: `url(../../../../assets/images/miniatures/full-size/image-${i}.jpeg)`,
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
