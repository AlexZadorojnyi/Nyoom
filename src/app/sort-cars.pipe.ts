import {Pipe, PipeTransform} from '@angular/core';
import { CarsService } from './cars.service';

@Pipe({
 name: 'sortCarsPipe',
 pure: false
})
export class SortCarsPipe implements PipeTransform {
  carsService: CarsService;

  constructor(carsService: CarsService) {
    this.carsService = carsService;
  }

  transform(array: Array<any>, args: any): Array<any> {

    if (!array || array === undefined || array.length === 0) { return null; }
    // console.log(args);

    if (typeof args.carsFilter !== 'undefined') {

      // Filter by make
      array = array.filter((a: any) => {
        if (args.carsFilter.make === '') {
          return true;
        } else {
          return a.make === args.carsFilter.make;
        }
      });

      // Filter by decade
      array = array.filter((a: any) => {
        if (args.carsFilter.decade === -1) {
          return true;
        } else {
          if (a.year > args.carsFilter.decade && a.year - args.carsFilter.decade < 10) {
            return true;
          } else {
            return false;
          }
        }
      });

      // Sort by model
      if (args.carsSort.model) {
        array.sort((a: any, b: any) => {
          if (a.make.toLowerCase() < b.make.toLowerCase()) { return -1;
          } else if (a.make.toLowerCase() > b.make.toLowerCase()) { return 1;
          } else {
            if (a.baseModel.toLowerCase() < b.baseModel.toLowerCase()) { return -1;
            } else if (a.baseModel.toLowerCase() > b.baseModel.toLowerCase()) { return 1;
            } else {
              if (a.year < b.year) { return -1;
              } else if (a.year > b.year) { return 1;
              } else { return 0;
              }
            }
          }
        });
      }

      // Sort by year (reuses sort by model)
      if (args.carsSort.selected) {
        array.sort((a: any, b: any) => {
          if (this.carsService.isSelected(a.make, a.baseModel, a.year) &&
             !this.carsService.isSelected(b.make, b.baseModel, b.year)) { return -1;
          } else if (
            !this.carsService.isSelected(a.make, a.baseModel, a.year) &&
             this.carsService.isSelected(b.make, b.baseModel, b.year)) { return 1;
          } else {
            if (a.make.toLowerCase() < b.make.toLowerCase()) { return -1;
            } else if (a.make.toLowerCase() > b.make.toLowerCase()) { return 1;
            } else {
              if (a.baseModel.toLowerCase() < b.baseModel.toLowerCase()) { return -1;
              } else if (a.baseModel.toLowerCase() > b.baseModel.toLowerCase()) { return 1;
              } else {
                if (a.year < b.year) { return -1;
                } else if (a.year > b.year) { return 1;
                } else { return 0;
                }
              }
            }
          }
        });
      }

      // Sort by selected
      if (args.carsSort.year) {
        array.sort((a: any, b: any) => {
          if (a.year < b.year) { return 1;
          } else if (a.year > b.year) { return -1;
          } else {
            if (a.make.toLowerCase() < b.make.toLowerCase()) { return -1;
            } else if (a.make.toLowerCase() > b.make.toLowerCase()) { return 1;
            } else {
              if (a.baseModel.toLowerCase() < b.baseModel.toLowerCase()) { return -1;
              } else if (a.baseModel.toLowerCase() > b.baseModel.toLowerCase()) { return 1;
              } else { return 0;
              }
            }
          }
        });
      }

      // Reverse order
      if (args.carsSort.reverse) {
        array.reverse();
      }

      return array;
    }
  }
}
