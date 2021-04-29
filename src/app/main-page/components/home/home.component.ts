import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('presentationVideo') presentationVideo!: HTMLMediaElement;

  @Output() scrollDownEmitter: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    // const video = document.getElementById('presentationVideo');
    
    // if (!this.presentationVideo.played) {
    //   this.presentationVideo.play();
    //   console.log('En pausa')
    // } else {
    //   console.log('En play')
    // }
  }

  public scrollDown(): void {
    this.scrollDownEmitter.emit();
  }

}
