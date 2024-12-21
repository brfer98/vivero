import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolesFrutalesComponent } from './arboles-frutales.component';

describe('ArbolesFrutalesComponent', () => {
  let component: ArbolesFrutalesComponent;
  let fixture: ComponentFixture<ArbolesFrutalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbolesFrutalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArbolesFrutalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
