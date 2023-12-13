import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TextTileComponent } from './text-tile/text-tile.component';
import { ListTileComponent } from './list-tile/list-tile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TextTileComponent, ListTileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basic-app';
  catName = '<button>Click me I am safe</button>';
  seconds = [1, 1, 1];
  constructor() {
    setInterval(() => this.title = this.title + '1', 1000);
    setInterval(() => this.seconds.push(new Date().getTime()), 1000);
  }

  getDescription() {
    return this.title.toUpperCase() + ' descriere';
  }

  logMessage(message: any) {
    console.log(`appComponent`, message);
  }
}
