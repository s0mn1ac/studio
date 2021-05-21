import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import * as AOS from 'aos';
import { SectionName } from 'src/app/shared/enums/section-name.enum';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  @ViewChild('firstblock') public firstBlock!: ElementRef;
  @ViewChild('secondblock') public secondBlock!: ElementRef;

  public shouldRun = false;

  private headerSubscription!: Subscription;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    AOS.init({ once: true, duration: 1000 });
    this.initSubscriptions();
  }

  public scrollDown(): void {
    document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
  }

  private initSubscriptions(): void {
    this.headerSubscription = this.appService.headerService.navigationObservable.subscribe( async (route: string) => {
      this.navigateTo(route);
    });
  }

  private navigateTo(route: string): void {
    this.router.navigate(['']).then(() => {
      document.getElementById(route)?.scrollIntoView({behavior: 'smooth'});
    });
  }

  test(): void {
    this.shouldRun = !this.shouldRun;
  }

  ngOnDestroy(): void {
    this.headerSubscription.unsubscribe();
  }

}
