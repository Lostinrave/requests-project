import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';


const routes: Routes = [
  { path: '', component: CharacterListComponent},
  { path: 'character/:id', component: CharacterDetailsComponent},
  { path: 'episode/:id', component: EpisodeCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
