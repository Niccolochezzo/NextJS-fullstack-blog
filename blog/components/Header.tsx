import React from "react";

import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Link className="flex items-center space-x-2" href="/">
          Nikos Blog
        </Link>
      </div>
      <div>
        <Link
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#ff3333] flex items-center rounded-full text-center"
          href="https://www.instagram.com/nikocherkezi/"
          target="_blank"
        >
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
