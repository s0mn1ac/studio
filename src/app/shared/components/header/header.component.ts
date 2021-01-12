import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isHomeClicked = false;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void { }

  public onClickHomeHeaderButton(): void {
    this.isHomeClicked = !this.isHomeClicked;
  }

}
