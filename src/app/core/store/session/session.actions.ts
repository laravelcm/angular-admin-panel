import { createAction, props } from '@ngrx/store';

import { IValidationError } from '@app/core/interfaces/session.interface';

export const fetchFormsErrorAction = createAction(
  '[Session] Get Forms Errors',
  props<{ formErrors: IValidationError }>()
);

export const clearErrorsAction = createAction('[Session] Clear Forms Errors');
