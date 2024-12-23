import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultReclamationCComponent } from './consult-reclamation-c.component';

describe('ConsultReclamationCComponent', () => {
  let component: ConsultReclamationCComponent;
  let fixture: ComponentFixture<ConsultReclamationCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultReclamationCComponent]
    });
    fixture = TestBed.createComponent(ConsultReclamationCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
