import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-car-list-compare',
  templateUrl: './car-list-compare.component.html',
  styleUrls: ['./car-list-compare.component.css']
})
export class CarListCompareComponent implements OnInit {
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
