import { Component, OnInit } from '@angular/core';
import { faMagnet, faMountain, faPalette, faTools } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paint-services',
  templateUrl: './paint-services.component.html',
  styleUrls: ['./paint-services.component.scss']
})
export class PaintServicesComponent implements OnInit {

  public faMagnet = faMagnet;
  public faTools = faTools;
  public faMountain = faMountain;
  public faPalette = faPalette;

  constructor() { }

  ngOnInit(): void { }

}
