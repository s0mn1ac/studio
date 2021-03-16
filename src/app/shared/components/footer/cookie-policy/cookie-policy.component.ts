import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss']
})
export class CookiePolicyComponent implements OnInit {

  public isDialogVisible = true;

  constructor() { }

  ngOnInit(): void { }

  public showDialog(): void {
    this.isDialogVisible = true;
  }

  public hideDialog(): void {
    this.isDialogVisible = false;
  }

}
