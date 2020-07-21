import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharactersService } from '../../../services/characters/characters.service';
import { ComicsService } from '../../../services/comics/comics.service';
import { CreatorsService } from '../../../services/creators/creators.service';
import { SeriesService } from '../../../services/series/series.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private charactersService: CharactersService,
    private comicsService: ComicsService,
    private seriesService: SeriesService,
    private creatorsService: CreatorsService) { }

  ngOnInit(): void {
    this.searchCharacter();
  }

  searchCharacter() {
    this.router.params.subscribe(params => {
      this.charactersService.filterCharacters(params['term']);
    })
  }

  searchComic() {
    this.router.params.subscribe(params => {
      this.comicsService.filterComics(params['term']);
    })
  }

  searchSerie() {
    this.router.params.subscribe(params => {
      this.seriesService.filterSeries(params['term']);
    })
  }

  searchCreator() {
    this.router.params.subscribe(params => {
      this.creatorsService.filterCreators(params['term']);
    })
  }

}
