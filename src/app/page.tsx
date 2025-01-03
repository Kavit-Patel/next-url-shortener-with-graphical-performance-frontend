"use client";

import Loader from "@/components/Loader";
import { useShortUrl, useUserLogin } from "@/lib/query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
  const router = useRouter();
  const [longUrl, setLongUrl] = useState("");
  const { data: user } = useUserLogin();
  const { mutate: mutateShortUrl, isPending } = useShortUrl();
  const handleShortenUrl = () => {
    if (!user?.id) {
      toast.error("Login first !");
      router.push("/login");
      return;
    }
    mutateShortUrl({ longUrl, userId: user.id });
  };
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-r from-sky-900 to-violet-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          🔗 URL Shortener
        </h1>
        <div className="relative">
          <input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Paste your long URL here..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
          />
          <span className="absolute top-2.5 right-3 text-gray-400">🌐</span>
        </div>
        <button
          onClick={handleShortenUrl}
          disabled={isPending}
          className={`mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium px-4 py-2 rounded-lg 
            ${
              isPending
                ? "opacity-50 cursor-not-allowed"
                : "hover:from-blue-600 hover:to-blue-700"
            }
          `}
        >
          {isPending ? (
            <Loader width={30} height={30} color="orange" />
          ) : (
            "Shorten URL"
          )}
        </button>
        <p className="mt-6 text-center text-sm text-gray-500">
          Simplify your links with our easy-to-use URL shortener.
        </p>
      </div>
    </div>
  );
};

export default Home;
