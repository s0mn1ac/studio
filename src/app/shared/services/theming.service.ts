import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeType } from '../enums/theme-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  public theme = new BehaviorSubject(ThemeType.LIGHT);

  constructor() {

    const darkModeOn = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = darkModeOn ? ThemeType.DARK : ThemeType.LIGHT;
    this.setTheme(theme);

    // window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
    //   const turnOn = e.matches;
    //   this.theme.next(turnOn ? ThemeType.DARK : ThemeType.LIGHT);
    //   this.ref.tick();
    // });
  }

  public setTheme(theme: ThemeType): void {
    this.theme.next(theme);
  }

  public getTheme(): ThemeType {
    return this.theme.getValue();
  }
}
