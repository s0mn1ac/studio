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
        fullSize: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        thumbnail: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        title: 'professional',
        description: 'professional',
        id: 0,
        active: true,
        tags: []
      },
      {
        // url: 'url(../../../../../assets/images/miniatures/full-size/image-2.jpeg)',
        fullSize: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        thumbnail: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        title: 'enthusiastic',
        description: 'professional',
        id: 1,
        active: true,
        tags: []
      },
      {
        // url: 'url(../../../../../assets/images/miniatures/full-size/image-3.jpeg)',
        fullSize: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        thumbnail: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        title: 'passionate',
        description: 'professional',
        id: 2,
        active: true,
        tags: []
      }
    ];
  }

}
