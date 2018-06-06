import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaTableComponent } from './na-table.component';

describe('NaTableComponent', () => {
  let component: NaTableComponent;
  let fixture: ComponentFixture<NaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
