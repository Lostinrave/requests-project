import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  // Veikeju masyvas kurio duomenys uzpildysime is CharactersService
  public characters : any = [];
  public charactersInfo : any = {};
  // Dependancy injection, injectinam character service i komponenta
  constructor(private _characterService : CharacterService) { }

  ngOnInit(): void {
    // characters kintamajam priskiriame duomenis is characterService getCharacters funkcijos
    this._characterService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
      this.charactersInfo = data.info;
    });

    console.log(this.characters);
  }

}
