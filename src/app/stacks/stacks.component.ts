import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

export interface Stacks {
  name: string;
  symbol: string;
}

const ELEMENT_DATA: Stacks[] = [
  { name: 'Angular', symbol: '/assets/angular.svg' },
  { name: 'Angular Material', symbol: '/assets/material.svg' },
  { name: 'Web Components', symbol: '/assets/components.svg' },
  { name: 'Forms', symbol: '/assets/forms.svg' },
  { name: 'JavaScript', symbol: '/assets/js.png' },
  { name: 'HTML5', symbol: '/assets/html-5.png' },
  { name: 'CSS', symbol: '/assets/css-3.png' },
];


@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.css']
})
export class StacksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name', 'symbol'];
  dataSource = ELEMENT_DATA;
  color: ThemePalette = 'primary';

  mode: ProgressSpinnerMode = 'determinate';


}
