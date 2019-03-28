import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  carsService: CarsService;
  carList = new Array();

  constructor(carsService: CarsService) {
    this.carsService = carsService;
  }

  ngOnInit() {
    // Nothing happens when the page is loaded
    this.carsService.carListChanged.subscribe(
      () => {
        this.carList = this.carsService.carList;
        console.log(this.carList);
      }
    );
  }

}
