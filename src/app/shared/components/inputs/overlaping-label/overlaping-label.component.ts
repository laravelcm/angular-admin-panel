import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-overlaping-label',
  templateUrl: './overlaping-label.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OverlapingLabelComponent),
      multi: true,
    },
  ],
})
export class OverlapingLabelComponent implements ControlValueAccessor {
  value: string = '';

  @Input() label!: string | null;
  @Input() placeholder!: string | null;
  @Input() name!: string;
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() disabled!: boolean;
  @Input() containerClass!: string;
  @Input() inputClass!: string;
  @Input() helpText!: string | null;

  writeValue(value: string): void {
    if (value !== undefined) {
      this.value = value;
      this.onChange(value);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onChange = (value: string) => {};

  onTouched = () => {};
}
