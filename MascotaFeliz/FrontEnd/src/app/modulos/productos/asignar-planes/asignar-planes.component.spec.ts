import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPlanesComponent } from './asignar-planes.component';

describe('AsignarPlanesComponent', () => {
  let component: AsignarPlanesComponent;
  let fixture: ComponentFixture<AsignarPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
