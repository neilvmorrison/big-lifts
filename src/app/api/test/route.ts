import { getTest } from "@/lib/test/get";
import { tryCatch } from "@/lib/try-catch";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const result = await tryCatch(() => getTest({ throwError: false }));

  if (result.error) {
    const message =
      result.error instanceof Error
        ? result.error.message
        : typeof result.error === "object" &&
          result.error !== null &&
          "message" in result.error
        ? String((result.error as { message: unknown }).message)
        : "An unexpected error occurred";

    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ ...result.data, success: true }, { status: 200 });
}
