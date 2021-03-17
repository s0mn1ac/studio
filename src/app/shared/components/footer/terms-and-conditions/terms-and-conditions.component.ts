import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

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
