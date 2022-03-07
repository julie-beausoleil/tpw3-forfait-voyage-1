import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproprosComponent } from './apropros.component';

describe('AproprosComponent', () => {
  let component: AproprosComponent;
  let fixture: ComponentFixture<AproprosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproprosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AproprosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
