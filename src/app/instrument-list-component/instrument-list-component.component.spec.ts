import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentListComponentComponent } from './instrument-list-component.component';

describe('InstrumentListComponentComponent', () => {
  let component: InstrumentListComponentComponent;
  let fixture: ComponentFixture<InstrumentListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
