import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav
      className={`w-full sticky top-0 z-[99999] bg-white/50 backdrop-blur-lg py-2 mx-auto border-b ${inter.className}`}
    >
      <div className={`md:w-10/12 mx-auto flex justify-between items-center`}>
        <div
          onClick={() => router.push("/")}
          className={`flex cursor-pointer items-center gap-x-2`}
        >
          <Image
            className={`w-14`}
            src={`/logo.png`}
            alt={"logo"}
            width={999}
            height={999}
          />
          <h1 className={`text-3xl font-[600]`}>29-IDUM</h1>
        </div>
        <ul className={`flex items-center gap-x-4`}>
          <li>
            <Link
              className={`text-lg text-gray-900 hover:underline hover:text-black underline-offset-4 ${
                router.asPath === "/" ? "underline !text-black font-[500]" : ""
              }`}
              href={"/"}
            >
              Bosh sahifa
            </Link>
          </li>
          <li>
            <Link
              className={`text-lg text-gray-900 hover:underline hover:text-black underline-offset-4 ${
                router.asPath === "/blog"
                  ? "underline !text-black font-[500]"
                  : ""
              }`}
              href={"/blog"}
            >
              Maqola
            </Link>
          </li>
          <li>
            <Link
              className={`text-lg text-gray-900 hover:underline hover:text-black underline-offset-4 ${
                router.asPath === "/library"
                  ? "underline !text-black font-[500]"
                  : ""
              }`}
              href={"/library"}
            >
              Kutubxona
            </Link>
          </li>
          <li>
            <Link
              className={`text-lg text-gray-900 hover:underline hover:text-black underline-offset-4 ${
                router.asPath === "/about"
                  ? "underline !text-black font-[500]"
                  : ""
              }`}
              href={"/about"}
            >
              Maktab haqida
            </Link>
          </li>
          <li>
            <Link
              className={`text-lg text-gray-900 hover:underline hover:text-black underline-offset-4 ${
                router.asPath === "/contact"
                  ? "underline !text-black font-[500]"
                  : ""
              }`}
              href={"/contact"}
            >
              Aloqa
            </Link>
          </li>
        </ul>
        <div>
          <button
            onClick={() => router.push("/auth/login")}
            className={`bg-neutral-800 text-white py-2 px-5 rounded font-[500] shadow-md border-black hover:black duration-300 flex items-center gap-x-2`}
          >
            Kirish
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2H12V13H4.5C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14H12C12.5523 14 13 13.5523 13 13V2C13 1.44772 12.5523 1 12 1H4.5ZM6.60355 4.89645C6.40829 4.70118 6.09171 4.70118 5.89645 4.89645C5.70118 5.09171 5.70118 5.40829 5.89645 5.60355L7.29289 7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H7.29289L5.89645 9.39645C5.70118 9.59171 5.70118 9.90829 5.89645 10.1036C6.09171 10.2988 6.40829 10.2988 6.60355 10.1036L8.85355 7.85355C9.04882 7.65829 9.04882 7.34171 8.85355 7.14645L6.60355 4.89645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
