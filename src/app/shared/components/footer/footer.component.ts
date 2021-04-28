import { Component, OnInit, ViewChild } from '@angular/core';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Gallery } from 'angular-gallery';
import { SectionName } from '../../enums/section-name.enum';
import { HeaderItem } from '../../models/header-item.model';
import { ImageItem } from '../../models/image-item.model';
import { AppService } from '../../services/app.service';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild('cookiePolicyDialog') public cookiePolicyDialog!: CookiePolicyComponent;
  @ViewChild('termsAndConditionsDialog') public termsAndConditionsDialog!: TermsAndConditionsComponent;

  public faInstagram = faInstagram;
  public faFacebook = faFacebook;
  public faYoutube = faYoutube;

  public launchYear = new Date('2021-01-01').getFullYear();
  public thisYear = new Date().getFullYear();
  public yearRange!: string;

  public footerItems!: HeaderItem[];

  public imagesFirstRow: ImageItem[] = [];
  public imagesSecondRow: ImageItem[] = [];

  public images!: ImageItem[];

  private properties!: any;

  constructor(private appService: AppService, private gallery: Gallery) { }

  ngOnInit(): void {
    this.setCopyYear();
    this.initFooterItems();
    this.initImageItems();
  }

  public onClickFooterOption(name: string): void {
    this.navigateTo(name);
  }

  public async navigateTo(name: string): Promise<void> {
    this.appService.headerService.navigateTo(name);
  }

  public showCookiePolicyDialog(): void {
    this.cookiePolicyDialog.showDialog();
  }

  public showTermsAndConditionsDialog(): void {
    this.termsAndConditionsDialog.showDialog();
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

}
