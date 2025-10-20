export interface ISuccess<T> {
  data: T;
  error: null;
}
export interface IError<E> {
  data: null;
  error: E;
}

export type ITryCatchReturn<T, E> = ISuccess<T> | IError<E>;

export async function tryCatch<T, E = Error>(
  promise: () => Promise<T>
): Promise<ITryCatchReturn<T, E>> {
  try {
    const result = await promise();
    return {
      data: result,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error as E,
    };
  }
}
