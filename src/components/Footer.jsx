import Link from "next/link";
import React from "react";
import CountryLocal from "./CountryLocal";

const Footer = () => {
  return (
    <footer className=" absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full ">
      <div className="border-b px-8 py-3 ">
        <CountryLocal />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <div className="flex items-center space-x-6">
          <Link href="#" className="hover:underline">
            About
          </Link>
          <Link href="#" className="hover:underline">
            Advertizing
          </Link>
          <Link href="#" className="hover:underline">
            Business
          </Link>
          <Link href="#" className="hover:underline">
            How Search Works
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="#" className="hover:underline">
            Privacy
          </Link>
          <Link href="#" className="hover:underline">
            Terms
          </Link>
          <Link href="#" className="hover:underline">
            Setting
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
