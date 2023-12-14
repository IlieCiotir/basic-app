import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix',
  standalone: true,
})
export class PrefixPipe implements PipeTransform {

  transform(value: number | string | null, prefix: string = '$', suffix: string | null = '') {
    return `${prefix}${value}${suffix?.toUpperCase()}`;
  }

}
