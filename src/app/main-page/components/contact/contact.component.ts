import { Component, OnInit } from '@angular/core';
import { faTelegramPlane, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public faEnvelope = faEnvelope;
  public faWhatsapp = faWhatsapp;
  public faTelegram = faTelegramPlane;

  constructor() { }

  ngOnInit(): void { }

}
