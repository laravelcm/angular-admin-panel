import { Pipe, PipeTransform } from '@angular/core';

import { status } from '@app/shared/interfaces/values.interface';

@Pipe({
  name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case status.pending.label:
        return 'bg-orange-100 text-orange-800';
      case status.success.label:
        return 'bg-green-100 text-green-800';
      case status.failed.label:
        return 'bg-red-100 text-red-800';
      case status.rejected.label:
        return 'bg-pink-100 text-pink-800';
      case status.canceled.label:
        return 'bg-rose-100 text-rose-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  }
}
