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
  public page : number = 1;
  public name : string = '';
  public searchOptions = {
    'name' : '',
    'status' : ''
  }
  
  // Dependancy injection, injectinam character service i komponenta
  constructor(private _characterService : CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  filterCharacters(name : string){
    this.searchOptions.name = name;
    this.getCharacters();
  }

  getCharacters(name? : string){
    // characters kintamajam priskiriame duomenis is characterService getCharacters funkcijos
    this._characterService.getCharacters(this.page, this.searchOptions.name).subscribe((data: any) => {
      this.characters = data.results;
      this.charactersInfo = data.info;
      // console.log(this.charactersInfo);
    });
  }

  nextPage(){
    if(this.page != this.charactersInfo.pages){
      this.page++;
    }
    this.getCharacters();
  }
  previousPage(){
    if(this.page > 1)
    this.page--;

    this.getCharacters();
    console.log(this.page)
  }
  // getCharacterByName(){
  //   // characters kintamajam priskiriame duomenis is characterService getCharacters funkcijos
  //   this._characterService.getCharacterByName(this.name).subscribe((data: any) => {
  //     this.characters = data.results;
  //     this.charactersInfo = data.info;
  //   });
  // }

}
