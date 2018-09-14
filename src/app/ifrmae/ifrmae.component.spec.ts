import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfrmaeComponent } from './ifrmae.component';

describe('IfrmaeComponent', () => {
  let component: IfrmaeComponent;
  let fixture: ComponentFixture<IfrmaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfrmaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfrmaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
