import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="h-screen grid text-center place-content-center">
        <span className="text-7xl font-black">404</span>
        <span className="text-3xl block">Page Not Found</span>
        <Link
          to="/home"
          className="bg-primary px-4 py-2 text-2xl my-5 text-white"
        >
          Go Back
        </Link>
      </div>
    </>
  );
}
