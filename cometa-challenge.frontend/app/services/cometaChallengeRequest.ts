export async function cometaChallengeRequest<T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: object
): Promise<T> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/${endpoint}`,
      {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error calling API at ${endpoint}:`, error);
    throw error;
  }
}
