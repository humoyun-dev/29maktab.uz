import React, { useState } from "react";
import {
  Alert,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import axios from "axios";
import api from "@/api.json";
import { useRouter } from "next/router";
import {
  setMassage,
  setToken,
  setUserData,
} from "@/redux/reducers/user.reducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Register = ({ open, OpenOrCloseRegister }: any) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  // errors
  const [usernameError, setUsernameError] = useState<string>("");

  const [eye, setEye] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handlerRegister = async () => {
    try {
      const response = await axios.post(`${api.api}/users/register/`, {
        username: username,
        password: password,
        first_name: firstName,
        email: email,
        last_name: lastName,
        phone_number: phoneNumber,
      });
      if (response.status === 201) {
        dispatch(setUserData(response.data.user_data));
        dispatch(setToken(response.data.token));
        dispatch(setMassage(response.data.message));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "user-data",
          JSON.stringify(response.data.user_data),
        );

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

        await router.push("/");
      } else {
      }
    } catch (error) {
      console.log(error);
      // @ts-ignore
      setUsernameError(error.response.data.errors.username.toString());
    }
  };

  const valid =
    username && password && lastName && firstName && password2 && phoneNumber;

  return (
    <Dialog open={open} handler={OpenOrCloseRegister}>
      <DialogHeader
        className={`border-b relative w-full flex justify-center border-gray-500`}
      >
        Accountingizni yarating
        <span
          className={`absolute top-2 cursor-pointer right-2`}
          onClick={OpenOrCloseRegister}
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
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </DialogHeader>
      <DialogBody>
        {usernameError ? <Alert color="red">{usernameError}</Alert> : <></>}
        <form className={`overflow-auto md:h-full h-[300px]`}>
          <div
            className={`flex md:flex-row flex-col items-center justify-between md:gap-x-4 gap-y-4`}
          >
            {/*@ts-ignore*/}
            <Input
              size={"lg"}
              variant="outlined"
              onChange={(e) => setFirstName(e.target.value)}
              name={"firstName"}
              required={true}
              type={"text"}
              label="Ismingiz"
            />
            {/*@ts-ignore*/}
            <Input
              onChange={(e) => setLastName(e.target.value)}
              size={"lg"}
              variant="outlined"
              name={"lastName"}
              required={true}
              type={"text"}
              label="Familiyangiz"
            />
          </div>
          <div className={`my-4 flex flex-col gap-y-4`}>
            {/*@ts-ignore*/}
            <Input
              size={"lg"}
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
              name={"username"}
              required={true}
              type={"text"}
              label="Username"
            />
            {/*@ts-ignore*/}
            <Input
              size={"lg"}
              variant="outlined"
              name={"phoneNumber"}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required={false}
              type={"text"}
              label="Telefon raqamingiz"
            />
            {/*@ts-ignore*/}
            <Input
              size={"lg"}
              variant="outlined"
              name={"email"}
              onChange={(e) => setEmail(e.target.value)}
              required={false}
              type={"text"}
              label="Email"
            />
            <div className={`relative w-full`}>
              {/*@ts-ignore*/}
              <Input
                size={"lg"}
                variant="outlined"
                name={"password"}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                type={eye ? "text" : "password"}
                label="Parol"
              />
              <p
                onClick={() => setEye((eye) => !eye)}
                className={`absolute top-2 right-2 cursor-pointer`}
              >
                {eye ? (
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
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
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
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </p>
            </div>
            <div className={`relative w-full`}>
              {/*@ts-ignore*/}
              <Input
                size={"lg"}
                variant="outlined"
                name={"password2"}
                onChange={(e) => setPassword2(e.target.value)}
                required={true}
                type={eye ? "text" : "password"}
                label="Parolni ikkinchi marta kiriting"
              />
              <p
                onClick={() => setEye((eye) => !eye)}
                className={`absolute top-2 right-2 cursor-pointer`}
              >
                {eye ? (
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
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
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
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </p>
            </div>
          </div>
          <button
            type={"button"}
            onClick={
              !valid
                ? () => {
                    return false;
                  }
                : () => handlerRegister()
            }
            className={`w-full mt-3 bg-black text-white py-2 text-lg rounded-lg`}
          >
            Kirish
          </button>
        </form>
      </DialogBody>
    </Dialog>
  );
};

export default Register;
