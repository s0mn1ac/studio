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
      { name: 'Bill Puertas', ocupation: 'Limpiador de estanques', opinion: '≪Son la polla en vinagre≫' },
      { name: 'Gertrudis', ocupation: 'Paseador de gallinas', opinion: '≪A mi me gustar miccionar sobre bebés≫' },
      { name: 'José Luis', ocupation: 'Pulidor de bombillas', opinion: '≪A mi padre le gusta darme palizas≫' },
      { name: 'Juan Antonio', ocupation: 'Recolector de pulgas', opinion: '≪¡Me encanta comer mierda!≫' },
      { name: 'Beatriz', ocupation: 'Doblador de pañuelos', opinion: '≪Por el culo mejor dos≫' },
      { name: 'Íñigo', ocupation: 'Afilador de cucharas', opinion: '≪¡Hola, mamá!≫' },
    ];
  }

  ngOnInit(): void { }

}
