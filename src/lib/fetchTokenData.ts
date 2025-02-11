import { TokenDetails, KasplexTokenResponse } from "@/types/token";

const API_URL = process.env.NEXT_PUBLIC_KASPA_API_URL;

export async function fetchTokenDetails(tokenId: string): Promise<TokenDetails | null> {
  if (!API_URL) throw new Error("API URL is missing in .env.local");

  try {
    const res = await fetch(`${API_URL}/krc20/token/${tokenId}`);
    if (!res.ok) throw new Error("Failed to fetch token details");

    const data: KasplexTokenResponse = await res.json();

    if (!data.result || !Array.isArray(data.result) || data.result.length === 0) {
      throw new Error("Invalid API response format or token not found");
    }

    return data.result[0];
  } catch (error) {
    console.error("Error fetching token details:", error);
    return null;
  }
}
