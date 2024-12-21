import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasSemillasComponent } from './plantas-semillas.component';

describe('PlantasSemillasComponent', () => {
  let component: PlantasSemillasComponent;
  let fixture: ComponentFixture<PlantasSemillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantasSemillasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantasSemillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
