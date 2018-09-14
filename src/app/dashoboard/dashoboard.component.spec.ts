import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashoboardComponent } from './dashoboard.component';

describe('DashoboardComponent', () => {
  let component: DashoboardComponent;
  let fixture: ComponentFixture<DashoboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashoboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
