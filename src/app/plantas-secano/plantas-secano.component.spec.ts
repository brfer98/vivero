import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasSecanoComponent } from './plantas-secano.component';

describe('PlantasSecanoComponent', () => {
  let component: PlantasSecanoComponent;
  let fixture: ComponentFixture<PlantasSecanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantasSecanoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantasSecanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
