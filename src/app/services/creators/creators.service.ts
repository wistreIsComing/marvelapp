import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Creator } from 'src/app/interfaces/creator';
import { Comic } from 'src/app/interfaces/comic';
import { Serie } from 'src/app/interfaces/serie';

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {
  creatorsFilter: Creator[];
  creators: Creator[];

  constructor(private http: HttpClient) { }

  getAllCreators(): Observable<Creator[]> {
    return this.http.get<Creator[]>(`${environment.apiUrl}creators?limit=100&apikey=${environment.apiKey}`)
    .pipe(map((resp: any) => resp.data.results))
  }

  getCreator(id: string): Observable<Creator[]> {
    return this.http.get<Creator[]>(`${environment.apiUrl}creators/${id}?apikey=${environment.apiKey}`)
    .pipe(map((resp: any) => resp.data.results))
  }

  getCreatorComics(id: string): Observable<Comic[]> {
    return this.http.get<Comic[]>(`${environment.apiUrl}creators/${id}/comics?limit=100&apikey=${environment.apiKey}`)
    .pipe(map((resp: any) => resp.data.results));
  }

  getCreatorSeries(id: string): Observable<Serie[]> {
    return this.http.get<Serie[]>(`${environment.apiUrl}creators/${id}/series?limit=100&apikey=${environment.apiKey}`)
    .pipe(map((resp: any) => resp.data.results));
  }

  filterCreators(term: string) {
    this.creatorsFilter = [];
    term = term.toLowerCase();
    this.creators.forEach(creator => {
      const lowerTitle = creator.firstName.toLowerCase();
      if (
        creator.firstName.indexOf(term) >= 0 ||
        lowerTitle.indexOf(term) >= 0
      ) {
        this.creatorsFilter.push(creator);
      }
    });
  }
}
