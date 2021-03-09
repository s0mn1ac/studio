import { Component, OnInit } from '@angular/core';
import { faCube, faLayerGroup, faUserEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-print-services',
  templateUrl: './print-services.component.html',
  styleUrls: ['./print-services.component.scss']
})
export class PrintServicesComponent implements OnInit {

  public faCube = faCube;
  public faUserEdit = faUserEdit;
  public faLayerGroup = faLayerGroup;

  constructor() { }

  ngOnInit(): void { }

}
