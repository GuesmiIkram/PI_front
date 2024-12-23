import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisSurClientComponent } from './avis-sur-client.component';

describe('AvisSurClientComponent', () => {
  let component: AvisSurClientComponent;
  let fixture: ComponentFixture<AvisSurClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisSurClientComponent]
    });
    fixture = TestBed.createComponent(AvisSurClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
