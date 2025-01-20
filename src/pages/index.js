import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-black text-center mb-10">
          Welcome
        </h1>

        <div className="flex flex-col space-y-4 items-center">
          <Link
            href="/file"
            className="w-64 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg text-center hover:bg-blue-600 transition-colors"
          >
            Atom
          </Link>

          <Link
            href="/twind"
            className="w-64 px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg text-center hover:bg-green-600 transition-colors"
          >
            Tailwind CSS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
