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
  public errors: any;
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
    this._characterService.getCharacters(this.page, this.searchOptions.name)      
    // Subscribe funkcija naudojama dirbant su Observable tipo objektais (Angular httpClient visada grazina Observabile tipa)
    // data - kintamasis su grazintais duomenimis is musu uzklausos
    .subscribe(
      // Jei uzklausa buvo ivykdyta sekmingai
      // Success callback
      (data: any) => {
        // Gautus duomenis priskiriame komponento kintamajam
        // Characters kintamajam, priskiriame duomenis is characterService getCharaters funkcijos
        this.characters = data.results;
        this.charactersInfo = data.info;
      },

      // Jei grazintas error status code
      // Error callback
      (error: any) => {

        // Patikriname error status koda
        if (error.status == '404') {
          alert("oops nothing found");
          console.log(error);

          // Priskiriame error objekta savo komponento errors masyvui,
          // kad galetume atvaizduoti klaidos pranesima template dalyje
          this.errors = error;

          // Nustatome characters masyva i tuscia masyva, nes nebuvo rasta jokiu veikeju
          this.characters = [];
          // Taip pat pakeiciame charactersInfo objekto reiksmes pagal klaidos koda
          this.charactersInfo.count = 0;
          this.charactersInfo.pages = 0;
        } else {
          alert("oops something went wrong");
        }

      }

      // console.log(data);
      /*
      Dokumentacija kokie duomenys grazinami:
      https://rickandmortyapi.com/documentation/#character-schema
      */
    );
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
