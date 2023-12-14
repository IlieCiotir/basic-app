import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrefixPipe } from '../pipes/prefix.pipe';

@Component({
  selector: 'app-list-tile',
  standalone: true,
  imports: [CommonModule, PrefixPipe],
  templateUrl: './list-tile.component.html',
  styleUrl: './list-tile.component.scss'
})
export class ListTileComponent {

  @Input()
  items: number[] = [1, 2, 3, 4, 5, 6];

  @Output()
  itemClicked = new EventEmitter<{ item: number, index: number }>();

  itemSelected(item: number, index: number, event: any) {
    console.log(`clicked on`, item, index, event);
    this.itemClicked.emit({ item, index });
  }
}
