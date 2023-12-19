import React from "react";
import { NextPage } from "next";
import Layout from "@/layout/layout";
import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  RouteButton,
  TrafficControl,
  TypeSelector,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";
import Link from "next/link";

const ContactPage: NextPage<ContactPageProps> = () => {
  return (
    <Layout>
      <div
        className={`h-screen mx-auto hero-page`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/school.jpeg)`,
        }}
      >
        <div className={`w-full h-full backdrop-blur`}>
          <div
            className={`flex flex-col gap-y-44 items-center justify-center h-full`}
          >
            <h1
              className={`text-white font-bold md:text-6xl text-4xl md:w-8/12 text-center`}
            >
              {`Xush kelibsiz. Maktabimiz haqida ko'proq biling.`}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 bg-white rounded-full p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`flex md:w-10/12 md:flex-row items-center flex-col w-11/12 mx-auto my-16 gap-y-10`}
      >
        <div
          className={`md:w-1/3 flex-col flex-wrap flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 mb-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <h1 className={`font-bold`}>Manzil</h1>
          <p className={`font-light`}>Toshkent shahar Olmazor tumani 29-IDUM</p>
        </div>
        <div
          className={`md:w-1/3 flex flex-col flex-wrap items-center justify-center md:border-l-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 mb-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <h1 className={`font-bold`}>Telefon</h1>
          <Link href={`tel:+998712148449`} className={`font-light`}>
            +998 71 214 84 49
          </Link>
        </div>
        <div
          className={`md:w-1/3 flex flex-col flex-wrap items-center justify-center md:border-l-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 mb-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className={`font-bold`}>Ish vaqti</h1>
          <p className={`font-light`}>Dushanba-Shanba: 7:30-17:30</p>
        </div>
      </div>
      <div className={`w-10/12 mx-auto md:h-[600px] h-[300px]`}>
        <YMaps preload={true}>
          <Map
            className={`h-[600px] w-full`}
            defaultState={{
              center: [41.3576202, 69.1840336],
              zoom: 17,
            }}
          >
            <FullscreenControl />
            <GeolocationControl
              options={{
                float: "left",
              }}
            />
            <ZoomControl />
            <TypeSelector
              options={{
                float: "right",
              }}
            />
            <TrafficControl
              options={{
                float: "right",
              }}
            />
            <RouteButton
              options={{
                float: "right",
              }}
            />
            <Placemark geometry={[41.3576202, 69.1840336]} />
          </Map>
        </YMaps>
      </div>
    </Layout>
  );
};

export default ContactPage;

interface ContactPageProps {}
