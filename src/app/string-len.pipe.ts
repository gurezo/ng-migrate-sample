import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLen'
})
export class StringLenPipe implements PipeTransform {
  transform(value: string, size: number): string {
    value = value === null ? '' : value;
    const len = value.length;

    if (len > size) {
      return value.slice(0, size - 3) + '...';
    } else {
      return value;
    }
  }
}
