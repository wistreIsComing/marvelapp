import { Component, OnInit } from '@angular/core';
import { CreatorsService } from 'src/app/services/creators/creators.service';
import { Observable } from 'rxjs';
import { Creator } from 'src/app/interfaces/creator';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  constructor(private creatorsService: CreatorsService) {
    this.getCreators();
  }
  creators: Observable<Creator[]>;

  ngOnInit(): void {
  }

  getCreators() {
    this.creators = this.creatorsService.getAllCreators();
  }

}
