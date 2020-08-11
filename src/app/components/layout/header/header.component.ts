import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  constructor() {
  }

  ngOnInit(): void {
  }

  showNavbar() {
    const items = document.querySelectorAll('.nav-items');
    console.log(items);

    items.forEach(item => item.classList.toggle('.navbar-toggle-show'));
  }

}
