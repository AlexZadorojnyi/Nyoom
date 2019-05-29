import { Component, OnInit, AfterContentInit } from '@angular/core';
import { CarsService } from '../../cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compare-header',
  templateUrl: './compare-header.component.html',
  styleUrls: ['./../compare.component.css']
})
export class CompareHeaderComponent implements OnInit, AfterContentInit {
  carsService: CarsService;
  games: { id: string; title: string; }[];
  gameA = { id: 'NFSU', title: '' };
  gameB = { id: 'NFSU2', title: '' };
  setRelation = { id: 'Intersection', title: 'Intersection' };
  setRelations = [
    { id: 'Union', title: 'Union' },
    { id: 'SetA', title: 'Set A' },
    { id: 'SetB', title: 'Set B' },
    { id: 'Intersection', title: 'Intersection' },
    { id: 'ComplimentB', title: 'Compliment of B' },
    { id: 'ComplimentA', title: 'Compliment of A' },
    { id: 'Difference', title: 'Symmetric differnece' },
  ];
  activatedRoute: ActivatedRoute;

  constructor(carsService: CarsService, activatedRoute: ActivatedRoute) {
    this.carsService = carsService;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    // This whole bit is super hacky
    // If temp1 and temp2 are removed, duplicates of the games appear in the dropdowns
    // TO DO: fix that and unhackify this
    this.games = this.carsService.games;
    const temp1 = this.carsService.getRandomGame();
    let temp2 = this.carsService.getRandomGame();
    while (temp1 === temp2) {
      temp2 = this.carsService.getRandomGame();
    }
    this.gameA.id = temp1.id;
    this.gameA.title = temp1.title;
    this.gameB.id = temp2.id;
    this.gameB.title = temp2.title;
    this.carsService.resetFilters();

    this.activatedRoute.params.subscribe(
      (params) => {
        if (typeof params.gameA !== 'undefined' && typeof params.setRelation !== 'undefined' && typeof params.gameB !== 'undefined') {
          // Titles should be set too
          this.gameA.id = params.gameA;
          this.setRelation.id = params.setRelation;
          this.gameB.id = params.gameB;
          this.updateCarList();
        }
      }
    );
  }

  ngAfterContentInit () {
    this.updateCarList();
  }

  updateCarList() {
    this.carsService.updateCarList(this.gameA.id, this.gameB.id, this.setRelation.id);
  }

}
