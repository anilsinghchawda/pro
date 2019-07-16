import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachproComponent } from './eachpro.component';

describe('EachproComponent', () => {
  let component: EachproComponent;
  let fixture: ComponentFixture<EachproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
