import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdTableListComponent } from './bd-table-list.component';

describe('BdTableListComponent', () => {
  let component: BdTableListComponent;
  let fixture: ComponentFixture<BdTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
