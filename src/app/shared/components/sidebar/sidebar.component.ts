import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public isOpen = false;

  constructor() { }

  ngOnInit(): void { }

  public toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

}
