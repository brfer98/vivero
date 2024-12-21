import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasTrepadorasComponent } from './plantas-trepadoras.component';

describe('PlantasTrepadorasComponent', () => {
  let component: PlantasTrepadorasComponent;
  let fixture: ComponentFixture<PlantasTrepadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantasTrepadorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantasTrepadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
