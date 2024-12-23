import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisSurProprietaireComponent } from './avis-sur-proprietaire.component';

describe('AvisSurProprietaireComponent', () => {
  let component: AvisSurProprietaireComponent;
  let fixture: ComponentFixture<AvisSurProprietaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisSurProprietaireComponent]
    });
    fixture = TestBed.createComponent(AvisSurProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
