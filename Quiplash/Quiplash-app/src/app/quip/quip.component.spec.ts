import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuipComponent } from './quip.component';

describe('QuipComponent', () => {
  let component: QuipComponent;
  let fixture: ComponentFixture<QuipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
