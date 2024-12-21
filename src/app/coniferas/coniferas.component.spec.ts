import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConiferasComponent } from './coniferas.component';

describe('ConiferasComponent', () => {
  let component: ConiferasComponent;
  let fixture: ComponentFixture<ConiferasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConiferasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConiferasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
