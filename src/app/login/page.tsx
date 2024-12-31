"use client";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import { useSimpleUserLogin } from "@/lib/query";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutateAsync, data } = useSimpleUserLogin();
  const handleLogin = async () => {
    if (!email || !password) {
      alert("enter email password ");
    }
    await mutateAsync({ email, password });
  };
  console.log("USER SIMPLE ", data);
  return (
    <div className="flex flex-col gap-4 min-h-[calc(100vh-64px)] items-center justify-center bg-gray-700">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Login</h1>
        <GoogleLoginButton />
        <p className="text-sm text-gray-600 mt-4">
          Redirecting you to a secure Google login page...
        </p>
      </div>
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black px-4 py-1 outline-none text-xl"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-black px-4 py-1 outline-none text-xl"
          />
          <button type="submit" className="text-black text-xl">
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">Simple logic</p>
      </div>
    </div>
  );
};

export default LoginPage;
