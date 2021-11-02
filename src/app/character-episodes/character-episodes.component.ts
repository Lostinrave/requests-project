import { Component, OnInit, Input } from '@angular/core';
import { EpisodesService } from '../episodes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-episodes',
  templateUrl: './character-episodes.component.html',
  styleUrls: ['./character-episodes.component.scss']
})
export class CharacterEpisodesComponent implements OnInit {

  @Input() character : any; // decorate the property with @Input()
  public episodes = {};
  public episodeUrl : any;


  constructor(private route: ActivatedRoute, private _episodesService: EpisodesService) {
    this.episodeUrl = this.route.snapshot.paramMap.get("episodeUrl");
   }

   ngOnInit(): void {
    this._episodesService.getEpisodeByUrl(this.episodeUrl).subscribe(data => {
      this.episodes = data;
    });
  }

}
