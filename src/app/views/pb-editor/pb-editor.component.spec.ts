import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbEditorComponent } from './pb-editor.component';

describe('PbEditorComponent', () => {
  let component: PbEditorComponent;
  let fixture: ComponentFixture<PbEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
