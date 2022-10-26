import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'textarea-simple',
  templateUrl: './simple.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaSimpleComponent),
      multi: true,
    },
  ],
})
export class TextareaSimpleComponent implements ControlValueAccessor {
  value: string = '';

  @Input() placeholder: string = '';
  @Input() label!: string;
  @Input() name!: string;
  @Input() class!: string;
  @Input() disabled!: boolean;
  @Input() required!: boolean;
  @Input() helpText!: string;

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
