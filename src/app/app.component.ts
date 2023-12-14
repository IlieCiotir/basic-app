import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TextTileComponent } from './text-tile/text-tile.component';
import { ListTileComponent } from './list-tile/list-tile.component';
import { DataService } from './services/data-service.service';
import { MouseHighlightDirective } from './directives/mouse-highlight.directive';
import { AnythingTileComponent } from './anything-tile/anything-tile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TextTileComponent, ListTileComponent, MouseHighlightDirective, AnythingTileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basic-app';
  catName = '<button>Click me I am safe</button>';
  constructor(public dataService: DataService) {
    setInterval(() => this.title = this.title + '1', 1000);

  }

  getDescription() {
    return this.title.toUpperCase() + ' descriere';
  }

  logMessage(message: any) {
    console.log(`appComponent`, message);
  }
}
