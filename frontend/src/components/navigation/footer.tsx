import React from "react";
import Link from "next/link";
import { Typography } from "@material-tailwind/react";

const Footer: React.FC = () => {
  return (
    <div className={`border-t mt-2 border-black/30 `}>
      <div className={`w-10/12 mx-auto md:mb-0 mb-[90px] pt-6`}>
        <div
          className={`grid md:grid-cols-3 border-b pb-5 border-black/30 items-start justify-center`}
        >
          <div>
            <ul>
              <li className={`uppercase font-semibold`}>Biz haqimizda</li>
              <li
                className={`text-sm hover:underline underline-offset-4 cursor-pointer font-sans font-light mt-4`}
              >{`O'zbekiston boyicha topshirish punktlari`}</li>
              <li
                className={`text-sm hover:underline underline-offset-4 cursor-pointer font-sans font-light mt-2`}
              >{`Vakansiyalar`}</li>
            </ul>
          </div>
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
            <ul>
              <li className={`uppercase font-semibold`}>
                Ilovani yuklab olish
              </li>
              <li className={`flex flex-row gap-x-3 mt-4 items-center`}>
                <div>
                  <button>
                    <svg
                      data-v-84e4046e=""
                      width="114"
                      height="38"
                      viewBox="0 0 168 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ui-icon "
                    >
                      <path
                        d="M154.189 5.99297e-05H13.3486C12.8352 5.99297e-05 12.328 5.99298e-05 11.8159 0.00285993C11.3873 0.00565993 10.9621 0.0137939 10.5294 0.0206399C9.58932 0.0317025 8.65145 0.114407 7.72394 0.268034C6.79773 0.425006 5.90054 0.720942 5.06271 1.14583C4.2259 1.57432 3.46128 2.13109 2.7966 2.79596C2.12842 3.45895 1.57145 4.22528 1.14709 5.06548C0.72156 5.90401 0.426497 6.80257 0.27209 7.73013C0.116215 8.65652 0.0323377 9.59359 0.02121 10.5329C0.008218 10.9622 0.006846 11.3928 0 11.8221V44.1821C0.006846 44.6168 0.008218 45.0379 0.02121 45.4728C0.0323411 46.4121 0.116219 47.3491 0.27209 48.2754C0.42607 49.2035 0.721151 50.1026 1.14709 50.9414C1.57126 51.7789 2.12831 52.5422 2.7966 53.2015C3.45876 53.8693 4.22387 54.4264 5.06271 54.8516C5.90054 55.2777 6.79763 55.5754 7.72394 55.7348C8.65161 55.8872 9.58938 55.9699 10.5294 55.9823C10.9621 55.9918 11.3873 55.9973 11.8159 55.9973C12.3279 56.0001 12.8352 56.0001 13.3486 56.0001H154.189C154.692 56.0001 155.203 56.0001 155.706 55.9973C156.133 55.9973 156.57 55.9918 156.997 55.9823C157.935 55.9706 158.871 55.8878 159.797 55.7348C160.726 55.5742 161.627 55.2766 162.468 54.8516C163.306 54.4262 164.071 53.8691 164.732 53.2015C165.399 52.5396 165.957 51.7769 166.387 50.9414C166.809 50.102 167.102 49.203 167.253 48.2754C167.41 47.349 167.496 46.4121 167.513 45.4728C167.519 45.0379 167.519 44.6168 167.519 44.1821C167.53 43.6735 167.53 43.1677 167.53 42.6508V13.3506C167.53 12.8379 167.53 12.3294 167.519 11.8221C167.519 11.3928 167.519 10.9622 167.513 10.5329C167.496 9.59345 167.41 8.65659 167.253 7.73008C167.101 6.80305 166.809 5.90456 166.387 5.06543C165.523 3.38133 164.152 2.0105 162.468 1.14571C161.627 0.721854 160.726 0.425997 159.797 0.267908C158.871 0.113604 157.935 0.0308708 156.997 0.0204439C156.57 0.0136119 156.133 0.00540793 155.706 0.00267793C155.203 -0.00012207 154.692 -0.00012207 154.189 -0.00012207V5.99297e-05Z"
                        fill="#A6A6A6"
                      ></path>
                      <path
                        d="M11.8227 54.775C11.3962 54.775 10.9799 54.7695 10.5567 54.76C9.68 54.7486 8.80535 54.6723 7.93991 54.5317C7.13294 54.3927 6.3512 54.1342 5.62048 53.7646C4.89646 53.3981 4.23609 52.9176 3.66468 52.3414C3.08499 51.772 2.60238 51.1115 2.23596 50.3863C1.86551 49.6563 1.60913 48.8739 1.47576 48.0662C1.33174 47.1984 1.25381 46.3208 1.24266 45.4412C1.23379 45.1459 1.22217 44.1629 1.22217 44.1629V11.8221C1.22217 11.8221 1.23454 10.8541 1.24273 10.5697C1.25341 9.69148 1.33088 8.81532 1.47448 7.94883C1.60809 7.13896 1.86467 6.35425 2.23532 5.62189C2.60039 4.89713 3.08032 4.23621 3.65652 3.66476C4.23206 3.08788 4.89454 2.60485 5.61979 2.2333C6.34883 1.86494 7.1291 1.60823 7.93444 1.47178C8.80272 1.32978 9.68041 1.253 10.5602 1.2421L11.8234 1.22501H155.699L156.978 1.24279C157.849 1.25315 158.719 1.32924 159.579 1.47041C160.393 1.60857 161.181 1.86707 161.919 2.2374C163.372 2.98619 164.554 4.17083 165.3 5.6253C165.664 6.35261 165.917 7.13092 166.049 7.93379C166.194 8.80739 166.276 9.69044 166.292 10.5759C166.296 10.9724 166.296 11.3982 166.296 11.8221C166.307 12.3471 166.307 12.8468 166.307 13.3506V42.6507C166.307 43.1593 166.307 43.6556 166.296 44.156C166.296 44.6113 166.296 45.0283 166.291 45.4576C166.275 46.3272 166.195 47.1945 166.052 48.0525C165.921 48.866 165.666 49.6545 165.296 50.3905C164.927 51.1079 164.447 51.7626 163.874 52.3305C163.302 52.9098 162.64 53.3931 161.915 53.762C161.179 54.1344 160.392 54.3938 159.579 54.5317C158.714 54.673 157.839 54.7494 156.963 54.76C156.553 54.7695 156.123 54.775 155.706 54.775L154.189 54.7778L11.8227 54.775Z"
                        fill="black"
                      ></path>
                      <path
                        d="M34.6764 28.4209C34.6915 27.2524 35.0019 26.1067 35.5787 25.0903C36.1556 24.074 36.9801 23.2201 37.9756 22.6081C37.3432 21.7048 36.5089 20.9615 35.5389 20.4371C34.569 19.9128 33.4901 19.6218 32.388 19.5873C30.0371 19.3405 27.7579 20.9941 26.5599 20.9941C25.3388 20.9941 23.4943 19.6118 21.508 19.6527C20.2233 19.6942 18.9712 20.0678 17.8738 20.7371C16.7764 21.4063 15.871 22.3485 15.246 23.4717C12.5384 28.1595 14.558 35.0489 17.1516 38.8382C18.4493 40.6937 19.9659 42.7663 21.9503 42.6928C23.8922 42.6123 24.6175 41.4545 26.9615 41.4545C29.2837 41.4545 29.9642 42.6928 31.9889 42.6461C34.0726 42.6123 35.3855 40.7824 36.6376 38.9093C37.57 37.5872 38.2874 36.126 38.7634 34.5798C37.5528 34.0678 36.5197 33.2107 35.7929 32.1155C35.0662 31.0203 34.6779 29.7354 34.6764 28.4209Z"
                        fill="white"
                      ></path>
                      <path
                        d="M30.8522 17.0952C31.9883 15.7314 32.5481 13.9783 32.4125 12.2084C30.6767 12.3907 29.0734 13.2203 27.9219 14.5318C27.3589 15.1726 26.9277 15.918 26.653 16.7254C26.3782 17.5329 26.2653 18.3866 26.3207 19.2378C27.1889 19.2467 28.0478 19.0585 28.8327 18.6874C29.6177 18.3163 30.3082 17.7719 30.8522 17.0952Z"
                        fill="white"
                      ></path>
                      <path
                        d="M59.2231 37.9955H52.5964L51.005 42.6945H48.1981L54.4749 25.3093H57.3911L63.6678 42.6945H60.8131L59.2231 37.9955ZM53.2827 35.8271H58.5355L55.946 28.201H55.8736L53.2827 35.8271Z"
                        fill="white"
                      ></path>
                      <path
                        d="M77.2235 36.3576C77.2235 40.2965 75.1153 42.8272 71.9339 42.8272C71.1279 42.8693 70.3264 42.6837 69.6211 42.2915C68.9158 41.8993 68.3352 41.3164 67.9458 40.6096H67.8856V46.8877H65.2838V30.0194H67.8022V32.1276H67.8501C68.2574 31.4241 68.8478 30.8442 69.5585 30.4497C70.2692 30.0551 71.0736 29.8605 71.886 29.8867C75.1029 29.8868 77.2235 32.4297 77.2235 36.3576ZM74.5493 36.3576C74.5493 33.7914 73.2231 32.1043 71.1997 32.1043C69.2118 32.1043 67.8747 33.827 67.8747 36.3576C67.8747 38.9116 69.2118 40.6219 71.1997 40.6219C73.2231 40.6219 74.5493 38.9471 74.5493 36.3576Z"
                        fill="white"
                      ></path>
                      <path
                        d="M91.1743 36.3576C91.1743 40.2965 89.0661 42.8272 85.8847 42.8272C85.0787 42.8693 84.2772 42.6837 83.5719 42.2915C82.8666 41.8993 82.286 41.3164 81.8966 40.6096H81.8364V46.8877H79.2346V30.0193H81.753V32.1275H81.8008C82.2082 31.4241 82.7986 30.8442 83.5093 30.4497C84.2199 30.0551 85.0243 29.8605 85.8368 29.8867C89.0538 29.8867 91.1743 32.4297 91.1743 36.3576ZM88.5001 36.3576C88.5001 33.7914 87.1739 32.1043 85.1505 32.1043C83.1626 32.1043 81.8255 33.827 81.8255 36.3576C81.8255 38.9115 83.1626 40.6219 85.1505 40.6219C87.1739 40.6219 88.5001 38.9471 88.5001 36.3576H88.5001Z"
                        fill="white"
                      ></path>
                      <path
                        d="M100.395 37.8506C100.587 39.5746 102.262 40.7066 104.551 40.7066C106.744 40.7066 108.322 39.5746 108.322 38.0201C108.322 36.6706 107.37 35.8627 105.117 35.3089L102.864 34.7662C99.6714 33.9951 98.1894 32.5021 98.1894 30.0794C98.1894 27.0798 100.803 25.0195 104.515 25.0195C108.189 25.0195 110.707 27.0798 110.792 30.0794H108.166C108.008 28.3445 106.574 27.2972 104.478 27.2972C102.383 27.2972 100.948 28.3568 100.948 29.899C100.948 31.1281 101.864 31.8513 104.105 32.405L106.021 32.8753C109.588 33.7188 111.07 35.1517 111.07 37.6946C111.07 40.9472 108.479 42.9843 104.358 42.9843C100.503 42.9843 97.8995 40.995 97.7313 37.8505L100.395 37.8506Z"
                        fill="white"
                      ></path>
                      <path
                        d="M116.685 27.0197V30.0193H119.095V32.0797H116.685V39.0674C116.685 40.1529 117.167 40.6588 118.227 40.6588C118.513 40.6538 118.799 40.6337 119.083 40.5986V42.6466C118.606 42.7356 118.122 42.7759 117.638 42.7669C115.071 42.7669 114.071 41.8031 114.071 39.3449V32.0797H112.228V30.0193H114.071V27.0197H116.685Z"
                        fill="white"
                      ></path>
                      <path
                        d="M120.491 36.3577C120.491 32.3696 122.84 29.8635 126.502 29.8635C130.177 29.8635 132.515 32.3695 132.515 36.3577C132.515 40.3567 130.19 42.8518 126.502 42.8518C122.816 42.8518 120.491 40.3567 120.491 36.3577ZM129.864 36.3577C129.864 33.6219 128.611 32.0073 126.502 32.0073C124.394 32.0073 123.142 33.6342 123.142 36.3577C123.142 39.1043 124.394 40.7067 126.502 40.7067C128.611 40.7067 129.864 39.1043 129.864 36.3577H129.864Z"
                        fill="white"
                      ></path>
                      <path
                        d="M134.66 30.0194H137.142V32.1768H137.202C137.37 31.503 137.765 30.9075 138.32 30.4905C138.875 30.0734 139.557 29.8602 140.251 29.8867C140.551 29.8857 140.85 29.9182 141.142 29.9838V32.4174C140.764 32.3017 140.369 32.2486 139.973 32.2602C139.595 32.2448 139.219 32.3115 138.869 32.4555C138.519 32.5996 138.204 32.8176 137.947 33.0946C137.689 33.3717 137.495 33.7012 137.377 34.0605C137.258 34.4199 137.219 34.8005 137.262 35.1764V42.6945H134.66L134.66 30.0194Z"
                        fill="white"
                      ></path>
                      <path
                        d="M153.138 38.9717C152.788 41.2726 150.547 42.8517 147.68 42.8517C143.993 42.8517 141.704 40.3812 141.704 36.4178C141.704 32.442 144.005 29.8635 147.571 29.8635C151.078 29.8635 153.283 32.2724 153.283 36.1156V37.007H144.331V37.1642C144.289 37.6307 144.348 38.1007 144.502 38.5428C144.656 38.985 144.903 39.3893 145.225 39.7289C145.548 40.0684 145.939 40.3355 146.372 40.5123C146.806 40.6892 147.272 40.7717 147.74 40.7545C148.355 40.8121 148.972 40.6697 149.5 40.3485C150.027 40.0273 150.437 39.5444 150.668 38.9717L153.138 38.9717ZM144.343 35.1887H150.68C150.703 34.7692 150.64 34.3495 150.493 33.9558C150.346 33.5621 150.12 33.203 149.828 32.9009C149.536 32.5988 149.185 32.3603 148.797 32.2004C148.408 32.0405 147.991 31.9626 147.571 31.9717C147.147 31.9691 146.727 32.0505 146.335 32.2112C145.943 32.3718 145.587 32.6085 145.287 32.9076C144.986 33.2067 144.749 33.5622 144.587 33.9538C144.425 34.3453 144.342 34.765 144.343 35.1887V35.1887Z"
                        fill="white"
                      ></path>
                      <path
                        d="M51.4335 15.7548H52.5505C52.7428 15.7787 52.938 15.7626 53.1237 15.7074C53.3094 15.6521 53.4817 15.559 53.6297 15.4339C53.7777 15.3088 53.8981 15.1544 53.9834 14.9805C54.0688 14.8065 54.1172 14.6167 54.1255 14.4231C54.1255 13.6527 53.5458 13.1551 52.5628 13.1551C52.3658 13.1276 52.1653 13.1398 51.9731 13.191C51.7809 13.2423 51.6009 13.3315 51.4438 13.4535C51.2867 13.5754 51.1556 13.7277 51.0582 13.9011C50.9609 14.0746 50.8993 14.2658 50.8771 14.4635H49.6507C49.6718 14.1047 49.7665 13.754 49.929 13.4334C50.0915 13.1128 50.3183 12.8291 50.5952 12.5999C50.8721 12.3707 51.1932 12.201 51.5385 12.1013C51.8838 12.0015 52.246 11.974 52.6024 12.0203C54.2472 12.0203 55.4052 12.9411 55.4052 14.2666C55.4091 14.7106 55.2605 15.1426 54.9843 15.4903C54.7082 15.838 54.321 16.0805 53.8876 16.1772V16.2757C54.4014 16.2985 54.8853 16.5238 55.2335 16.9023C55.5817 17.2808 55.7658 17.7818 55.7457 18.2957C55.7076 18.6651 55.5962 19.0233 55.418 19.3491C55.2398 19.675 54.9983 19.962 54.7077 20.1933C54.4171 20.4246 54.0833 20.5955 53.7258 20.6961C53.3683 20.7968 52.9943 20.825 52.6257 20.7792C52.2564 20.8296 51.8807 20.805 51.521 20.7071C51.1614 20.6091 50.8251 20.4398 50.5323 20.2091C50.2395 19.9784 49.9962 19.6912 49.8167 19.3644C49.6373 19.0377 49.5255 18.6782 49.488 18.3073H50.7335C50.8087 19.1065 51.5429 19.6219 52.6257 19.6219C53.7085 19.6219 54.4154 19.0429 54.4154 18.2267C54.4154 17.3989 53.7496 16.8889 52.5861 16.8889H51.4335V15.7548Z"
                        fill="white"
                      ></path>
                      <path
                        d="M57.1606 18.794C57.1606 17.6593 58.0069 17.0051 59.5054 16.9121L61.213 16.8137V16.2695C61.213 15.6037 60.7741 15.2277 59.9224 15.2277C59.2278 15.2277 58.7479 15.4827 58.6085 15.9284H57.404C57.5312 14.8456 58.5511 14.1511 59.9811 14.1511C61.5616 14.1511 62.453 14.9379 62.453 16.2695V20.5768H61.254V19.6909H61.1556C60.9558 20.0087 60.6752 20.2678 60.3425 20.4417C60.0099 20.6156 59.637 20.698 59.262 20.6807C58.9974 20.7082 58.7299 20.68 58.4768 20.5978C58.2238 20.5156 57.9907 20.3813 57.7927 20.2036C57.5948 20.0258 57.4362 19.8086 57.3273 19.5658C57.2185 19.323 57.1617 19.0601 57.1606 18.794ZM61.213 18.2553V17.7283L59.6735 17.8267C58.8053 17.8848 58.4116 18.1801 58.4116 18.7359C58.4116 19.3033 58.9037 19.6335 59.5806 19.6335C59.7789 19.6535 59.9792 19.6335 60.1696 19.5746C60.36 19.5157 60.5366 19.4191 60.6889 19.2905C60.8412 19.1619 60.9661 19.004 61.0561 18.8262C61.1462 18.6483 61.1995 18.4542 61.213 18.2553Z"
                        fill="white"
                      ></path>
                      <path
                        d="M65.7548 15.32V20.5769H64.5106V14.2728H68.6615V15.32L65.7548 15.32Z"
                        fill="white"
                      ></path>
                      <path
                        d="M76.2014 17.4221C76.2014 19.425 75.1884 20.6808 73.597 20.6808C73.2063 20.7074 72.8162 20.622 72.4725 20.4344C72.1288 20.2468 71.8458 19.9649 71.6569 19.6219H71.5585V22.6728H70.3143V14.2728H71.512V15.3146H71.605C71.7972 14.9596 72.0839 14.6647 72.4332 14.4624C72.7826 14.2601 73.1811 14.1583 73.5846 14.1682C75.1883 14.1682 76.2014 15.4184 76.2014 17.4221ZM74.9218 17.4221C74.9218 16.0904 74.2915 15.2858 73.2374 15.2858C72.1902 15.2858 71.5352 16.1075 71.5352 17.4275C71.5352 18.7414 72.1901 19.5638 73.2319 19.5638C74.2915 19.5638 74.9218 18.7592 74.9218 17.4221Z"
                        fill="white"
                      ></path>
                      <path
                        d="M77.8586 22.8348V21.7636C77.9932 21.7807 78.1289 21.7885 78.2646 21.7868C78.5296 21.8065 78.7926 21.7275 79.0031 21.5652C79.2135 21.4028 79.3566 21.1684 79.4048 20.907L79.4978 20.6001L77.2159 14.2728H78.5708L80.1513 19.2801H80.2498L81.8248 14.2728H83.1441L80.7939 20.8373C80.2553 22.3713 79.6592 22.8635 78.374 22.8635C78.2701 22.8635 77.9748 22.8519 77.8586 22.8348Z"
                        fill="white"
                      ></path>
                      <path
                        d="M84.1134 18.7879H85.3521C85.4738 19.3437 85.9947 19.6335 86.7234 19.6335C87.5519 19.6335 88.0605 19.2685 88.0605 18.7011C88.0605 18.0934 87.6038 17.8035 86.7234 17.8035H85.78V16.8369H86.707C87.4589 16.8369 87.8417 16.5478 87.8417 16.0207C87.8417 15.5579 87.4712 15.2045 86.707 15.2045C86.0111 15.2045 85.5025 15.4999 85.4218 15.9975H84.2228C84.3124 15.4257 84.6229 14.9119 85.0875 14.5666C85.552 14.2213 86.1336 14.0721 86.707 14.1511C88.2054 14.1511 89.0626 14.8286 89.0626 15.8936C89.0696 16.1902 88.9746 16.4802 88.7934 16.7151C88.6123 16.95 88.3559 17.1156 88.0673 17.1842V17.2827C88.4109 17.327 88.7263 17.4959 88.9537 17.7574C89.181 18.0189 89.3044 18.3547 89.3005 18.7011C89.3005 19.8995 88.2806 20.6924 86.7234 20.6924C85.3466 20.6924 84.2283 20.0614 84.1134 18.7879Z"
                        fill="white"
                      ></path>
                      <path
                        d="M91.0923 20.5769V14.2728H92.3255V18.6088H92.4239L95.3292 14.2728H96.5624V20.5769H95.3292V16.2176H95.2362L92.3255 20.5769L91.0923 20.5769Z"
                        fill="white"
                      ></path>
                      <path
                        d="M103.356 15.32H101.371V20.5769H100.125V15.32H98.14V14.2728H103.356V15.32Z"
                        fill="white"
                      ></path>
                      <path
                        d="M110.058 18.8747C109.888 19.4508 109.522 19.9491 109.022 20.2824C108.523 20.6158 107.922 20.7631 107.325 20.6985C106.91 20.7095 106.497 20.6299 106.115 20.4654C105.734 20.3008 105.393 20.0553 105.116 19.7457C104.839 19.4361 104.632 19.0699 104.511 18.6725C104.389 18.2752 104.356 17.8562 104.413 17.4446C104.357 17.0318 104.391 16.6119 104.513 16.2133C104.634 15.8148 104.839 15.4469 105.115 15.1346C105.39 14.8223 105.73 14.5729 106.11 14.4032C106.49 14.2335 106.903 14.1475 107.319 14.151C109.073 14.151 110.133 15.3494 110.133 17.329V17.7632H105.682V17.8329C105.662 18.0643 105.691 18.2973 105.766 18.5168C105.842 18.7364 105.963 18.9376 106.121 19.1077C106.279 19.2778 106.471 19.4129 106.685 19.5044C106.898 19.5959 107.128 19.6417 107.36 19.6389C107.658 19.6745 107.959 19.6208 108.226 19.4847C108.493 19.3486 108.713 19.1363 108.859 18.8746L110.058 18.8747ZM105.681 16.843H108.864C108.88 16.6316 108.851 16.4192 108.78 16.2194C108.709 16.0197 108.597 15.8371 108.451 15.6833C108.305 15.5295 108.128 15.4079 107.932 15.3264C107.737 15.2449 107.526 15.2052 107.314 15.2099C107.099 15.207 106.885 15.2473 106.686 15.3283C106.486 15.4094 106.305 15.5295 106.153 15.6818C106.001 15.834 105.881 16.0152 105.8 16.2147C105.719 16.4142 105.678 16.6278 105.682 16.843H105.681Z"
                        fill="white"
                      ></path>
                      <path
                        d="M115.332 14.2728H118.175C119.408 14.2728 120.131 14.8976 120.131 15.8758C120.133 16.1862 120.028 16.4878 119.835 16.7302C119.641 16.9726 119.369 17.1411 119.066 17.2074V17.3058C119.434 17.3291 119.78 17.4929 120.03 17.7633C120.281 18.0338 120.419 18.3903 120.414 18.7592C120.414 19.8591 119.587 20.5768 118.203 20.5768H115.332V14.2728ZM116.566 15.2277V16.8601H117.799C118.551 16.8601 118.91 16.571 118.91 16.0378C118.91 15.5463 118.597 15.2277 117.937 15.2277L116.566 15.2277ZM116.566 17.7748V19.6219H118.041C118.776 19.6219 119.17 19.2972 119.17 18.7011C119.17 18.0702 118.724 17.7748 117.885 17.7748L116.566 17.7748Z"
                        fill="white"
                      ></path>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="167.53" height="56" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <div>
                  <button>
                    <svg
                      data-v-84e4046e=""
                      width="128"
                      height="38"
                      viewBox="0 0 190 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ui-icon "
                    >
                      <path
                        d="M182.53 56H7.52966C3.67966 56 0.529663 52.85 0.529663 49V7C0.529663 3.15 3.67966 0 7.52966 0H182.53C186.38 0 189.53 3.15 189.53 7V49C189.53 52.85 186.38 56 182.53 56Z"
                        fill="black"
                      ></path>
                      <path
                        d="M182.53 1.12C185.778 1.12 188.41 3.752 188.41 7V49C188.41 52.248 185.778 54.88 182.53 54.88H7.52966C4.28166 54.88 1.64966 52.248 1.64966 49V7C1.64966 3.752 4.28166 1.12 7.52966 1.12H182.53ZM182.53 0H7.52966C3.67966 0 0.529663 3.15 0.529663 7V49C0.529663 52.85 3.67966 56 7.52966 56H182.53C186.38 56 189.53 52.85 189.53 49V7C189.53 3.15 186.38 0 182.53 0Z"
                        fill="#A6A6A6"
                      ></path>
                      <path
                        d="M15.1457 10.556C14.7397 10.99 14.5017 11.662 14.5017 12.516V43.484C14.5017 44.352 14.7397 45.024 15.1457 45.444L15.2437 45.542L32.5897 28.21V28V27.79L15.2437 10.458L15.1457 10.556Z"
                        fill="url(#paint0_linear)"
                      ></path>
                      <path
                        d="M38.3717 33.992L32.5897 28.21V28V27.79L38.3717 22.008L38.4977 22.078L45.3437 25.97C47.3037 27.076 47.3037 28.896 45.3437 30.016L38.4977 33.908L38.3717 33.992Z"
                        fill="url(#paint1_linear)"
                      ></path>
                      <path
                        d="M38.4976 33.908L32.5896 28L15.1456 45.444C15.7896 46.13 16.8536 46.214 18.0576 45.528L38.4976 33.908Z"
                        fill="url(#paint2_linear)"
                      ></path>
                      <path
                        d="M38.4977 22.092L18.0437 10.472C16.8397 9.78601 15.7757 9.87001 15.1317 10.556L32.5897 28L38.4977 22.092Z"
                        fill="url(#paint3_linear)"
                      ></path>
                      <path
                        opacity="0.2"
                        d="M38.3717 33.782L18.0438 45.332C16.9098 45.976 15.8878 45.934 15.2438 45.346L15.1458 45.444L15.2438 45.542C15.9018 46.13 16.9098 46.172 18.0438 45.528L38.4977 33.908L38.3717 33.782Z"
                        fill="black"
                      ></path>
                      <path
                        opacity="0.12"
                        d="M15.1457 45.248C14.7397 44.814 14.5017 44.142 14.5017 43.288V43.498C14.5017 44.366 14.7397 45.038 15.1457 45.458L15.2437 45.36L15.1457 45.248Z"
                        fill="black"
                      ></path>
                      <path
                        opacity="0.12"
                        d="M45.3437 29.82L38.3577 33.782L38.4837 33.908L45.3297 30.016C46.3097 29.456 46.7997 28.728 46.7997 28C46.7297 28.658 46.2397 29.316 45.3437 29.82Z"
                        fill="black"
                      ></path>
                      <path
                        opacity="0.25"
                        d="M18.0437 10.668L45.3437 26.18C46.2257 26.684 46.7297 27.328 46.8137 28C46.8137 27.272 46.3237 26.53 45.3437 25.984L18.0437 10.472C16.0837 9.366 14.4877 10.29 14.4877 12.53V12.74C14.4877 10.486 16.0977 9.56201 18.0437 10.668Z"
                        fill="white"
                      ></path>
                      <path
                        d="M95.9256 30.45C92.6356 30.45 89.9476 32.956 89.9476 36.4C89.9476 39.83 92.6356 42.35 95.9256 42.35C99.2156 42.35 101.904 39.83 101.904 36.4C101.904 32.956 99.2156 30.45 95.9256 30.45ZM95.9256 40.012C94.1196 40.012 92.5656 38.528 92.5656 36.4C92.5656 34.258 94.1196 32.788 95.9256 32.788C97.7316 32.788 99.2856 34.258 99.2856 36.4C99.2856 38.528 97.7176 40.012 95.9256 40.012ZM82.8776 30.45C79.5876 30.45 76.8996 32.956 76.8996 36.4C76.8996 39.83 79.5876 42.35 82.8776 42.35C86.1676 42.35 88.8556 39.83 88.8556 36.4C88.8556 32.956 86.1676 30.45 82.8776 30.45ZM82.8776 40.012C81.0716 40.012 79.5176 38.528 79.5176 36.4C79.5176 34.258 81.0716 32.788 82.8776 32.788C84.6836 32.788 86.2376 34.258 86.2376 36.4C86.2376 38.528 84.6836 40.012 82.8776 40.012ZM67.3656 32.284V34.804H73.4136C73.2316 36.218 72.7556 37.268 72.0416 37.982C71.1596 38.864 69.7876 39.83 67.3796 39.83C63.6556 39.83 60.7436 36.834 60.7436 33.11C60.7436 29.386 63.6556 26.39 67.3796 26.39C69.3816 26.39 70.8516 27.174 71.9296 28.196L73.7076 26.418C72.1956 24.976 70.1936 23.87 67.3656 23.87C62.2696 23.87 57.9856 28.014 57.9856 33.124C57.9856 38.22 62.2696 42.378 67.3656 42.378C70.1236 42.378 72.1956 41.482 73.8196 39.788C75.4856 38.122 76.0036 35.77 76.0036 33.88C76.0036 33.292 75.9616 32.746 75.8636 32.298H67.3656V32.284ZM130.8 34.244C130.31 32.914 128.798 30.45 125.704 30.45C122.638 30.45 120.09 32.858 120.09 36.4C120.09 39.732 122.61 42.35 125.998 42.35C128.728 42.35 130.31 40.684 130.954 39.718L128.924 38.36C128.252 39.354 127.328 40.012 125.998 40.012C124.668 40.012 123.716 39.396 123.114 38.206L131.08 34.916L130.8 34.244ZM122.68 36.232C122.61 33.936 124.458 32.76 125.788 32.76C126.824 32.76 127.706 33.278 128 34.02L122.68 36.232ZM116.212 42H118.83V24.5H116.212V42ZM111.928 31.78H111.83C111.242 31.08 110.122 30.45 108.694 30.45C105.712 30.45 102.982 33.068 102.982 36.428C102.982 39.76 105.712 42.364 108.694 42.364C110.108 42.364 111.242 41.734 111.83 41.006H111.914V41.86C111.914 44.142 110.696 45.36 108.736 45.36C107.14 45.36 106.146 44.212 105.74 43.246L103.458 44.198C104.116 45.78 105.852 47.712 108.736 47.712C111.802 47.712 114.392 45.906 114.392 41.51V30.814H111.914V31.78H111.928ZM108.918 40.012C107.112 40.012 105.6 38.5 105.6 36.428C105.6 34.328 107.112 32.802 108.918 32.802C110.696 32.802 112.096 34.342 112.096 36.428C112.11 38.5 110.71 40.012 108.918 40.012ZM143.064 24.5H136.806V42H139.424V35.364H143.078C145.976 35.364 148.818 33.264 148.818 29.932C148.818 26.6 145.948 24.5 143.064 24.5ZM143.12 32.928H139.41V26.922H143.12C145.08 26.922 146.186 28.546 146.186 29.918C146.186 31.29 145.08 32.928 143.12 32.928ZM159.276 30.422C157.386 30.422 155.426 31.262 154.614 33.096L156.938 34.062C157.428 33.096 158.352 32.774 159.318 32.774C160.662 32.774 162.048 33.586 162.062 35.028V35.21C161.586 34.944 160.578 34.538 159.332 34.538C156.826 34.538 154.292 35.91 154.292 38.472C154.292 40.81 156.336 42.322 158.632 42.322C160.382 42.322 161.362 41.538 161.964 40.614H162.048V41.972H164.568V35.266C164.582 32.158 162.258 30.422 159.276 30.422ZM158.954 40.012C158.1 40.012 156.91 39.578 156.91 38.528C156.91 37.184 158.394 36.666 159.682 36.666C160.83 36.666 161.376 36.918 162.062 37.254C161.866 38.864 160.466 40.012 158.954 40.012ZM173.766 30.8L170.77 38.388H170.686L167.578 30.8H164.764L169.426 41.412L166.766 47.306H169.496L176.678 30.8H173.766ZM150.246 42H152.864V24.5H150.246V42Z"
                        fill="white"
                      ></path>
                      <path
                        d="M59.4836 19.978H58.4476V17.164H59.2736C60.0016 16.534 60.3516 15.47 60.3376 13.944V9.79999H65.9516V17.164H66.8896V19.978H65.8536V18.2H59.4836V19.978ZM61.4296 13.958C61.4436 15.288 61.1776 16.352 60.6316 17.178H64.8736V10.836H61.4296V13.958Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M75.3036 17.108C74.4776 17.962 73.4556 18.382 72.2236 18.382C70.9916 18.382 69.9696 17.962 69.1436 17.108C68.3176 16.254 67.9116 15.218 67.9116 14C67.9116 12.782 68.3176 11.732 69.1436 10.892C69.9696 10.038 70.9916 9.61798 72.2236 9.61798C73.4416 9.61798 74.4636 10.038 75.3036 10.892C76.1296 11.746 76.5496 12.782 76.5496 14C76.5496 15.232 76.1296 16.268 75.3036 17.108ZM69.9416 16.408C70.5576 17.038 71.3276 17.346 72.2236 17.346C73.1196 17.346 73.8896 17.038 74.5056 16.408C75.1216 15.778 75.4436 14.98 75.4436 14C75.4436 13.02 75.1356 12.222 74.5056 11.592C73.8896 10.962 73.1196 10.654 72.2236 10.654C71.3276 10.654 70.5576 10.962 69.9416 11.592C69.3256 12.222 69.0036 13.02 69.0036 14C69.0036 14.98 69.3256 15.778 69.9416 16.408Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M81.9816 18.382C80.7497 18.382 79.7136 17.962 78.8736 17.122C78.0336 16.282 77.6136 15.246 77.6136 13.986C77.6136 12.726 78.0336 11.69 78.8736 10.85C79.7136 10.01 80.7497 9.59 81.9816 9.59C83.2416 9.59 84.2776 10.052 85.0616 10.962L84.3056 11.69C83.7316 10.976 82.9616 10.626 81.9676 10.626C81.0576 10.626 80.2737 10.934 79.6437 11.55C79.0137 12.166 78.7056 12.978 78.7056 13.972C78.7056 14.966 79.0137 15.778 79.6437 16.394C80.2737 17.01 81.0436 17.318 81.9676 17.318C82.9756 17.318 83.8297 16.912 84.5437 16.1L85.2997 16.856C84.9217 17.318 84.4316 17.682 83.8576 17.948C83.2836 18.256 82.6536 18.382 81.9816 18.382Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M89.6816 18.2H88.6036V10.836H86.2516V9.79999H92.0196V10.836H89.6676V18.2H89.6816Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M99.4397 9.79999L96.2617 16.884C95.8277 17.878 95.1697 18.382 94.3017 18.382C94.0497 18.382 93.7697 18.326 93.4617 18.2L93.7417 17.206C93.9237 17.304 94.1057 17.36 94.3017 17.36C94.5537 17.36 94.7497 17.318 94.8897 17.22C95.0297 17.122 95.1557 16.94 95.2677 16.688L95.5757 16.016L92.7477 9.79999H94.0217L96.0937 14.616H96.1357L98.1657 9.79999H99.4397Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M100.658 18.2V9.79999H106.734V18.2H105.656V10.836H101.736V18.2H100.658Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M108.652 18.2V9.79999H109.73V13.398H113.93V9.79999H115.008V18.2H113.93V14.406H109.73V18.2H108.652Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M123.814 17.108C122.988 17.962 121.966 18.382 120.734 18.382C119.502 18.382 118.48 17.962 117.654 17.108C116.828 16.254 116.422 15.218 116.422 14C116.422 12.782 116.828 11.732 117.654 10.892C118.48 10.038 119.502 9.61798 120.734 9.61798C121.952 9.61798 122.974 10.038 123.814 10.892C124.64 11.746 125.06 12.782 125.06 14C125.046 15.232 124.64 16.268 123.814 17.108ZM118.452 16.408C119.068 17.038 119.838 17.346 120.734 17.346C121.63 17.346 122.4 17.038 123.016 16.408C123.632 15.778 123.954 14.98 123.954 14C123.954 13.02 123.646 12.222 123.016 11.592C122.4 10.962 121.63 10.654 120.734 10.654C119.838 10.654 119.068 10.962 118.452 11.592C117.836 12.222 117.514 13.02 117.514 14C117.514 14.98 117.822 15.778 118.452 16.408Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M129.456 18.2V9.79999H132.494C133.152 9.79999 133.726 10.024 134.202 10.444C134.678 10.878 134.93 11.424 134.93 12.082C134.93 12.488 134.832 12.838 134.622 13.132C134.412 13.44 134.146 13.664 133.796 13.818V13.86C134.216 14 134.552 14.238 134.818 14.588C135.084 14.938 135.224 15.33 135.224 15.792C135.224 16.478 134.972 17.052 134.468 17.5C133.964 17.948 133.362 18.186 132.676 18.186H129.456V18.2ZM130.534 13.398H132.494C132.9 13.398 133.222 13.258 133.474 12.992C133.726 12.726 133.838 12.432 133.838 12.11C133.838 11.788 133.726 11.494 133.474 11.228C133.236 10.962 132.928 10.822 132.536 10.822H130.534V13.398ZM130.534 17.164H132.704C133.124 17.164 133.46 17.024 133.712 16.73C133.964 16.436 134.104 16.128 134.104 15.778C134.104 15.428 133.978 15.12 133.698 14.84C133.432 14.56 133.082 14.406 132.648 14.406H130.52V17.164H130.534Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.2"
                        strokeMiterlimit="10"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="31.0493"
                          y1="12.1936"
                          x2="7.55393"
                          y2="35.6889"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00A0FF"></stop>
                          <stop offset="0.00657445" stopColor="#00A1FF"></stop>
                          <stop offset="0.2601" stopColor="#00BEFF"></stop>
                          <stop offset="0.5122" stopColor="#00D2FF"></stop>
                          <stop offset="0.7604" stopColor="#00DFFF"></stop>
                          <stop offset="1" stopColor="#00E3FF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="47.8979"
                          y1="28.002"
                          x2="14.0222"
                          y2="28.002"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE000"></stop>
                          <stop offset="0.4087" stopColor="#FFBD00"></stop>
                          <stop offset="0.7754" stopColor="#FFA500"></stop>
                          <stop offset="1" stopColor="#FF9C00"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear"
                          x1="35.2874"
                          y1="31.2145"
                          x2="3.4258"
                          y2="63.0762"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FF3A44"></stop>
                          <stop offset="1" stopColor="#C31162"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear"
                          x1="10.7459"
                          y1="0.246693"
                          x2="24.9736"
                          y2="14.4742"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#32A071"></stop>
                          <stop offset="0.0685" stopColor="#2DA771"></stop>
                          <stop offset="0.4762" stopColor="#15CF74"></stop>
                          <stop offset="0.8009" stopColor="#06E775"></stop>
                          <stop offset="1" stopColor="#00F076"></stop>
                        </linearGradient>
                        <clipPath id="clip0">
                          <rect
                            width="189"
                            height="56"
                            fill="white"
                            transform="translate(0.529663)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
            <ul className={`mt-5`}>
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
              +998 94 671 71 70
            </Link>
            <Link
              className={`text-gray-700 hover:text-black hover:underline underline-offset-4`}
              href={"tel:+998907997907"}
            >
              +998 90 799 79 07
            </Link>
          </div>
          <Typography
            className={`text-sm text-gray-700 md:text-start text-center`}
          >
            «2023© XK MCHJ «SVETAFORUZ». STIR 309376127. Barcha huquqlar
            himoyalangan»
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
