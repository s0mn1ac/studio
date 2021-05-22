import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() scrollDownEmitter: EventEmitter<void> = new EventEmitter();

  public isVideoPaused!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.forcePlay();
  }

  public playPause(): void {

    const video = document.getElementById('presentationVideo') as HTMLVideoElement;
    if (video.paused) {
      video.play();
      this.isVideoPaused = false;
    } else {
      video.pause();
      this.isVideoPaused = true;
    }
  }

  public forcePlay() {

    setTimeout(() => {
      const video = document.getElementById('presentationVideo') as HTMLVideoElement;
      if (video.paused) {
        video.play();
        if (video.paused) {
          this.isVideoPaused = false;
        } else {
          this.isVideoPaused = true;
        }
      }
    }, 2000);
  }

  public scrollDown(): void {
    this.scrollDownEmitter.emit();
  }

}
