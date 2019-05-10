import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-game-list-select',
  templateUrl: './game-list-select.component.html',
  styleUrls: ['./game-list-select.component.css']
})
export class GameListSelectComponent implements OnInit {
  carsService: CarsService;
  games = new Array();
  filters: any = {};

  constructor(carsService: CarsService) {
    this.carsService = carsService;
    this.games = this.carsService.games;
    this.filters = this.carsService.filters;
  }

  ngOnInit() {
    this.carsService.gameListChanged.subscribe(
      () => {
        this.games = this.carsService.games;
      }
    );
    this.carsService.filtersChanged.subscribe(
      () => {
        this.filters = this.carsService.filters;
      }
    );
  }

}
