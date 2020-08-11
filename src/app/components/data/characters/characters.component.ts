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

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characters = this.charactersService.getAllCharacters()
  }
}
