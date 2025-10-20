import { ApiError } from "../errors/api-error";
import { tryCatch } from "../try-catch";

export interface IApiHandlerReturn<T> {
  success: boolean;
  status: number;
  data: T | null;
}

export async function apiHandler<T>(
  url: string,
  { options = {} }: { options?: RequestInit } = {}
): Promise<IApiHandlerReturn<T>> {
  const { data, error } = await tryCatch<Response, ApiError>(() =>
    fetch(url, { ...options })
  );

  if (error) {
    return {
      success: false,
      status: parseInt(error.errorCode),
      data: null,
    };
  }

  if (data) {
    try {
      const responseData = await data.json();
      return {
        success: responseData.success ?? data.ok,
        status: data.status,
        data: responseData as T,
      };
    } catch (error) {
      return {
        success: data.ok,
        status: data.status,
        data: null,
      };
    }
  }

  return {
    success: false,
    status: 500,
    data: null,
  };
}
