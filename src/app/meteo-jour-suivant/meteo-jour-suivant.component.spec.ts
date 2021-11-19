import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoJourSuivantComponent } from './meteo-jour-suivant.component';

describe('MeteoJourSuivantComponent', () => {
  let component: MeteoJourSuivantComponent;
  let fixture: ComponentFixture<MeteoJourSuivantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoJourSuivantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoJourSuivantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
