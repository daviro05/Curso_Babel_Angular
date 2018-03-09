import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosServicesComponent } from './libros-services.component';

describe('LibrosServicesComponent', () => {
  let component: LibrosServicesComponent;
  let fixture: ComponentFixture<LibrosServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
