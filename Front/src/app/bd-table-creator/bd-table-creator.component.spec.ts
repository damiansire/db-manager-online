import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdTableCreatorComponent } from './bd-table-creator.component';

describe('BdTableCreatorComponent', () => {
  let component: BdTableCreatorComponent;
  let fixture: ComponentFixture<BdTableCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdTableCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdTableCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
