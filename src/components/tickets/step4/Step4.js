import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import TC from "../tc/TC";
import Container from "../Container";
import FON from "../../header/FreaksOfNature";
import { ReactComponent as Presents } from "../../../assets/tickets/presents.svg";

const Step4=()=> {
  const { t } = useTranslation();
  const language = useSelector((state) => state.language.language);
  const error = useSelector((state) => state.step4.error);
  const userName = useSelector((state) => state.step4.userName);
  const userEmail = useSelector((state) => state.step4.userEmail);

  return (
    <Container tailwindClasses="flex items-center justify-center relative pb-20">
      <div className="flex flex-col items-center justify-center pt-10">
        {!error ? (
          <>
            <h1
              className="py-10 text-4xl text-center"
              style={{ fontFamily: " PP , pure joy , poppins " }}
            >
              {t("step4.title")} {userName.split(" ")[0]}
            </h1>

            <p className="px-2 md:w-9/12 pt-10 text-center text-2xl">
              {t("step4.message")}
            </p>
            <p className="px-2 md:w-9/12 pt-10 text-center text-2xl">
              {t("step4.email")} {userEmail}
            </p>
          </>
        ) : (
          <>
            <h1
              className="py-10 text-4xl text-center"
              style={{ fontFamily: " PP , pure joy , poppins " }}
            >
              {t("step4.error.title")}
            </h1>

            <p className="px-2 md:w-9/12 pt-10 text-center text-2xl">
              {t("step4.error.message")}
            </p>
          </>
        )}
        <a
          href="https://www.instagram.com/werfreaksofnature//"
          className="flex items-center justify-center mt-10"
        >
          <svg
            className="w-10"
            viewBox="0 0 69 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.4907 22.9951C28.1558 22.9951 22.986 28.165 22.986 34.5C22.986 40.835 28.1558 46.0049 34.4907 46.0049C40.8256 46.0049 45.9954 40.835 45.9954 34.5C45.9954 28.165 40.8256 22.9951 34.4907 22.9951ZM68.9961 34.5C68.9961 29.7358 69.0393 25.0147 68.7718 20.2591C68.5042 14.7354 67.2441 9.83308 63.205 5.79385C59.1572 1.74599 54.2636 0.494524 48.74 0.226969C43.9758 -0.0405871 39.2549 0.00256719 34.4994 0.00256719C29.7352 0.00256719 25.0143 -0.0405871 20.2588 0.226969C14.7351 0.494524 9.8329 1.75463 5.79375 5.79385C1.74596 9.84171 0.494515 14.7354 0.226964 20.2591C-0.0405863 25.0233 0.00256714 29.7444 0.00256714 34.5C0.00256714 39.2556 -0.0405863 43.9853 0.226964 48.7409C0.494515 54.2646 1.75459 59.1669 5.79375 63.2061C9.84153 67.254 14.7351 68.5055 20.2588 68.773C25.0229 69.0406 29.7439 68.9974 34.4994 68.9974C39.2635 68.9974 43.9845 69.0406 48.74 68.773C54.2636 68.5055 59.1658 67.2454 63.205 63.2061C67.2528 59.1583 68.5042 54.2646 68.7718 48.7409C69.0479 43.9853 68.9961 39.2642 68.9961 34.5ZM34.4907 52.2018C24.6949 52.2018 16.7892 44.296 16.7892 34.5C16.7892 24.704 24.6949 16.7982 34.4907 16.7982C44.2865 16.7982 52.1922 24.704 52.1922 34.5C52.1922 44.296 44.2865 52.2018 34.4907 52.2018ZM52.9172 20.2073C50.6301 20.2073 48.7831 18.3603 48.7831 16.0732C48.7831 13.786 50.6301 11.939 52.9172 11.939C55.2043 11.939 57.0513 13.786 57.0513 16.0732C57.052 16.6163 56.9455 17.1542 56.738 17.6561C56.5305 18.1579 56.226 18.614 55.842 18.998C55.458 19.382 55.0019 19.6865 54.5001 19.894C53.9982 20.1016 53.4603 20.208 52.9172 20.2073Z"
              fill="white"
            />
          </svg>
        </a>
        <h1
          className="py-10 text-4xl text-center"
          style={{ fontFamily: " PP , pure joy , poppins " }}
        >
          {t("step3.letsGetFreaky")}
        </h1>
        <div className="flex justify-center items-center mt-5">
          <Presents className="w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12" />
        </div>

        <TC absolute />
      </div>
    </Container>
  );
}

export default Step4