import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { bleList } from './main';

@Pipe({
  name: 'order', pure: false
})
export class OrderPipe implements PipeTransform {

  transform(arr: bleList[], order: any): unknown {
    // console.log('bfore', arr, order)
    if (arr.length > 0) {
      if (order.toLowerCase() === 'active') {
        return arr.filter(a => a.isBLEMatched==true);        
      } else {
        return arr;
      }
    }
  }

}
