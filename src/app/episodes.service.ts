import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) { 

  }
  getEpisodes(page : number) {
    let url: string = 'https://rickandmortyapi.com/api/episode';
    console.log("API episodes Uzklausa:");
    console.log(url);
    let params = new HttpParams();
    params = params.append('page', page);
    // Pasinaudodami angular HttpClient issiunciame get uzklausa i nurodyta url
    let data = this.http.get(url, {params});

    return data;
  }
  getEpisodeByUrl(url : string) {

    console.log("Episode service API URL");
    console.log(url);
    let data = this.http.get(url);

    return data;
  }
  getEpisodeById(id : string | null){
    let url: string = 'https://rickandmortyapi.com/api/episode';
    let data = this.http.get(url + "/" + id);

    return data;
  }
}
