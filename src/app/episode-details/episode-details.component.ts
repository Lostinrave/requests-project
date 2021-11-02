import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from '../episodes.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {

  private id : string | null;
  public episode : any;
  constructor(
    private route: ActivatedRoute, private _episodesService: EpisodesService
  ) { 
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this._episodesService.getEpisodeById(this.id).subscribe(data => {
      console.log("Epizodo duomenys is API:")
      console.log(data);
      this.episode = data;
    });
  }
}