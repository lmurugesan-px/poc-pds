import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdsLoginComponent } from './pds-login.component';

describe('PdsLoginComponent', () => {
  let component: PdsLoginComponent;
  let fixture: ComponentFixture<PdsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdsLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
