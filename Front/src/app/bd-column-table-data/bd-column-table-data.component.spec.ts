import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdColumnTableDataComponent } from './bd-column-table-data.component';

describe('BdColumnTableDataComponent', () => {
  let component: BdColumnTableDataComponent;
  let fixture: ComponentFixture<BdColumnTableDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdColumnTableDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdColumnTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
