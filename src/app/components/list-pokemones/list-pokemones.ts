import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-pokemones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-pokemones.html',
  styleUrls: ['./list-pokemones.css']
})
export class ListPokemones implements OnInit {
  pokemones$!: Observable<any[]>;
  
  private pokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.pokemones$ = this.pokemonService.getPokemones();
  }
}