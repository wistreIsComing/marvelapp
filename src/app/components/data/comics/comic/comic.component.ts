import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicsService } from '../../../../services/comics/comics.service';
import { Comic } from '../../../../interfaces/comic';
import { Observable } from 'rxjs';
import { Character } from 'src/app/interfaces/character';


@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {
  comics: Observable<Comic[]>;
  characters: Observable<Character[]>;
  id: string;
  writerCheck: boolean;
  writer: string;
  coverArtist: boolean;
  coverName: string;

  constructor(private route: ActivatedRoute, private comicsService: ComicsService) { }

  ngOnInit(): void {
    // Get comic
    this.getComic();
    // // Get characters in comic
    this.getComics();
  }

  getComic() {
    this.route.params
    .subscribe(params => {
      this.comicsService.getComic(params['id'])
      .subscribe((resp: any) => {
        this.comics = resp;
        console.log(this.comics);
        // Get writer
        this.comics[0].creators.items.map((creator) => {
          if(creator.role === 'writer') {
            this.writerCheck = true;
            this.writer = creator.name;
          }
          else if(creator.role === 'penciller (cover)') {
            this.coverArtist = true;
            this.coverName = creator.name;
          }
        })
      });
    });
  
  }

  getComics() {
    this.comics = this.comicsService.getAllComics();
  }

}
