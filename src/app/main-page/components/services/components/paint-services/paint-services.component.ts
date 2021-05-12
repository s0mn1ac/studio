import { Component, OnInit } from '@angular/core';
import { faMagnet, faMountain, faPalette, faTools } from '@fortawesome/free-solid-svg-icons';
import { ImageItem } from 'src/app/shared/models/image-item.model';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-paint-services',
  templateUrl: './paint-services.component.html',
  styleUrls: ['./paint-services.component.scss']
})
export class PaintServicesComponent implements OnInit {

  public images!: ImageItem[];

  public faMagnet = faMagnet;
  public faTools = faTools;
  public faMountain = faMountain;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.initImages();
  }

  private initImages(): void {

    this.images = [
      {
        fullSize: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        thumbnail: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        title: this.appService.translocoService.translate('mainPage.services.paintServices.cards.mountTitle'),
        description: this.appService.translocoService.translate('mainPage.services.paintServices.cards.mountContent'),
        id: 0,
        active: true,
        tags: [],
        icon: this.faMagnet
      },
      {
        fullSize: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        thumbnail: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        title: this.appService.translocoService.translate('mainPage.services.paintServices.cards.magnetTitle'),
        description: this.appService.translocoService.translate('mainPage.services.paintServices.cards.magnetContent'),
        id: 1,
        active: true,
        tags: [],
        icon: this.faTools
      },
      {
        fullSize: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        thumbnail: 'url(https://sapeoplewppro.blob.core.windows.net/media/2020/06/better-professional-2-768x924.jpg)',
        title: this.appService.translocoService.translate('mainPage.services.paintServices.cards.decorationTitle'),
        description: this.appService.translocoService.translate('mainPage.services.paintServices.cards.decorationContent'),
        id: 2,
        active: true,
        tags: [],
        icon: this.faMountain
      }
    ];
  }

}
