import { Component, OnInit, AfterContentInit } from '@angular/core';
import { CarsService } from '../../cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compare-header',
  templateUrl: './compare-header.component.html',
  styleUrls: ['./../compare.component.scss']
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
    this.games = this.carsService.games;
    this.gameA = Object.assign({}, this.carsService.getRandomGame());
    do {
      this.gameB = Object.assign({}, this.carsService.getRandomGame());
    } while (this.gameA === this.gameB);

    this.carsService.resetFilterSettings();

    this.activatedRoute.params.subscribe(
      (params) => {
        if (typeof params.gameA !== 'undefined' &&
            typeof params.setRelation !== 'undefined' &&
            typeof params.gameB !== 'undefined') {

          this.carsService.games.forEach(game => {
            if (game.id === params.gameA) {
              this.gameA = Object.assign({}, game);
            }
            if (game.id === params.gameB) {
              this.gameB = Object.assign({}, game);
            }
          });

          this.setRelations.forEach(sr => {
            if (sr.id === params.setRelation) {
              this.setRelation = Object.assign({}, sr);
            }
          });

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
