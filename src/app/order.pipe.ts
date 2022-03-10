import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { bleList } from './main';

@Pipe({
  name: 'order', pure: true
})
export class OrderPipe implements PipeTransform {

  transform(arr: bleList[], order: any): unknown {
    console.log('bfore', arr, order)
    // arr.map((res, index) => {
    //   if(res.isBLEMatched){
    //     res.SNo = index + 1;
    //   }
    //   return res;
    // })
    console.log('after', arr, order)
    const newArr=_.orderBy(arr, order, 'asc');
    if(newArr.length) return newArr;
    else return arr;
  }

}
