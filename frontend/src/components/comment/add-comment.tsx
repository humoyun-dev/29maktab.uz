import React, { useState } from "react";
import { Input, Rating } from "@material-tailwind/react";

const AddComment = () => {
  const [comment, setComment] = useState<string>("");
  const [rate, setRate] = useState<number>(4);
  const [auth, setAuth] = useState<boolean>(false);
  return (
    <div className={`mt-1`}>
      <Rating value={rate} onChange={(value: number) => setRate(value)} />
      <div className={`relative duration-300 `}>
        {/*@ts-ignore*/}
        <Input
          onChange={(e) => setComment(e.target.value)}
          type={"text"}
          label={`Comment`}
        />
        {auth ? (
          <button
            className={`right-0 top-0 bg-black h-full text-center text-white px-4 rounded-lg ${
              comment ? "absolute" : "hidden"
            }`}
          >
            Yuborish
          </button>
        ) : (
          <button
            type={"button"}
            className={`right-0 top-0 bg-black h-full text-center text-white px-4 rounded-lg ${
              comment ? "absolute" : "hidden"
            }`}
          >
            Kirish
          </button>
        )}
      </div>
    </div>
  );
};

export default AddComment;
