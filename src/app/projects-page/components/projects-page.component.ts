import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryProperties } from 'angular-gallery';
import { AppService } from 'src/app/shared/services/app.service';
import { ImageItem } from '../models/image-item.model';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  public imageItems: ImageItem[] = [];
  private prop!: any;

  constructor(public appService: AppService, private gallery: Gallery) { }

  ngOnInit(): void {
    this.loadImageItems();
  }

  public showGallery(index: number, route: string): void {
    this.prop.index = index;
    this.gallery.load(this.prop);
}

  private loadImageItems(): void {
    console.log('LOAD');
    this.prop = { images: [], index: 0 };
    for (let index = 0; index < 20; index++) {
      const imageItem = new ImageItem();
      const route = `../../../assets/images/miniatures/image-${index}.jpg`;
      imageItem.id = index;
      imageItem.image = route;
      this.imageItems.push(imageItem);
      this.prop.images.push({path: route});
    }
  }

}
