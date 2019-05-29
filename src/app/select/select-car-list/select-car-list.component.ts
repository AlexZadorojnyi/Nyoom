import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-select-car-list',
  templateUrl: './select-car-list.component.html',
  styleUrls: ['./../select.component.css']
})
export class SelectCarListComponent implements OnInit {
  carsService: CarsService;
  filters: any = {};

  constructor(carsService: CarsService) {
    this.carsService = carsService;
    this.filters = this.carsService.filters;
  }

  ngOnInit() {
    this.carsService.filtersChanged.subscribe(
      () => {
        this.filters = this.carsService.filters;
      }
    );
  }
}
