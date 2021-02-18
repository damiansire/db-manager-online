import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTableFormComponent } from './create-table-form.component';

describe('CreateTableFormComponent', () => {
  let component: CreateTableFormComponent;
  let fixture: ComponentFixture<CreateTableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
