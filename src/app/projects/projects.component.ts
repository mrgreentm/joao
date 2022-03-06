import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsAndArticles: Array<any> = [
    { name: 'ISS - PROJECT', url: 'https://github.com/mrgreentm/iss-project' },
    { name: 'Ricky & Morty', url: 'https://github.com/mrgreentm/rick-and-morty' },
    { name: 'Pegasus', url: 'https://github.com/mrgreentm/pegasus' },
    { name: 'Game Dev', url: 'https://github.com/mrgreentm/game-dev' },
    { name: 'Calorimetria - Física 2', url: 'https://github.com/mrgreentm/calorimetry' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
