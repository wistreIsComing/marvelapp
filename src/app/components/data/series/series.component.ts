import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series/series.service';
import { Observable } from 'rxjs';
import { Serie } from 'src/app/interfaces/serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor(private seriesService: SeriesService) {
  }

  series: Observable<Serie[]>;

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries() {
    this.series = this.seriesService.getAllSeries();
  }

}
