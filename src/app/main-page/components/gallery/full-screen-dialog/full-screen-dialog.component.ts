import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Dialog, DialogModule } from 'primeng/dialog';
import { ImageItem } from 'src/app/shared/models/image-item.model';

@Component({
  selector: 'app-full-screen-dialog',
  templateUrl: './full-screen-dialog.component.html',
  styleUrls: ['./full-screen-dialog.component.scss']
})
export class FullScreenDialogComponent implements OnInit {

  @Input() imageSelected!: ImageItem;

  @Output() hideEmitter: EventEmitter<void> = new EventEmitter();

  public isDialogVisible = false;

  constructor() { }

  ngOnInit(): void { }

  public showDialog(): void {
    this.isDialogVisible = true;
  }

  public hideDialog(): void {
    this.isDialogVisible = false;
  }

}
