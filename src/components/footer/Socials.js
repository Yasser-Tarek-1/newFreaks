import React from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as EmailIcon } from "../../assets/footer/email.svg";
import { ReactComponent as InstagramIcon } from "../../assets/footer/insta.svg";

const Socials = () => {
  const { t, i18n } = useTranslation();
  const socials = [
    {
      name: "email",
      title: t("description.reachusbyemail"),
      display: "hello@freaksofnature.me",
      link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hello@freaksofnature.me",
    },
    {
      name: "instagram",
      title: t("description.followusonintagrame"),
      display: "@werfreaksofnature",
      link: "https://www.instagram.com/werfreaksofnature/",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center mt-12">
        <div className="flex flex-col sm:flex-row justify-evenly items-start gap-12">
          {socials.map((social) => (
            <div key={social.name}>
              <div className="flex flex-col gap-3">
                <h2 className="sm:text-center font-semibold">{social.title}</h2>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center "
                >
                  <div className="flex items-center justify-around gap-3">
                    {social.name === "email" ? (
                      <EmailIcon className="w-6 h-auto" />
                    ) : (
                      <InstagramIcon className="w-6 h-auto" />
                    )}
                    <p>{social.display}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


export default Socials