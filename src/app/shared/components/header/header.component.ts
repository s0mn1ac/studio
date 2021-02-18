import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsPageComponent } from 'src/app/main-page/components/projects/projects-page.component';
import { SectionName } from '../../enums/section-name.enum';
import { ThemeType } from '../../enums/theme-type.enum';
import { HeaderItem } from '../../models/header-item.model';
import { AppService } from '../../services/app.service';
import { ThemingService } from '../../services/theming.service';
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

  public isDarkModeEnabled = false;
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

  constructor(private appService: AppService, private themingService: ThemingService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.changeLanguage(this.appService.translocoService.getActiveLang());
    this.initHeaderConfiguration();
    this.getInitialTheme();
  }

  private getInitialTheme(): void {
    const theme = this.themingService.getTheme();
    this.isDarkModeEnabled = theme === ThemeType.DARK ? true : false;
  }

  public onClickHeaderOption(name: string): void {
    if (name === SectionName.PROJECTS) {
      this.openProjectsDialog();
    } else {
      this.navigateTo(name);
    }
  }

  public changeLanguage(lang: string): void {
    this.appService.translocoService.setActiveLang(lang);
    this.languageSelected = lang;
  }

  private initHeaderConfiguration(): void {

    this.leftSideHeaderItems = [
      { id: SectionName.ABOUT, active: false },
      { id: SectionName.SERVICES, active: true }
    ];

    this.rightSideHeaderItems = [
      { id: SectionName.GALLERY, active: false },
      { id: SectionName.CONTACT, active: false }
    ];

    this.allHeaderItems = this.leftSideHeaderItems.concat(this.rightSideHeaderItems);

  }

  public changeTheme(checked: boolean): void {
    this.isDarkModeEnabled = checked;
    if (this.isDarkModeEnabled) {
      this.themingService.setTheme(ThemeType.DARK);
    } else {
      this.themingService.setTheme(ThemeType.LIGHT);
    }
  }

  public async navigateTo(name: string): Promise<void> {
    this.appService.headerService.navigateTo(name);
  }

  public openProjectsDialog(): void {
    const dialogRef = this.dialog.open(ProjectsPageComponent);

    dialogRef.afterClosed().subscribe(result => {
      // TODO: Acción al cerrar el modal
    });
  }

  public toggleSidebar(): void {
    this.mainSidebar.toggleSidebar();
  }

}
