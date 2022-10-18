import { Pipe, PipeTransform } from '@angular/core';

import { status } from '@app/shared/interfaces/values.interface';

@Pipe({
  name: 'statusValue',
})
export class StatusValuePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case status.pending.label:
        return status.pending.locale;
      case status.success.label:
        return status.success.locale;
      case status.failed.label:
        return status.failed.locale;
      case status.rejected.label:
        return status.rejected.locale;
      case status.canceled.label:
        return status.canceled.locale;
      default:
        return $localize`Pas disponible`;
    }
  }
}
