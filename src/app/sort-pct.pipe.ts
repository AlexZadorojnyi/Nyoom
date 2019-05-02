import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
 name: 'sortPctPipe',
 pure: false
})
export class SortPctPipe implements PipeTransform {

 transform(array: Array<number>, args: number): Array<number> {

  if (!array || array === undefined || array.length === 0) { return null; }

    array.sort((a: any, b: any) => {
      if (a.pct > b.pct) {
        return -1;
      } else if (a.pct < b.pct) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
