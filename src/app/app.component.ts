import { Component } from '@angular/core';
import { CharactersService } from './services/characters/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public characters: CharactersService) {

  }
}
