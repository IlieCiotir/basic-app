import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-text-tile',
  standalone: true,
  imports: [],
  templateUrl: './text-tile.component.html',
  styleUrl: './text-tile.component.scss'
})
export class TextTileComponent {

  @Input()
  title = 'Text tile title';

  @Input()
  description = 'Text tile description';
  constructor() {
    console.log(`Constructor`)
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
}
