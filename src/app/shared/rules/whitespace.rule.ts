import { AbstractControl, ValidatorFn } from '@angular/forms';

export class WhiteSpaceRule {
  static noWhitespace(controlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const isWhitespace = (control?.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { whitespace: true };
    };
  }
}
