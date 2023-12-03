import React, { useState } from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Input,
} from "@material-tailwind/react";

const Register = ({ open, OpenOrCloseRegister }: any) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [eye, setEye] = useState<boolean>(false);

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
        <form>
          <div className={`flex items-center justify-between gap-x-4`}>
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
              <IconButton className={`absolute top-2 right-2`}>
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
              </IconButton>
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
              <IconButton className={`absolute top-2 right-2`}>
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
              </IconButton>
            </div>
            <p
              onClick={() => setEye((eye) => !eye)}
              className={`text-md cursor-pointer hover:text-black hover:underline underline-offset-4`}
            >{`Parolni ko'rsatish`}</p>
          </div>
          <button
            type={"submit"}
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
