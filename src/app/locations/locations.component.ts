import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  public locations : any = [];
  public locationsInfo : any = {};
  public page : number = 1;
  constructor(private _locationsService: LocationsService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(){
    // characters kintamajam priskiriame duomenis is characterService getCharacters funkcijos
    this._locationsService.getLocations(this.page).subscribe((data: any) => {
      this.locations = data.results;
      this.locationsInfo = data.info;
    });
  }
  nextPage(){
    this.page++;
    this.getLocations();
  }
  previousPage(){
    if(this.page > 1)
    this.page--;

    this.getLocations();
    console.log(this.page)
  }

}
