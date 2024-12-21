import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolesFloralesComponent } from './arboles-florales.component';

describe('ArbolesFloralesComponent', () => {
  let component: ArbolesFloralesComponent;
  let fixture: ComponentFixture<ArbolesFloralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbolesFloralesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArbolesFloralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
