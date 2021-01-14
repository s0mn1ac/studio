import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
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

  public moveToFirstBlock():void {
    this.firstBlock.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

  public moveToSecondBlock():void {
    this.secondBlock.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }


  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.headerSubscription = this.appService.headerService.navigationObservable.subscribe( async (route: string) => {
      this.navigateTo(route);
    });
  }

  public navigateTo(route: string): void {
    document.getElementById(route)?.scrollIntoView({behavior: 'smooth'});
  }

  ngOnDestroy(): void {
    this.headerSubscription.unsubscribe();
  }

}
