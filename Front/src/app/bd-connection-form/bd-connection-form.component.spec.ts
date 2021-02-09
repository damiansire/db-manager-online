import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdConnectionFormComponent } from './bd-connection-form.component';

describe('BdConnectionFormComponent', () => {
  let component: BdConnectionFormComponent;
  let fixture: ComponentFixture<BdConnectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdConnectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdConnectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
