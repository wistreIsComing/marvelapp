import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../../../../interfaces/serie';
import { Character } from '../../../../interfaces/character';
import { Creator } from '../../../../interfaces/creator';
import { SeriesService } from '../../../../services/series/series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {
  serie: Serie;

  constructor(private route: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.getSerie();
  }

  getSerie() {
    this.route.params
    .subscribe(params => {
      this.seriesService.getSerie(params['id'])
      .subscribe((resp: any) => {
        this.serie = resp[0];
        console.log(this.serie);
      })
    })
  }

}
