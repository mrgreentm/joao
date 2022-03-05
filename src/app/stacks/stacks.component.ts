import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

export interface Stacks {
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Stacks[] = [
  { name: 'Angular', weight: 80, symbol: '/assets/angular.svg' },
  { name: 'Angular Material', weight: 90, symbol: '/assets/material.svg' },
  { name: 'Web Components', weight: 75, symbol: '/assets/components.svg' },
  { name: 'Forms', weight: 60, symbol: '/assets/forms.svg' },
  { name: 'JavaScript', weight: 70, symbol: '/assets/js.png' },
  { name: 'HTML5', weight: 90, symbol: '/assets/html-5.png' },
  { name: 'CSS', weight: 85, symbol: '/assets/css-3.png' },
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
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  color: ThemePalette = 'primary';

  mode: ProgressSpinnerMode = 'determinate';


}
