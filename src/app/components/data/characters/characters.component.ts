import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../services/characters/characters.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Observable<Character[]>

  constructor(private http: HttpClient, private charactersService: CharactersService) {
  }
  // alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // letter = '';
  // changedView = false;
  // filteredCharacters: ;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characters = this.charactersService.getAllCharacters()
  }

  // filterHeroes(event: any) {
  //   this.letter = event.target.textContent;
  //   this.changedView = true;
  //   return new Promise((resolve, reject) => {
  //     this.http
  //     .get(`${environment.apiUrl}characters?nameStartsWith=${this.letter}&apikey=${environment.apiKey}`)
  //     .subscribe((resp: any) => {
  //       console.log(resp.data.results);
  //       this.filteredCharacters = resp.data.results;
  //       resolve();
  //     });
  //   })    
  // }
}
