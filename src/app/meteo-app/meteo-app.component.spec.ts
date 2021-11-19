import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoAppComponent } from './meteo-app.component';

describe('MeteoAppComponent', () => {
  let component: MeteoAppComponent;
  let fixture: ComponentFixture<MeteoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
