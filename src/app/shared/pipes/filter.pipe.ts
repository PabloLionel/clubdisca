import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(target: any[], valueSearch: string, ...args: any[]): any {
    const re = new RegExp(`${valueSearch}`, 'gi');
    return !valueSearch ?
      target
      : target.filter(x => re.test(JSON.stringify(x)));
  }
}
