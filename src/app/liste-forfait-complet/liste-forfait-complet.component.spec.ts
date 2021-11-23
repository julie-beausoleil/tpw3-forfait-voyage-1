import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeForfaitCompletComponent } from './liste-forfait-complet.component';

describe('ListeForfaitCompletComponent', () => {
  let component: ListeForfaitCompletComponent;
  let fixture: ComponentFixture<ListeForfaitCompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeForfaitCompletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeForfaitCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
