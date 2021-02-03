import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @ViewChild('mainSidebar') public mainSidebar!: SidebarComponent;

  constructor() { }

  public toggleSidebar(): void {
    this.mainSidebar.toggleSidebar();
  }

}
