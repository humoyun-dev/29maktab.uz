import React from "react";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

interface MenuDrawerProps {
  open: boolean;
  closeDrawer: any;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ open, closeDrawer }) => {
  const router = useRouter();
  const userToken = useSelector((state: any) => state.user.token);
  const handleLogOut = () => {
    localStorage.clear();
    router.reload();
  };

  return (
    <Drawer
      placement={"right"}
      open={open}
      onClose={closeDrawer}
      className="p-4 z-[99999]" // @ts-ignore
      size={"100%"}
    >
      <div className="mb-6 flex items-center justify-between">
        <Typography
          variant="h4"
          color="blue-gray"
          className={`flex items-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
          Menu
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <div>
        <ul className={`flex flex-col items-center w-full gap-y-7`}>
          {[
            { path: "/", label: "Bosh sahifa" },
            { path: "/blog", label: "Maqola" },
            { path: "/library", label: "Kutubxona" },
            { path: "/about", label: "Maktab haqida" },
            { path: "/contact", label: "Aloqa" },
          ].map(({ path, label }) => (
            <li key={path}>
              <Link
                href={path}
                className={`text-xl text-center text-gray-900 hover:underline hover:text-black underline-offset-4 ${
                  router.asPath === path
                    ? "underline !text-black font-[500]"
                    : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`mt-10 w-full`}>
          {userToken ? (
            <button
              onClick={handleLogOut}
              className={`bg-neutral-800 w-full justify-center text-xl text-white py-4 rounded font-[500] shadow-md border-black hover:black duration-300 flex items-center gap-x-2`}
            >
              Chiqish
            </button>
          ) : (
            <button
              onClick={() => router.push("/auth/login")}
              className={`bg-neutral-800 w-full justify-center text-xl text-white py-4 rounded font-[500] shadow-md border-black hover:black duration-300 flex items-center gap-x-2`}
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
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default MenuDrawer;
