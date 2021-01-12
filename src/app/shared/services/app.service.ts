import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable()
export class AppService {

  constructor(public translocoService: TranslocoService) { }
}
