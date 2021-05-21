import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('presentationVideo') presentationVideo!: HTMLMediaElement;

  @Output() scrollDownEmitter: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  public scrollDown(): void {
    this.scrollDownEmitter.emit();
  }

}
