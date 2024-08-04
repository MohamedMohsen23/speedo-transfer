import { AbstractControl, ValidatorFn } from '@angular/forms';

export function numericOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const validNumeric = /^\+?\d+$/;
    const isValid = validNumeric.test(control.value);
    return isValid ? null : { numericOnly: true };
  };
}
