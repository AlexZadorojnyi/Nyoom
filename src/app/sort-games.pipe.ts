import {Pipe, PipeTransform} from '@angular/core';
import { CarsService } from './cars.service';

@Pipe({
 name: 'sortGamesPipe',
 pure: false
})
export class SortGamesPipe implements PipeTransform {
  carsService: CarsService;

  constructor(carsService: CarsService) {
    this.carsService = carsService;
  }

  transform(array: Array<any>, args: any): Array<any> {

    if (!array || array === undefined || array.length === 0) { return null; }

    if (typeof args !== 'undefined') {

      // Filter by type
      array = array.filter((a: any) => {
        if (args.gamesFilter && args.moviesFilter) {
          return true;
        } else if (args.gamesFilter) {
          return a.type === 'game';
        } else if (args.moviesFilter) {
          return a.type === 'movie';
        }
      });
    }

    // Sort by percentage
    if (args.pctSort) {
      array.sort((a: any, b: any) => {
        const aPct = a.selectedCars / this.carsService.totalSelectedCars;
        const bPct = b.selectedCars / this.carsService.totalSelectedCars;
        if (aPct > bPct) {
          return -1;
        } else if (aPct < bPct) {
          return 1;
        } else {
          if (a.order < b.order) {
            return -1;
          } else if (a.order > b.order) {
            return 1;
          } else {
            return 0;
          }
        }
      });

    // Sort by title (order)
    } else if (args.titleSort) {
      array.sort((a: any, b: any) => {
        if (a.order < b.order) {
          return -1;
        } else if (a.order > b.order) {
          return 1;
        } else {
          return 0;
        }
      });

    // Sort by release date
    } else if (args.yearSort) {
      array.sort((a: any, b: any) => {
        if (a.releaseDate < b.releaseDate) {
          return -1;
        } else if (a.releaseDate > b.releaseDate) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    // Reverse order
    if (args.reverse) {
      array.reverse();
    }

    return array;
  }

}
