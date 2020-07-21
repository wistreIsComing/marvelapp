import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/character';
import { Comic } from 'src/app/interfaces/comic';
import { Serie } from 'src/app/interfaces/serie';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  characters: Character[];
  charactersFilter: Character[];
  
  constructor(private http: HttpClient) {
  }

  

  getAllCharacters(): Observable<Character[]> {
    return this.http
    .get<Character[]>(`${environment.apiUrl}characters?apikey=${environment.apiKey}&limit=100`)
    .pipe(map((resp: any) => resp.data.results));
  }

  getCharacter(id: string): Observable<Character[]> {
    return this.http
    .get<Character[]>(`${environment.apiUrl}characters/${id}?apikey=${environment.apiKey}`)
    .pipe(map((resp: any) => resp.data.results));
  }

  getCharacterComics(id: string): Observable<Comic[]> {
    return this.http
    .get<Comic[]>(`${environment.apiUrl}characters/${id}/comics?apikey=${environment.apiKey}`)
    .pipe(map((resp: any) => resp.data.results));
  }

  getCharacterSeries(id: string): Observable<Serie[]> {
    return this.http
    .get<Serie[]>(`${environment.apiUrl}characters/${id}/series?apikey=${environment.apiKey}`)
    .pipe(map((resp: any) => resp.data.results));
  }

  filterCharacters(term: string) {
    this.charactersFilter = [];
    term = term.toLowerCase();
    this.characters.forEach(character => {
      const lowerTitle = character.name.toLowerCase();
      if (
        character.name.indexOf(term) >= 0 ||
        lowerTitle.indexOf(term) >= 0
      ) {
        this.charactersFilter.push(character);
      }
    });
  }
}
