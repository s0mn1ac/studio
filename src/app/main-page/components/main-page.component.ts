import { Component, OnInit, Inject, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  @ViewChild('firstblock') public firstBlock!: ElementRef;
  @ViewChild('secondblock') public secondBlock!: ElementRef;

  private headerSubscription!: Subscription;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    AOS.init();
    this.initSubscriptions();
  }

  private initSubscriptions(): void {
    this.headerSubscription = this.appService.headerService.navigationObservable.subscribe( async (route: string) => {
      this.navigateTo(route);
    });
  }

  private navigateTo(route: string): void {
    this.router.navigate([route]).then(() => {
      document.getElementById(route)?.scrollIntoView({behavior: 'smooth'});
    });
  }

  ngOnDestroy(): void {
    this.headerSubscription.unsubscribe();
  }

}
