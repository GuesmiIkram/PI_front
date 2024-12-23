import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanClientComponent } from './assistan-client.component';

describe('AssistanClientComponent', () => {
  let component: AssistanClientComponent;
  let fixture: ComponentFixture<AssistanClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistanClientComponent]
    });
    fixture = TestBed.createComponent(AssistanClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
