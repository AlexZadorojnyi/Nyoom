import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-select-filter-games',
  templateUrl: './select-filter-games.component.html',
  styleUrls: ['../select.component.scss']
})
export class SelectFilterGamesComponent implements OnInit {
  carsService: CarsService;
  filterSettings: any = {};

  constructor(carsService: CarsService) {
    this.carsService = carsService;
    this.filterSettings = this.carsService.filterSettings;
  }

  ngOnInit() {
    this.carsService.filtersChanged.subscribe(
      () => {
        this.filterSettings = this.carsService.filterSettings;
      }
    );
  }

  filterGamesType = function (str: string) {
    if (str === 'games') {
      this.filterSettings.games.gamesFilter = !this.filterSettings.games.gamesFilter;
      if (this.filterSettings.games.gamesFilter === false && this.filterSettings.games.moviesFilter === false) {
        this.filterSettings.games.moviesFilter = true;
      }
    } else if (str === 'movies') {
      this.filterSettings.games.moviesFilter = !this.filterSettings.games.moviesFilter;
      if (this.filterSettings.games.gamesFilter === false && this.filterSettings.games.moviesFilter === false) {
        this.filterSettings.games.gamesFilter = true;
      }
    }
    this.carsService.updateFilterSettings(this.filterSettings);
  };

}
