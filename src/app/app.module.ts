import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './components/layout/home/home.component';
import { CharactersComponent } from './components/data/characters/characters.component';
import { SeriesComponent } from './components/data/series/series.component';
import { CreatorsComponent } from './components/data/creators/creators.component';
import { ComicsComponent } from './components/data/comics/comics.component';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import { CharacterComponent } from './components/data/characters/character/character.component';
import { ComicComponent } from './components/data/comics/comic/comic.component';
import { SerieComponent } from './components/data/series/serie/serie.component';
import { CreatorComponent } from './components/data/creators/creator/creator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    SeriesComponent,
    CreatorsComponent,
    ComicsComponent,
    HeaderComponent,
    FooterComponent,
    CharacterComponent,
    ComicComponent,
    SerieComponent,
    CreatorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
