import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
 name: 'sortGamesPipe',
 pure: false
})
export class SortGamesPipe implements PipeTransform {

  transform(array: Array<any>, args: any): Array<any> {

    if (!array || array === undefined || array.length === 0) { return null; }
    // console.log(args);

    if (typeof args.gamesFilter !== 'undefined') {

      // Filter by type
      array = array.filter((a: any) => {
        if (args.gamesFilter.type === '') {
          return true;
        } else {
          return a.type === args.gamesFilter.type;
        }
      });
    }

    // Sort by percentage
    if (args.gamesSort === 'pct') {
      array.sort((a: any, b: any) => {
        if (a.pct > b.pct) {
          return -1;
        } else if (a.pct < b.pct) {
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

    // Sort by order (title)
    } else if (args.gamesSort === 'order') {
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
    } else if (args.gamesSort === 'releaseDate') {
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

    return array;
  }

}
