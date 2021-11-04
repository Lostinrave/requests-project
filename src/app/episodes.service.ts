import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { environment as env } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private url: string = env.API_URL + '/episode';
  
  constructor(private http: HttpClient) { 

  }
  getEpisodes(page : number) {
    let params = new HttpParams();
    params = params.append('page', page);
    // Pasinaudodami angular HttpClient issiunciame get uzklausa i nurodyta url
    let data = this.http.get(this.url, {params});

    return data;
  }
  getEpisodeByUrl(url : string) {


    let data = this.http.get(url);

    return data;
  }
  getEpisodeById(id : string | null){
    let data = this.http.get(this.url + "/" + id);

    return data;
  }
}
