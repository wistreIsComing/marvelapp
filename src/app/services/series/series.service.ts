import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Serie } from 'src/app/interfaces/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  seriesFilter: Serie[];
  series: Serie[];

  constructor(private http: HttpClient) { }

  allSeries: Observable<Serie[]>;

  getAllSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(`${environment.apiUrl}series?limit=100&apikey=${environment.apiKey}`)
    .pipe(map((data: any) => data.data.results));
  }

  getSerie(id: string): Observable<Serie[]> {
    return this.http.get<Serie[]>(`${environment.apiUrl}series/${id}?apikey=${environment.apiKey}`)
    .pipe(map((resp: any) => resp.data.results))
  }

  filterSeries(term: string) {
    this.seriesFilter = [];
    term = term.toLowerCase();
    this.series.forEach(serie => {
      const lowerTitle = serie.title.toLowerCase();
      if (
        serie.title.indexOf(term) >= 0 ||
        lowerTitle.indexOf(term) >= 0
      ) {
        this.seriesFilter.push(serie);
      }
    });
  }
}
