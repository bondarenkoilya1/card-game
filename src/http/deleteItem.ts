import { API_URL } from "src/config";

const baseUrl = API_URL;

export async function deleteItem<T>(url: string, cardId: string): Promise<T> {
  const response = await fetch(`${baseUrl}${url}${cardId}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok. Response status: ${response.status}`);
  }

  return (await response.json()) as T;
}
