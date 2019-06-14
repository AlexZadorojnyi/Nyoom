import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-select-game-list',
  templateUrl: './select-game-list.component.html',
  styleUrls: ['./../select.component.scss']
})
export class SelectGameListComponent implements OnInit {
  carsService: CarsService;
  games = new Array();
  filterSettings: any = {};

  constructor(carsService: CarsService) {
    this.carsService = carsService;
    this.games = this.carsService.games;
    this.filterSettings = this.carsService.filterSettings;
  }

  ngOnInit() {
    this.carsService.gameListChanged.subscribe(
      () => {
        this.games = this.carsService.games;
      }
    );
    this.carsService.filtersChanged.subscribe(
      () => {
        this.filterSettings = this.carsService.filterSettings;
      }
    );
  }

}
