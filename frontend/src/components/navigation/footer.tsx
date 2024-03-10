import React from "react";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";

const Footer: React.FC = () => {
  return (
    <div className={`border-t mt-2 border-black/30 `}>
      <div className={`container mx-auto md:mb-0 mb-5 pt-6`}>
        <div
          className={`grid md:grid-cols-2 border-b pb-5 border-black/30 items-start justify-center`}
        >
          <div>
            <ul>
              <li className={`uppercase font-semibold`}>Foydalanuvchilarga</li>
              <li
                className={`text-sm hover:underline underline-offset-4 cursor-pointer font-sans font-light mt-4`}
              >{`Biz bilan bog'lanish`}</li>
              <li
                className={`text-sm hover:underline underline-offset-4 cursor-pointer font-sans font-light mt-2`}
              >{`Savol-javob`}</li>
            </ul>
          </div>
          <div>
            <ul className={``}>
              <li className={`uppercase font-semibold mb-4`}>
                Ijtimoiy tarmoqlarda ham kuzating
              </li>
              <li className={`flex text-center items-center gap-x-3`}>
                <Link
                  href={"https://www.instagram.com/svetaforuz/"}
                  target={"__blank"}
                  className={`text-2xl text-gray-700 hover:text-red-400 duration-200`}
                >
                  {/* @ts-ignore */}
                  <ion-icon name="logo-instagram"></ion-icon>
                </Link>
                <Link
                  href={"/"}
                  className={`text-2xl text-gray-700 hover:text-black duration-200`}
                >
                  {/* @ts-ignore */}
                  <ion-icon name="logo-tiktok"></ion-icon>
                </Link>
                <Link
                  href={"https://www.youtube.com/@svetaforuz/"}
                  target={"__blank"}
                  className={`text-2xl text-gray-700 hover:text-red-900 duration-200`}
                >
                  {/* @ts-ignore */}
                  <ion-icon name="logo-youtube"></ion-icon>
                </Link>
                <Link
                  href={"https://t.me/svetaforuz"}
                  target={"__blank"}
                  className={`text-2xl text-gray-700 hover:text-blue-500 duration-200`}
                >
                  <i className="bi bi-telegram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`pt-3 flex justify-between items-center md:flex-row flex-col pb-1`}
        >
          <div
            className={`flex flex-row my-2 items-center justify-between gap-x-3`}
          >
            <Link
              className={`text-gray-700 hover:text-black hover:underline underline-offset-4`}
              href={"tel:+998946717170"}
            >
              +998 71 214 84 49
            </Link>
          </div>
          <Typography
            className={`text-sm text-gray-700 md:text-start text-center`}
          >
            «2023©
            <Link className={`ml-1`} target={"_blank"} href={`/`}>
              29maktab.uz
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
