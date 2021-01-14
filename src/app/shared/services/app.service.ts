import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { HeaderService } from '../components/header/header.service';

@Injectable()
export class AppService {

  constructor(public translocoService: TranslocoService, public headerService: HeaderService) { }
}
