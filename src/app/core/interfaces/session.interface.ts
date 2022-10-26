export interface SessionState {
  formErrors: IValidationError | null;
}

export type IValidationError = {
  message: string;
  errors: {
    [key: string]: string[];
  };
  status_code: number;
};
