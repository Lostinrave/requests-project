import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  public character: any;
  private id : string | null;
  

  constructor(
    private route: ActivatedRoute, private _characterService: CharacterService
  ) { 
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this._characterService.getCharacterById(this.id).subscribe(data => {
      // Kokius duomenis gaunu?
      console.log("Veikejo duomenys is API:")
      console.log(data);

      // Priskiriame duomenis is API
      // Komponento kintamajam character
      this.character = data;
    });
  }
}
