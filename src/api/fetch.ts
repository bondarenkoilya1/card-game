import { API_URL } from "src/config";

const baseUrl = API_URL;

// TODO: Doesn't log any helpful information about error. Refactor (response.text(), ...etc)
export async function fetchItem<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${baseUrl}${url}`, options);

  if (!response.ok) {
    throw new Error(`Network response was not ok. Response status: ${response.status}`);
  }

  return (await response.json()) as T;
}
