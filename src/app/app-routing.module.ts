import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/layout/home/home.component';
import { CharactersComponent } from './components/data/characters/characters.component';
import { CreatorsComponent } from './components/data/creators/creators.component';
import { SeriesComponent } from './components/data/series/series.component';
import { ComicsComponent } from './components/data/comics/comics.component';

import { CharacterComponent } from './components/data/characters/character/character.component';
import { ComicComponent } from './components/data/comics/comic/comic.component';
import { SerieComponent } from './components/data/series/serie/serie.component';
import { CreatorComponent } from './components/data/creators/creator/creator.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'creators', component: CreatorsComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'comic/:id', component: ComicComponent },
  { path: 'serie/:id', component: SerieComponent },
  { path: 'creator/:id', component: CreatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
