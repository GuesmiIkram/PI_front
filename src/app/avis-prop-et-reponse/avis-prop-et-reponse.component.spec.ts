import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisPropEtReponseComponent } from './avis-prop-et-reponse.component';

describe('AvisPropEtReponseComponent', () => {
  let component: AvisPropEtReponseComponent;
  let fixture: ComponentFixture<AvisPropEtReponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisPropEtReponseComponent]
    });
    fixture = TestBed.createComponent(AvisPropEtReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
