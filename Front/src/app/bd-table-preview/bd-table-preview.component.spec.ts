import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdTablePreviewComponent } from './bd-table-preview.component';

describe('BdTablePreviewComponent', () => {
  let component: BdTablePreviewComponent;
  let fixture: ComponentFixture<BdTablePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdTablePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdTablePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
