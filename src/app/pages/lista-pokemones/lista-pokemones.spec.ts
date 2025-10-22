import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPokemones } from './lista-pokemones';

describe('ListaPokemones', () => {
  let component: ListaPokemones;
  let fixture: ComponentFixture<ListaPokemones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPokemones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPokemones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
