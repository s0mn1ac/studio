import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { ImageItem } from 'src/app/shared/models/image-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() image!: ImageItem;

  public icon!: any;

  constructor() { }

  ngOnInit(): void {
    this.icon = this.image.icon;
  }

}
