import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ChipItem } from 'src/app/shared/models/chip-item.model';
import { FilterItem } from 'src/app/shared/models/filter-item.model';
import { ImageItem } from 'src/app/shared/models/image-item.model';

@Component({
  selector: 'app-extended-gallery',
  templateUrl: './extended-gallery.component.html',
  styleUrls: ['./extended-gallery.component.scss']
})
export class ExtendedGalleryComponent implements OnInit {

  public chips!: ChipItem[];
  public images!: ImageItem[];
  public filters!: FilterItem[];

  constructor() { }

  ngOnInit(): void {
    this.initFilters();
    this.initImageItems();
    this.initChipItems();
  }

  private initImageItems(): void {


    
  }

  private initFilters(): void {

    const filterItem1 = new FilterItem();
    filterItem1.label = 'Humano';

    const filterItem1a = new FilterItem();
    filterItem1a.label = 'Humano Verde';
    const filterItem1b = new FilterItem();
    filterItem1b.label = 'Humano Rojo';
    const filterItem1c = new FilterItem();
    filterItem1c.label = 'Humano Azul';

    filterItem1.subFilterItems = [filterItem1a, filterItem1b, filterItem1c];

    const filterItem2 = new FilterItem();
    filterItem2.label = 'Orco';

    const filterItem2a = new FilterItem();
    filterItem2a.label = 'Orco Verde';

    const filterItem2b = new FilterItem();
    filterItem2b.label = 'Orco Rojo';

    const filterItem2c = new FilterItem();
    filterItem2c.label = 'Orco Azul';

    filterItem2.subFilterItems = [filterItem2a, filterItem2b, filterItem2c];

    const filterItem3 = new FilterItem();
    filterItem3.label = 'Elfo';

    const filterItem3a = new FilterItem();
    filterItem3a.label = 'Elfo Verde';

    const filterItem3b = new FilterItem();
    filterItem3b.label = 'Elfo Rojo';

    const filterItem3c = new FilterItem();
    filterItem3c.label = 'Elfo Azul';

    filterItem3.subFilterItems = [filterItem3a, filterItem3b, filterItem3c];

    this.filters = [filterItem1, filterItem2, filterItem3];
  }

  private initChipItems(): void {
    this.chips = [
      { active: true, title: 'Orco' },
      { active: true, title: 'Humano' },
      { active: true, title: 'Elfo' },
      { active: true, title: 'Brujo' },
      { active: true, title: 'Robot' },
      { active: true, title: 'No muerto' },
      { active: true, title: 'Pirata espacial' },
      { active: true, title: 'Marine' },
      { active: true, title: 'Alien' },
    ];
  }

  public selectFilter(event: any): void {
  }

  public unselectFilter(event: any): void {
  }

  public removeChip(chip: ChipItem): void {
    console.log(chip)
    console.log(this.chips)
  }

}
