import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  private id : string | null;
  public location : any;
  constructor(private route : ActivatedRoute, private _locationsService : LocationsService) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this._locationsService.getLocationById(this.id).subscribe(data =>{
      this.location = data;
    });
  }

}
