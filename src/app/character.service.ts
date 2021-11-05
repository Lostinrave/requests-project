import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { environment as env } from './../environments/environment';



// Angular dekoratorius @Injectable
@Injectable({
  providedIn: 'root'
})
/* Service tipo klases atsakingos uz darba su duomenimis */
export class CharacterService {
  private url: string = env.API_URL + '/character';
  //Konstruktorius
  //Incejtiname Angular http klienta
  constructor(private http: HttpClient) {
    // kolkas konstruktoriuje nedarom nieko
  }

  // Klases metodai/funkcijos

  // Susikureme nauja funkcija, gauti veikeju duomenims

  //Parametrai page - klaustukas gale nurodo, jog sitas parametras nera privalomas
  getCharacters(page : number, name? : string) {
    console.log("Page parametras");
    console.log(page);
    // Lokalus kintamasis, pasiekiamas tik sios funkcijos viduje

    // url kintamasis, nurodo i koki API endpoint'a krepsimes

    // Dokumentacija kokie duomenys grazinami:
    // https://rickandmortyapi.com/documentation/#character-schema
    // let url: string = this.url;

    // Sukuriamas angular Http Parametru objektas
    let params = new HttpParams();


    // Jei http Parametru objektas jau sukurtas, naudoti append funkcija prideti papildomiems parametrams
    // Pries siunciant uzklausa
    params = params.append('page', page);

    if(name){
      params = params.append('name', name);
    }

    console.log("API Uzklausa:");
    console.log(this.url);

    // Pasinaudodami angular HttpClient issiunciame get uzklausa i nurodyta url
    let data = this.http.get(this.url, {params});

    return data;
  }
  getCharacterByName(name : string){

    
    let params = new HttpParams();
    params = params.append('name', name);
    let data = this.http.get(this.url, {params});

    return data;
  }
  getCharacterById(id : string | null){
    
    let data = this.http.get(this.url + "/" + id);

    return data;
  }
  getCharacterByUrl(url: string){
    console.log("Character service API URL");
    console.log(this.url);
    let data = this.http.get(this.url);

    return data;
  }
}