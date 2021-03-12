import { Component, Input, OnInit } from '@angular/core';
import { ImageItem } from 'src/app/shared/models/image-item.model';

@Component({
  selector: 'app-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrls: ['./presentation-card.component.scss']
})
export class PresentationCardComponent implements OnInit {

  @Input() image!: ImageItem;

  constructor() { }

  ngOnInit(): void { }

}
