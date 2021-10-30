import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';


const routes: Routes = [
  { path: '', component: CharacterListComponent},
  { path: 'character/:id', component: CharacterDetailsComponent},
  { path: 'episodes', component: EpisodesListComponent},
  { path: 'episodes/:id', component: EpisodeCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
