import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @ViewChild('firstblock') public firstBlock!: ElementRef;
  @ViewChild('secondblock') public secondBlock!: ElementRef;

  private headerSubscription!: Subscription;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.headerSubscription = this.appService.headerService.navigationObservable.subscribe( async (route: string) => {
      console.log('SCROLL');
      this.navigateTo(route);
    });
  }

  public navigateTo(route: string): void {
    // this.router.navigate(['main']).then(() => {
    //   document.getElementById(route)?.scrollIntoView({behavior: 'smooth'});
    // });
  }

  ngOnDestroy(): void {
    // this.headerSubscription.unsubscribe();
  }

}
