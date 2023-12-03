import React from "react";
import Image from "next/image";
import { Rating } from "@material-tailwind/react";
import { AddComment } from "@/components";

const Comment: React.FC = () => {
  return (
    <div className={`my-5 flex items-start justify-between gap-x-4`}>
      <div
        className={`w-2/12 sticky py-10 top-24 rounded-lg shadow-md border bg-gray-100 p-4 flex flex-col gap-y-2 items-center justify-center`}
      >
        <h1 className={`text-6xl font-bold`}>4.8</h1>
        <Rating readonly={true} value={4} />
        <p className={`opacity-50`}>of 125 reviews</p>
      </div>
      <div className={`w-10/12`}>
        <div className={`mb-5`}>
          <AddComment />
          <hr className={`mt-3`} />
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
        <div
          className={`bg-gray-50 mb-4 rounded-lg border shadow p-3 flex items-start justify-between`}
        >
          <div className={`flex flex-col gap-y-4 justify-between items-center`}>
            <Image
              className={`w-24 h-24 rounded-full`}
              src={"/images/profile.png"}
              alt={"profile"}
              width={999}
              height={999}
            />
            <p className={`opacity-50 underline`}>24 January,2023</p>
          </div>
          <div className={`w-[85%]`}>
            <p className={`text-2xl font-[500]`}>Humoyunbek Tursunniyazov</p>
            <Rating readonly={true} value={4} />
            <p>
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase!! I have a pre-paid
              data plan so I was worried that this phone wouldn’t connect with
              my data plan, since the new phones don’t have the physical Sim
              tray anymore, but couldn’t have been easier! I bought an Unlocked
              black iPhone 14 Pro Max in excellent condition and everything is
              PERFECT. It was super easy to set up and the phone works and looks
              great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
