import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanPropComponent } from './assistan-prop.component';

describe('AssistanPropComponent', () => {
  let component: AssistanPropComponent;
  let fixture: ComponentFixture<AssistanPropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistanPropComponent]
    });
    fixture = TestBed.createComponent(AssistanPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
