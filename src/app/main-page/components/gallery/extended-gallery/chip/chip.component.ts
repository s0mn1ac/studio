import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChipItem } from 'src/app/shared/models/chip-item.model';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input() public chips: ChipItem[] = [];
  @Output() public hideChipEmitter: EventEmitter<ChipItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  public initChipsComponent(chips: ChipItem[]): void {
    this.chips = chips;
  }

  public activeChips(): ChipItem[] {
    return this.chips?.filter((chip: ChipItem) => chip.active);
  }

  public hideChip(chip: ChipItem): void {
    this.hideChipEmitter.emit(chip);
  }

}
