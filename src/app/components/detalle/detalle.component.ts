import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  pokemon: any = '';
  pokemonImg = '';
  pokemonType = [];

  constructor(private activatedRouter: ActivatedRoute,
    private pokemonService: PokemonService) {
    //obtiene parametro de la url
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {
  }

  getPokemon(id:any) {
    this.pokemonService.getPokemons(id).subscribe(
      (res:any) => {
        console.log(res);
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      },
      (err:any) => {
        console.log(err);
      }
    )
  }

}