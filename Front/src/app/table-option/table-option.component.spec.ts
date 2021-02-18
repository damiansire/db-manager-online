import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOptionComponent } from './table-option.component';

describe('TableOptionComponent', () => {
  let component: TableOptionComponent;
  let fixture: ComponentFixture<TableOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
