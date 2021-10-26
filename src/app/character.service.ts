import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Angular dekoratorius @Injectable
@Injectable({
  providedIn: 'root'
})
/* Service tipo klases atsakingos uz darba su duomenimis */
export class CharacterService {

  //Konstruktorius
  //Incejtiname Angular http klienta
  constructor(private http: HttpClient) {
    // kolkas konstruktoriuje nedarom nieko
  }

  // Klases metodai/funkcijos

  // Susikureme nauja funkcija, gauti veikeju duomenims
  getCharacters() {
    //Lokalus kintamasis pasiekiamas funkcijos viduje
    //Url kintamasis nurodyti API endpointa
    let url = 'https://rickandmortyapi.com/api/character';
    //Angular get http requestas
    let data = this.http.get(url);
    return data;
  }


}