import { Component } from '@angular/core';
import { ListPokemones } from "../../components/list-pokemones/list-pokemones";

@Component({
  selector: 'app-lista-pokemones',
  imports: [ListPokemones],
  templateUrl: './lista-pokemones.html',
  styleUrl: './lista-pokemones.css'
})
export class ListaPokemones {

}
