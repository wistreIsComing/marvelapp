import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics/comics.service';
import { Comic } from 'src/app/interfaces/comic';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  constructor(private comicsService: ComicsService) { 
    this.getComics();
  }

  comics: Observable<Comic[]>;

  ngOnInit(): void {
  }

  getComics() {
    this.comics = this.comicsService.getAllComics();    
  }

}
