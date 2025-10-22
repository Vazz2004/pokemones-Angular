import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemones } from './list-pokemones';

describe('ListPokemones', () => {
  let component: ListPokemones;
  let fixture: ComponentFixture<ListPokemones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPokemones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPokemones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
