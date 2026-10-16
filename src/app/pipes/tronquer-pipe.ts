
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tronquer'
})
export class TronquerPipe implements PipeTransform {

  transform(value: string, limite: number): string {
    if (!value || value.length <= limite) {
      return value;
    }

    return value.substring(0, limite) + '…';
  }
}
