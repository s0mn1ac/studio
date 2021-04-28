import { Component, OnInit } from '@angular/core';
import { CustomerItem } from 'src/app/shared/models/customer-item.model';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  public responsiveOptions!: any;

  public customers: CustomerItem[] = [];

  constructor() {

    this.responsiveOptions = [
      { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
      { breakpoint: '768px', numVisible: 2, numScroll: 2 },
      { breakpoint: '560px', numVisible: 1, numScroll: 1 }
    ];

    this.customers = [
      { name: 'Nombre', ocupation: 'Ocupación', opinion: '≪Opinión≫' },
      { name: 'Nombre', ocupation: 'Ocupación', opinion: '≪Opinión≫' },
      { name: 'Nombre', ocupation: 'Ocupación', opinion: '≪Opinión≫' },
      { name: 'Nombre', ocupation: 'Ocupación', opinion: '≪Opinión≫' },
      { name: 'Nombre', ocupation: 'Ocupación', opinion: '≪Opinión≫' },
      { name: 'Nombre', ocupation: 'Ocupación', opinion: '≪Opinión≫' },
    ];
  }

  ngOnInit(): void { }

}
