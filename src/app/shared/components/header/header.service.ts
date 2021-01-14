import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private navigationBehavior = new BehaviorSubject<string>('');

  public readonly navigationObservable: Observable<string> = this.navigationBehavior.asObservable();

  constructor() { }

  public navigateTo(route: string): void {
    this.navigationBehavior.next(route);
  }
}
