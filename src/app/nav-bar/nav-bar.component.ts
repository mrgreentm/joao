import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        marginBottom: 100,
        opacity: 0,
      })),
      state('closed', style({
        opacity: 1,
      })),
      state('initedOne',style({
        marginTop: -100,
      })),
      state('initedTwo',style({
        marginTop: -100,
      })),
      state('initedThree',style({
        marginTop: -100,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('initedOne => closed', [
        animate('0.5s')
      ]),
      transition('initedTwo => closed', [
        animate('0.7s')
      ]),
      transition('initedThree => closed', [
        animate('0.9s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class NavBarComponent implements OnInit {
  isOpen = true;

  ngOnInit(): void {
    setTimeout(() => this.isOpen = !this.isOpen, 100)
  }

  constructor() { }

}
