import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-select-filter-cars',
  templateUrl: './select-filter-cars.component.html',
  styleUrls: ['../select.component.scss']
})
export class SelectFilterCarsComponent implements OnInit {
  carsService: CarsService;
  filterSettings: any = {};
  carMakes = new Array();

  constructor(carsService: CarsService) {
    this.carsService = carsService;
    this.filterSettings = this.carsService.filterSettings;
    this.carMakes = this.carsService.getAllCarMakes(this.carsService.cars['All']);
  }

  ngOnInit() {
    this.carsService.filtersChanged.subscribe(
      () => {
        this.filterSettings = this.carsService.filterSettings;
      }
    );
  }
}
