import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaDetailEditorComponent } from './na-detail-editor.component';

describe('NaDetailEditorComponent', () => {
  let component: NaDetailEditorComponent;
  let fixture: ComponentFixture<NaDetailEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaDetailEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaDetailEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
