import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasAcuaticasComponent } from './plantas-acuaticas.component';

describe('PlantasAcuaticasComponent', () => {
  let component: PlantasAcuaticasComponent;
  let fixture: ComponentFixture<PlantasAcuaticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantasAcuaticasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantasAcuaticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
