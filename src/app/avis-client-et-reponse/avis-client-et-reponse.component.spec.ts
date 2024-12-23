import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisClientEtReponseComponent } from './avis-client-et-reponse.component';

describe('AvisClientEtReponseComponent', () => {
  let component: AvisClientEtReponseComponent;
  let fixture: ComponentFixture<AvisClientEtReponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisClientEtReponseComponent]
    });
    fixture = TestBed.createComponent(AvisClientEtReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
