import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { 

  }
  getLocations(page : number) {
    let url: string = 'https://rickandmortyapi.com/api/location';
    console.log("API episodes Uzklausa:");
    console.log(url);
    let params = new HttpParams();
    params = params.append('page', page);
    // Pasinaudodami angular HttpClient issiunciame get uzklausa i nurodyta url
    let data = this.http.get(url, {params});

    return data;
  }
  getLocationById(id : string | null){
    let url: string = 'https://rickandmortyapi.com/api/location';
    let data = this.http.get(url + "/" + id);

    return data;
  }
}
