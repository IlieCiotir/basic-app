import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items = [1, 2, 3, 4, 5];
  constructor() {
    setInterval(() => this.items.push(new Date().getTime()), 1000);
  }
}
