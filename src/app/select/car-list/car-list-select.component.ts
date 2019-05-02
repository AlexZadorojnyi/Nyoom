import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-car-list-select',
  templateUrl: './car-list-select.component.html',
  styleUrls: ['./car-list-select.component.css']
})
export class CarListSelectComponent implements OnInit {
  carsService: CarsService;

  constructor(carsService: CarsService) {
    this.carsService = carsService;
  }

  ngOnInit() {
  }
}
