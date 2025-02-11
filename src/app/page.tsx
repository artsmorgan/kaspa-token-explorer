"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [tokenId, setTokenId] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (tokenId.trim()) router.push(`/token/${tokenId}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <Image src="/logo.png" alt="Kaspa Logo" width={100} height={100} className="mb-6" />

      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Kaspa Token Explorer</h1>

      <div className="relative w-80">
        <input
          type="text"
          placeholder="Enter Token ID..."
          className="border p-2 rounded w-full bg-white dark:bg-gray-700 text-black dark:text-white"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
        />
      </div>

      <button
        onClick={handleSearch}
        className="mt-4 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </div>
  );
}
