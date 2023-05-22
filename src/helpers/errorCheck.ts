import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  );
}

export function errorCheck(err: unknown) {
  if (isFetchBaseQueryError(err)) {
    const errMsg = 'error' in err ? err.error : JSON.stringify(err.data);
    return errMsg;
  } else if (isErrorWithMessage(err)) {
    return err.message;
  }
}
