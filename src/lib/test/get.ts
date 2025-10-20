"use server";

export async function getTest({
  throwError,
}: {
  throwError?: boolean;
}): Promise<{ message: string }> {
  if (throwError) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject({ message: "The test returned an error" }), 1500);
    });
  }
  return new Promise((resolve) =>
    setTimeout(() => resolve({ message: "The Test was Successful!" }), 1500)
  );
}
