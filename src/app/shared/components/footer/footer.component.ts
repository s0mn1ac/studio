import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { SectionName } from '../../enums/section-name.enum';
import { HeaderItem } from '../../models/header-item.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public faInstagram = faInstagram;
  public faFacebook = faFacebook;
  public faYoutube = faYoutube;

  public launchYear = new Date('2021-01-01').getFullYear();
  public thisYear = new Date().getFullYear();
  public yearRange!: string;

  public footerItems!: HeaderItem[];

  public images: any[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.setCopyYear();
    this.initFooterItems();
    this.getImages();
  }

  public onClickFooterOption(name: string): void {
    this.navigateTo(name);
  }

  public async navigateTo(name: string): Promise<void> {
    this.appService.headerService.navigateTo(name);
  }

  private setCopyYear(): void {
    this.yearRange = this.launchYear === this.thisYear ? this.launchYear.toString() : `${this.launchYear} - ${this.thisYear}`;
  }

  private initFooterItems(): void {

    this.footerItems = [
      { id: SectionName.ABOUT, active: false },
      { id: SectionName.PRINT_SERVICES, active: false },
      { id: SectionName.PAINT_SERVICES, active: false },
      { id: SectionName.REFERENCES, active: false },
      { id: SectionName.GALLERY, active: false },
      { id: SectionName.CONTACT, active: false }
    ];

  }

  private getImages(): void {

    for (let i = 0; i < 6; i++) {
      this.images.push({
        title: `image${i}`,
        url: `url(../../../../assets/images/miniatures/full-size/image-${i}.jpeg)`,
      });
    }

  }

}
