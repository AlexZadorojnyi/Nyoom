import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-compare-car-list',
  templateUrl: './compare-car-list.component.html',
  styleUrls: ['./../compare.component.scss']
})
export class CompareCarListComponent implements OnInit {
  carsService: CarsService;
  carList = new Array();

  constructor(carsService: CarsService) {
    this.carsService = carsService;
  }

  ngOnInit() {
    this.carsService.carListChanged.subscribe(
      () => {
        this.carList = this.carsService.carList;
      }
    );
  }

}
