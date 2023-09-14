import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-between">
      <div className="flex items-center">
        <a href="/" className="text-white font-bold font-mono text-2xl">
          Products App
        </a>
      </div>
      <div className="flex space-x-4">
        <Link href="/products">
          <h2 className="text-white font-semibold">Products</h2>
        </Link>
        <Link href="/">
          <h2 className="text-white font-semibold">Home</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
