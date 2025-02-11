"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchTokenDetails } from "@/lib/fetchTokenData";
import { TokenDetails } from "@/types/token";
import Image from "next/image";
import Search from "@/components/Search";

export default function TokenPage() {
  const { id } = useParams() as { id: string };
  const [token, setToken] = useState<TokenDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTokenData = async () => {
      if (!id) return;

      setLoading(true);
      const tokenDetails = await fetchTokenDetails(id);
      setToken(tokenDetails);
      setLoading(false);
    };

    loadTokenData();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!token) return <p className="text-center mt-10">Token not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {token.logo ? (
            <Image src={token.logo} alt={`${token.tick} Logo`} width={50} height={50} className="rounded-full" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500 dark:text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          )}

          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{token.tick}</h1>
            <p className="text-gray-600 dark:text-gray-400">Minting Model: {token.mod}</p>
          </div>
        </div>

        <div className="ml-auto">
          <Search />
        </div>
      </div>

      <div className="mt-4 border-t pt-4 text-sm text-gray-600 dark:text-gray-300">
        <p><strong>Max Supply:</strong> {parseInt(token.max).toLocaleString()}</p>
        <p><strong>Supply Limit per Address:</strong> {parseInt(token.lim).toLocaleString()}</p>
        <p><strong>Total Minted:</strong> {parseInt(token.minted).toLocaleString()}</p>
        <p><strong>Total Burned:</strong> {parseInt(token.burned).toLocaleString()}</p>
        <p><strong>Decimals:</strong> {token.dec}</p>
        <p><strong>Holders Count:</strong> {token.holderTotal}</p>
        <p><strong>Total Transfers:</strong> {token.transferTotal}</p>
        <p><strong>Total Mints:</strong> {token.mintTotal}</p>
      </div>

      <h2 className="text-xl font-semibold mt-6">Top Holders</h2>
      {token.holder.length > 0 ? (
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="p-2 border dark:border-gray-600">Address</th>
                <th className="p-2 border dark:border-gray-600">Amount</th>
              </tr>
            </thead>
            <tbody>
              {token.holder.map((holder, index) => (
                <tr key={index} className="text-center border dark:border-gray-700">
                  <td className="p-2 border break-words dark:border-gray-600">
                    {holder.address}
                  </td>
                  <td className="p-2 border dark:border-gray-600">
                    {parseInt(holder.amount).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">No holders available</p>
      )}
    </div>
  );
}
