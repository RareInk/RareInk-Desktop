import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rareink-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works !`;

  constructor() { }

  ngOnInit() {
  }

}
