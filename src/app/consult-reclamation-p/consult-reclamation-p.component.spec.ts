import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultReclamationPComponent } from './consult-reclamation-p.component';

describe('ConsultReclamationPComponent', () => {
  let component: ConsultReclamationPComponent;
  let fixture: ComponentFixture<ConsultReclamationPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultReclamationPComponent]
    });
    fixture = TestBed.createComponent(ConsultReclamationPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
