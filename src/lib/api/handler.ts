import { ApiError } from "../errors/api-error";
import { tryCatch } from "../try-catch";

export interface IApiHandlerReturn {
  success: boolean;
  status: number;
  data: Response | null;
}

export async function apiHandler(
  url: string,
  { options = {} }: { options?: RequestInit } = {}
): Promise<IApiHandlerReturn> {
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
        data: responseData,
      };
    } catch (error) {
      return {
        success: data.ok,
        status: data.status,
        data: data,
      };
    }
  }

  return {
    success: false,
    status: 500,
    data: null,
  };
}
