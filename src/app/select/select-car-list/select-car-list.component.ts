import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-select-car-list',
  templateUrl: './select-car-list.component.html',
  styleUrls: ['./../select.component.scss']
})
export class SelectCarListComponent implements OnInit {
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
}
