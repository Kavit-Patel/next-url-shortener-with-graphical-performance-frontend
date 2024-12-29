import React from "react";
import { IUrl, IUser } from "@/types";
import Link from "next/link";

const MyUrlsUi = ({ user }: { user: IUser }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl font-bold mb-6 text-center">URLs</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="font-semibold text-gray-700">Long URL</div>
        <div className="font-semibold text-gray-700">Short URL</div>
        <div className="font-semibold text-gray-700">Created At</div>
        <div className="font-semibold text-gray-700">Alias</div>
      </div>
      {user.urls.map((url: IUrl, index: number) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 mt-2 rounded-lg shadow hover:bg-gray-50"
        >
          <div className="truncate text-gray-600">{url.longUrl}</div>
          <div className="text-blue-500">
            <Link
              href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${url.shortUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {url.shortUrl}
            </Link>
          </div>
          <div className="text-gray-600">
            {new Date(url.createdAt).toLocaleString()}
          </div>
          <div className="text-gray-600">{url.alias || "N/A"}</div>
        </div>
      ))}
    </div>
  );
};

export default MyUrlsUi;
