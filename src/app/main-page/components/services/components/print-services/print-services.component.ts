import { Component, OnInit } from '@angular/core';
import { faCube, faLayerGroup, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { ImageItem } from 'src/app/shared/models/image-item.model';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-print-services',
  templateUrl: './print-services.component.html',
  styleUrls: ['./print-services.component.scss']
})
export class PrintServicesComponent implements OnInit {

  public images!: ImageItem[];

  public faCube = faCube;
  public faUserEdit = faUserEdit;
  public faLayerGroup = faLayerGroup;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.initImages();
  }

  private initImages(): void {

    this.images = [
      {
        fullSize: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        thumbnail: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        title: this.appService.translocoService.translate('mainPage.services.printServices.cards.printTitle'),
        description: this.appService.translocoService.translate('mainPage.services.printServices.cards.printContent'),
        id: 0,
        active: true,
        tags: [],
        icon: this.faCube
      },
      {
        fullSize: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        thumbnail: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        title: this.appService.translocoService.translate('mainPage.services.printServices.cards.designTitle'),
        description: this.appService.translocoService.translate('mainPage.services.printServices.cards.designContent'),
        id: 1,
        active: true,
        tags: [],
        icon: this.faUserEdit
      },
      {
        fullSize: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        thumbnail: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        title: this.appService.translocoService.translate('mainPage.services.printServices.cards.yourselfTitle'),
        description: this.appService.translocoService.translate('mainPage.services.printServices.cards.yourselfContent'),
        id: 2,
        active: true,
        tags: [],
        icon: this.faLayerGroup
      }
    ];
  }

}
