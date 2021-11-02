import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationDetailsComponent } from './location-details/location-details.component';


const routes: Routes = [
  { path: '', component: CharacterListComponent},
  { path: 'character/:id', component: CharacterDetailsComponent},
  { path: 'episodes', component: EpisodesListComponent},
  { path: 'episodes/:id', component: EpisodeDetailsComponent},
  { path: 'locations', component: LocationsComponent},
  { path: 'location/:id', component: LocationDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
