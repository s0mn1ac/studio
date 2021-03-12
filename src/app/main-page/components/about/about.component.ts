import { Component, OnInit } from '@angular/core';
import { ImageItem } from 'src/app/shared/models/image-item.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public images!: ImageItem[];

  constructor() { }

  ngOnInit(): void {
    this.initImages();
  }

  private initImages(): void {

    this.images = [
      {
        // url: 'url(../../../../../assets/images/miniatures/full-size/image-1.jpeg)',
        url: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        title: 'professional',
        description: 'professional',
        id: 0,
        active: true,
        tags: []
      },
      {
        // url: 'url(../../../../../assets/images/miniatures/full-size/image-2.jpeg)',
        url: 'url(https://cdn.lifehack.org/wp-content/uploads/2014/07/how-to-be-enthusiastic.jpeg)',
        title: 'enthusiastic',
        description: 'professional',
        id: 1,
        active: true,
        tags: []
      },
      {
        // url: 'url(../../../../../assets/images/miniatures/full-size/image-3.jpeg)',
        url: 'url(https://www.biospace.com/getasset/a7199edb-286e-422f-9738-54a526238dca/)',
        title: 'passionate',
        description: 'professional',
        id: 2,
        active: true,
        tags: []
      }
    ];
  }

}
