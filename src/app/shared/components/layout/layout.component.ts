import { Component, OnInit, ViewChild } from '@angular/core';
import { SectionName } from '../../enums/section-name.enum';
import { HeaderItem } from '../../models/header-item.model';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
