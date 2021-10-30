import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../episodes.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {
  public episodes : any = [];
  public episodesInfo : any = {};
  public page : number = 1;
  constructor(private _episodesService: EpisodesService) { }

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes(){
    // characters kintamajam priskiriame duomenis is characterService getCharacters funkcijos
    this._episodesService.getEpisodes(this.page).subscribe((data: any) => {
      this.episodes = data.results;
      this.episodesInfo = data.info;
    });
  }
  nextPage(){
    this.page++;
    this.getEpisodes();
  }
  previousPage(){
    if(this.page > 1)
    this.page--;

    this.getEpisodes();
    console.log(this.page)
  }

}
