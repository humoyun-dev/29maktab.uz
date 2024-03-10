import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { Loading, Register } from "@/components";
import axios from "axios";
import api from "@/api.json";
import { useRouter } from "next/router"; // Import useRouter hook
import { useDispatch } from "react-redux";
import {
  setMassage,
  setToken,
  setUserData,
} from "@/redux/reducers/user.reducer";
import { toast } from "react-toastify";

const LoginPage: NextPage<LoginPageProps> = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const OpenOrCloseRegister = () => {
    setOpen((open) => !open);
  };
  const handlerLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${api.api}/users/login/`, {
        phone_number: username,
        password: password,
      });
      if (response.status === 200) {
        await router.push("/")
        setLoading(false);
        dispatch(setUserData(response.data.user_data));
        dispatch(setToken(response.data.token));
        dispatch(setMassage(response.data.message));

        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "user-data",
          JSON.stringify(response.data.user_data),
        );
      } else {
        console.log(response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const valid = username && password;

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={`w-full relative h-screen flex items-center justify-center`}
    >
      <Link
        className={`absolute bg-neutral-50 flex items-center justify-center gap-x-1 border py-1 px-4 top-2 left-2 text-black hover:bg-black hover:text-white duration-200 rounded-lg`}
        href={`/`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
          />
        </svg>
        Bosh sahifa
      </Link>
      <div
        className={`md:w-1/3 w-11/12 bg-neutral-50 border rounded-lg p-8 shadow-md`}
      >
        <div
          className={`mx-auto w-full text-center mb-6 flex flex-col items-center justify-center`}
        >
          <Image
            className={`w-24 mb-2`}
            src={`/logo.png`}
            alt={`logo`}
            width={999}
            height={999}
          />
          <h3
            className={`text-2xl font-[500]`}
          >{`29-Ixtisoslashgan Davlat Umumta'lim Maktabi`}</h3>
        </div>
        <form className={`gap-y-4 flex flex-col`}>
          <Input
            type={"text"}
            variant="outlined"
            size={"lg"}
            required={true}
            onChange={(e) => setUsername(e.target.value)}
            label="Email or Username"
            className={`w-full`}
            name={`username`}
            crossOrigin={undefined}
          />

          <Input
            variant="outlined"
            size={"lg"}
            label="Password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            name={`password`}
            className={`w-full`}
            crossOrigin={undefined}
          />
          <button
            type={"button"}
            onClick={
              !valid
                ? () => {
                    return false;
                  }
                : () => handlerLogin()
            }
            className={`w-full mt-3 bg-black duration-300 text-white py-2 text-lg rounded-lg ${
              !valid ? "bg-gray-600" : ""
            }`}
          >
            Kirish
          </button>
        </form>
        <div className={`mt-4 flex justify-center items-center`}>
          <p
            onClick={OpenOrCloseRegister}
            className={`font-[400] cursor-pointer hover:underline underline-offset-4 text-gray-800 hover:text-black duration-100`}
          >
            Account yaratish
          </p>
        </div>
      </div>
      <Register open={open} OpenOrCloseRegister={OpenOrCloseRegister} />
    </div>
  );
};

export default LoginPage;

interface LoginPageProps {}
