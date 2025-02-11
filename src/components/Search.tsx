"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [tokenId, setTokenId] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    if (tokenId.trim()) {
      router.push(`/token/${tokenId}`);
    }
  };

  return (
    <div className="relative w-80">
      <input
        type="text"
        placeholder="Enter Token ID..."
        className="border p-2 rounded w-full bg-white dark:bg-gray-700 text-black dark:text-white"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
      >
        🔍
      </button>
    </div>
  );
}
