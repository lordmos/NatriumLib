import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaFormComponent } from './na-form.component';

describe('NaFormComponent', () => {
  let component: NaFormComponent;
  let fixture: ComponentFixture<NaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
