// components/ErrorPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Error 404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        <Link to="/" className="text-white no-underline">
          Go back home
        </Link>
      </button>
    </div>
  );
};

export default ErrorPage;
