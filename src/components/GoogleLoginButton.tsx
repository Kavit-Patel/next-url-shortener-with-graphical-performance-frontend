"use client";

const GoogleLoginButton = () => {
  return (
    <button
      className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      onClick={() =>
        (window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`)
      }
    >
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
