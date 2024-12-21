import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmaceasComponent } from './palmaceas.component';

describe('PalmaceasComponent', () => {
  let component: PalmaceasComponent;
  let fixture: ComponentFixture<PalmaceasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalmaceasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PalmaceasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
