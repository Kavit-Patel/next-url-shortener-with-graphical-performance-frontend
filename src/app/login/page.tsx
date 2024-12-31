"use client";
import GoogleLoginButton from "@/components/GoogleLoginButton";

const LoginPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-700">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Login</h1>
        <GoogleLoginButton />
        <p className="text-sm text-gray-600 mt-4">
          Redirecting you to a secure Google login page...
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
