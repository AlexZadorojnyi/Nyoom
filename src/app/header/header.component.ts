import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  carsService: CarsService;
  games: { id: string; title: string; }[];
  gameA: { id: string, title: string; };
  gameB: { id: string, title: string; };
  setRelations = [
    { id: 'Union', title: 'Union' },
    { id: 'SetA', title: 'Set A' },
    { id: 'SetB', title: 'Set B' },
    { id: 'Intersection', title: 'Intersection' },
    { id: 'ComplimentB', title: 'Compliment of B' },
    { id: 'ComplimentA', title: 'Compliment of A' },
    { id: 'Difference', title: 'Symmetric differnece' },
  ];
  setRelation = this.setRelations[3];

  constructor(carsService: CarsService) {
    this.carsService = carsService;
  }

  ngOnInit() {
    this.games = this.carsService.games;
    this.gameA = this.carsService.getRandomGame();
    this.gameB = this.carsService.getRandomGame();
    while (this.gameA === this.gameB) {
      this.gameB = this.carsService.getRandomGame();
    }
    this.updateCarList();
  }

  updateCarList() {
    this.carsService.updateCarList(this.gameA.id, this.gameB.id, this.setRelation.id);
    console.log('hello');
  }

}
