import type { Company } from "../types/company";

const COMPANIES_URL = "/companies-lookup.json";

export async function fetchCompanies(): Promise<Company[]> {
  const response = await fetch(COMPANIES_URL);

  if (!response.ok) {
    throw new Error("Failed to load companies");
  }

  return response.json();
}
