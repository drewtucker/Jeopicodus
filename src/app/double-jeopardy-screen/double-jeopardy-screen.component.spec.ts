import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleJeopardyScreenComponent } from './double-jeopardy-screen.component';

describe('DoubleJeopardyScreenComponent', () => {
  let component: DoubleJeopardyScreenComponent;
  let fixture: ComponentFixture<DoubleJeopardyScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleJeopardyScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleJeopardyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
