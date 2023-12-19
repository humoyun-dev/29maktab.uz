import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUserData } from "@/redux/reducers/user.reducer";
import { IconButton } from "@material-tailwind/react";
import MenuDrawer from "@/components/drawers/menu";
import { toast } from "react-toastify";

const Navbar: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [menuDrawer, setMenuDrawer] = useState<boolean>(false);

  const userToken = useSelector((state: any) => state.user.token);
  const userData = useSelector((state: any) => state.user.userData);

  if (userData && userToken) {
  }

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      dispatch(setToken(savedToken));
    }
  }, []);

  useEffect(() => {
    const savedUserData = localStorage.getItem("user-data");

    if (savedUserData) {
      try {
        const parsedUserData = JSON.parse(savedUserData);
        dispatch(setUserData(parsedUserData));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    router.reload();
    toast.info("Log out successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handelMenuDrawer = () => {
    setMenuDrawer((menuDrawer) => !menuDrawer);
  };

  return (
    <>
      <nav
        className={`w-full sticky top-0 z-[99998] bg-white/70 backdrop-blur-md py-2 mx-auto border-b`}
      >
        <div
          className={`md:w-10/12 w-11/12 mx-auto flex justify-between items-center`}
        >
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
          <ul className={`md:flex hidden items-center gap-x-4`}>
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
                  className={`text-lg text-gray-900 hover:underline hover:text-black underline-offset-4 ${
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
          <div className={`hidden md:block`}>
            {userToken ? (
              <button
                onClick={handleLogOut}
                className={`bg-neutral-800 text-white py-2 px-5 rounded font-[500] shadow-md border-black hover:black duration-300 flex items-center gap-x-2`}
              >
                Chiqish
              </button>
            ) : (
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
            )}
          </div>
          <IconButton
            onClick={() => setMenuDrawer(true)}
            className={`md:hidden block cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </IconButton>
        </div>
      </nav>
      <MenuDrawer open={menuDrawer} closeDrawer={handelMenuDrawer} />
    </>
  );
};

export default Navbar;
