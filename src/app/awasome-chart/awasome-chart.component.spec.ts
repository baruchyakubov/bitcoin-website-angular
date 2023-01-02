import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwasomeChartComponent } from './awasome-chart.component';

describe('AwasomeChartComponent', () => {
  let component: AwasomeChartComponent;
  let fixture: ComponentFixture<AwasomeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwasomeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwasomeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
