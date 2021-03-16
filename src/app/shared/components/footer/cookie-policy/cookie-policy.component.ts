import { Component, OnInit } from '@angular/core';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss']
})
export class CookiePolicyComponent implements OnInit {

  public isDialogVisible = false;

  public faCookieBite = faCookieBite;

  constructor() { }

  ngOnInit(): void { }

  public showDialog(): void {
    this.isDialogVisible = true;
  }

  public hideDialog(): void {
    this.isDialogVisible = false;
  }

}
