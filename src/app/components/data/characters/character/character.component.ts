import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../../../services/characters/characters.service';
import { Character } from 'src/app/interfaces/character';
import { Comic } from 'src/app/interfaces/comic';
import { Serie } from 'src/app/interfaces/serie';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: Character;
  comics: Comic[];
  id: string;
  series: Serie[];
  writer;
  coverArtist: boolean;
  coverName: string; 

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit() {
    this.getCharacter();
    this.getCharacterComics();
    this.getCharacterSeries();
  }

  getCharacter() {
    this.route.params
    .subscribe(params => {
      this.charactersService.getCharacter(params['id'])
      .subscribe((resp: any) => {
        this.character = resp;
      });
    });
  }

  getCharacterComics() {
    this.route.params
    .subscribe(params => {
      this.charactersService.getCharacterComics(params['id'])
      .subscribe((resp: any) => {
        this.comics = resp;
        // Show writer & cover artist
        this.comics.map((comic) => {
          this.writer = comic.creators.items.filter(creator => creator.role === 'writer');
          // console.log(this.writer);
        })
        this.comics[0].creators.items.map((creator) => {
          if(creator.role === 'penciller (cover)') {
            this.coverArtist = true;
            this.coverName = creator.name;
          }
        })
      })
    })
  }

  getCharacterSeries() {
    this.route.params
    .subscribe(params => {
      this.charactersService.getCharacterSeries(params['id'])
      .subscribe((resp: any) => {
        this.series = resp;  
      })
    })
  }
}
