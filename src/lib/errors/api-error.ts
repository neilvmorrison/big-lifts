interface IApiError {
  publicMessage: string;
  errorCode: string;
  httpStatus: number;
  originalError: unknown;
}

export class ApiError extends Error {
  publicMessage: string;
  errorCode: string;
  httpStatus: number;
  originalError: unknown;

  constructor({
    publicMessage,
    errorCode,
    httpStatus,
    originalError,
  }: IApiError) {
    super(`[${errorCode}] ${publicMessage}`);

    this.publicMessage = publicMessage;
    this.errorCode = errorCode;
    this.httpStatus = httpStatus;
    this.originalError = originalError;

    // Set the prototype explicitly
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
