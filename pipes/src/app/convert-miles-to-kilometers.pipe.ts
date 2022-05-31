import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMilesToKilometers',
})
export class ConvertMilesToKilometersPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (!value) {
      return '';
    }
    return value * 1.609;
  }
}
