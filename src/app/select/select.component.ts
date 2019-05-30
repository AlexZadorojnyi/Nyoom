import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  carsService: CarsService;
  carMakes = new Array();
  filters: any = {};

  constructor(carsService: CarsService) {
    this.carsService = carsService;
    this.carMakes = this.carsService.carMakes;
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
