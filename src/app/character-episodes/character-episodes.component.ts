import { Component, OnInit, Input } from '@angular/core';
import { EpisodesService } from '../episodes.service';
@Component({
  selector: 'app-character-episodes',
  templateUrl: './character-episodes.component.html',
  styleUrls: ['./character-episodes.component.scss']
})
export class CharacterEpisodesComponent implements OnInit {

  @Input() character : any; // decorate the property with @Input()
  public episodes = {};

  constructor(private _episodesService: EpisodesService) { }

  ngOnInit(): void {

  }

}