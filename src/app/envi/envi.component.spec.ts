import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviComponent } from './envi.component';

describe('EnviComponent', () => {
  let component: EnviComponent;
  let fixture: ComponentFixture<EnviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
