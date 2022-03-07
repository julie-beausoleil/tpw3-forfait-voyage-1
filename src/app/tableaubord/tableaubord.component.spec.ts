import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableaubordComponent } from './tableaubord.component';

describe('TableaubordComponent', () => {
  let component: TableaubordComponent;
  let fixture: ComponentFixture<TableaubordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableaubordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableaubordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
