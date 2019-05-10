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
        if (args.gamesFilter.games && args.gamesFilter.movies) {
          return true;
        } else if (args.gamesFilter.games) {
          return a.type === 'game';
        } else if (args.gamesFilter.movies) {
          return a.type === 'movie';
        }
      });
    }

    // Sort by percentage
    if (args.gamesSort.pct) {
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
    } else if (args.gamesSort.title) {
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
    } else if (args.gamesSort.year) {
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
    if (args.gamesSort.reverse) {
      array.reverse();
    }

    return array;
  }

}
