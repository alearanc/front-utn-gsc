import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const matchEmail: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const email = control.get('email');
  const confirmEmail = control.get('confirmEmail');

  if (email && confirmEmail && email?.value != confirmEmail?.value) {
    return {
      emailMatchError: true,
    };
  }
  return null;
};
