import React from "react";
import { NextPage } from "next";
import Layout from "@/layout/layout";
import Image from "next/image";
// @ts-ignore
import Fade from "react-reveal/Fade";
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

const AboutPage: NextPage<AboutPageProps> = () => {
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
      <div className={`md:my-10`}>
        <Fade bottom cascade>
          <div
            className={`container mx-auto md:flex-row flex-col flex justify-around items-center`}
          >
            <Image
              src={`/images/director.jpg`}
              alt={"logo"}
              className={`md:w-1/3 mask mask-squircle`}
              width={999}
              height={999}
            />
            <div className={`md:w-1/2 p-10`}>
              <p
                className={`text-start uppercase text-xl font-[300] underline underline-offset-4`}
              >
                Direktor
              </p>
              <h1 className={`mt-4 text-4xl font-bold`}>
                Barno Qudratullayevna
              </h1>
              <p className={`mt-3 text-justify`}>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.`}
              </p>
            </div>
          </div>
        </Fade>
        <hr className={`my-6`} />
        <div className={`w-full bg-black py-20`}>
          <h3
            className={`text-white text-center md:text-6xl text-4xl font-bold md:w-7/12 w-11/12 mx-auto`}
          >
            {`Maktabimiz tarixi sizni qiziqtiradimi ? Unda Maktabimiz tarixi
              to'g'risida qisqacha .`}
          </h3>
        </div>
        <div className={`my-4 container mx-auto`}>
          <Fade bottom cascade>
            <div
              className={`flex md:flex-row flex-col items-center justify-around my-20`}
            >
              <Fade left cascade>
                <div className={`md:w-1/3 p-5`}>
                  <h1 className={`text-3xl font-bold`}>1979</h1>
                  <p className={`mt-3 text-justify`}>
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.`}
                  </p>
                </div>
              </Fade>

              <Image
                src={`/images/school.jpeg`}
                alt={`logo.png`}
                width={999}
                height={999}
                className={`md:w-1/2 rounded-lg shadow-md`}
              />
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className={`flex flex-wrap items-center justify-around my-20`}>
              <Image
                src={`/images/school.jpeg`}
                alt={`logo.png`}
                width={999}
                height={999}
                className={`md:w-1/2 rounded-lg shadow-md`}
              />
              <Fade right cascade>
                <div className={`md:w-1/3 p-5`}>
                  <h1 className={`text-3xl font-bold`}>1979</h1>
                  <p className={`mt-3 text-justify`}>
                    {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.`}
                  </p>
                </div>
              </Fade>
            </div>
          </Fade>
        </div>
      </div>
      <div className={`container mx-auto md:h-[600px] h-[300px]`}>
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

export default AboutPage;

interface AboutPageProps {}
