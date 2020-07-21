import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatorsService } from '../../../../services/creators/creators.service';
import { Creator } from '../../../../interfaces/creator';
import { Comic } from 'src/app/interfaces/comic';
import { Serie } from 'src/app/interfaces/serie';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {
  id: string;
  creator: Creator;
  comics: Comic[];
  series: Serie[];
  creatorRole;

  constructor(private route: ActivatedRoute, private creatorsService: CreatorsService) { }

  ngOnInit(): void {
    this.getCreator();
    this.getComics();
    this.getSeries();
  }

  getCreator() {
    this.route.params
    .subscribe(params => {
      this.creatorsService.getCreator(params['id'])
      .subscribe((resp: any) => {
        this.creator = resp[0];
        console.log(this.creator);
      })
    })
  }

  getComics() {
    this.route.params
    .subscribe(params => {
      this.creatorsService.getCreatorComics(params['id'])
      .subscribe((resp: any) => {
        this.comics = resp;
        console.log(this.comics);
        this.comics.forEach(comic => {
          this.creatorRole = comic.creators.items.filter(creator => creator.role === 'writer');
          console.log(this.creatorRole);
        })
      })
    })
  }

  getSeries() {
    this.route.params
    .subscribe(params => {
      this.creatorsService.getCreatorSeries(params['id'])
      .subscribe((resp: any) => {
        this.series = resp;
        console.log(this.series);
      })
    })
  }

}
