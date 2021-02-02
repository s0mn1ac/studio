import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsPageComponent } from 'src/app/main-page/components/projects/projects-page.component';
import { SectionName } from '../../enums/section-name.enum';
import { ThemeType } from '../../enums/theme-type.enum';
import { HeaderItem } from '../../models/header-item.model';
import { AppService } from '../../services/app.service';
import { ThemingService } from '../../services/theming.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerConfiguration: HeaderItem[] = [];
  public isDarkModeEnabled = false;
  public languageSelected = 'es';

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
    this.headerConfiguration.forEach((header: HeaderItem) => {
      if (header.id === name) {
        header.active = true;
      } else {
        header.active = false;
      }
    });
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
    this.headerConfiguration = [
      { id: SectionName.HOME, active: true },
      { id: SectionName.ABOUT, active: false },
      { id: SectionName.GALLERY, active: false },
      { id: SectionName.CONTACT, active: false },
      { id: SectionName.PROJECTS, active: false }
    ];
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

}
