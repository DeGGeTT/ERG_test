import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertRatePipe implements PipeTransform {
  transform(value: number): string {
    return !!value ?  (100 / (value * 100)).toFixed(2) : '0'
  }
}
