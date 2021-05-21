import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SectionName } from '../../enums/section-name.enum';
import { HeaderItem } from '../../models/header-item.model';
import { AppService } from '../../services/app.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('mainSidebar') public mainSidebar!: SidebarComponent;

  @Output() toggleSidebarEmitter: EventEmitter<void> = new EventEmitter();

  public allHeaderItems: HeaderItem[] = [];
  public leftSideHeaderItems: HeaderItem[] = [];
  public rightSideHeaderItems: HeaderItem[] = [];

  public languageSelected = 'es';

  public windowScrolled!: boolean;

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      }
      else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }

  constructor(private appService: AppService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.changeLanguage(this.appService.translocoService.getActiveLang());
    this.initHeaderConfiguration();
  }

  public onClickHeaderOption(name: string): void {
      this.navigateTo(name);
  }

  public changeLanguage(lang: string): void {
    this.appService.translocoService.setActiveLang(lang);
    this.languageSelected = lang;
  }

  private initHeaderConfiguration(): void {

    this.leftSideHeaderItems = [
      { id: SectionName.HOME, active: false, icon: 'home' },
      { id: SectionName.ABOUT, active: false, icon: 'contact_support' },
      { id: SectionName.PRINT_SERVICES, active: false, icon: '3d_rotation' }
    ];
    
    this.rightSideHeaderItems = [
      { id: SectionName.PAINT_SERVICES, active: false, icon: 'palette' },
      { id: SectionName.GALLERY, active: false, icon: 'image' },
      { id: SectionName.CONTACT, active: false, icon: 'alternate_email' }
    ];

    this.allHeaderItems = this.leftSideHeaderItems.concat(this.rightSideHeaderItems);

  }

  public async navigateTo(name: string): Promise<void> {
    this.appService.headerService.navigateTo(name);
  }

  public toggleSidebar(): void {
    this.mainSidebar.toggleSidebar();
  }

  public scrollToTop(): void {
    (function smoothscroll() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }
    })();
  }

}
