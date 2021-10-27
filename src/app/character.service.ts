import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';


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

  //Parametrai page - klaustukas gale nurodo, jog sitas parametras nera privalomas
  getCharacters(page? : number) {
    const params = new HttpParams();
    if(page){
      params.set('page', '');
    }
    
  
    //Lokalus kintamasis pasiekiamas funkcijos viduje
    //Url kintamasis nurodyti API endpointa
    let url : string = '';
    //Patikriname ar page parametras buvo perduotas, tada perduodame ji i URl
    //Tai nera teisingas aprasymo budas
    if(page){
      url = 'https://rickandmortyapi.com/api/character?page='+page;
    } else {
      url = 'https://rickandmortyapi.com/api/character';
    }
    
    //Angular get http requestas
    let data = this.http.get(url, {params});
    return data;
  }


}