import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'rareink-ui-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  @ViewChild('toggleable') toggleable: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleable.nativeElement.classList.toggle(['toggled']);
  }

}
