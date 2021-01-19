import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraGrupoComponent } from './cadastra-grupo.component';

describe('CadastraGrupoComponent', () => {
  let component: CadastraGrupoComponent;
  let fixture: ComponentFixture<CadastraGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
