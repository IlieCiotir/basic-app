import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnythingTileComponent } from './anything-tile.component';

describe('AnythingTileComponent', () => {
  let component: AnythingTileComponent;
  let fixture: ComponentFixture<AnythingTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnythingTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnythingTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
