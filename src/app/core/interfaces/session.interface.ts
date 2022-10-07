export type IValidationError = {
  message: string;
  errors: {
    [key: string]: string[];
  };
  status_code: number;
};