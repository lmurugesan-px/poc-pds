import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdsDashboardComponent } from './pds-dashboard.component';

describe('PdsDashboardComponent', () => {
  let component: PdsDashboardComponent;
  let fixture: ComponentFixture<PdsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
