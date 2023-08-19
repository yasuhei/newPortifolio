import React from "react";
import {
  GithubLogo,
  LinkedinLogo,
  Download,
  MicrosoftOutlookLogo,
} from "@phosphor-icons/react";
import pdfUrl from "../assets/yasuheiFrontEnd.pdf";
const Itens = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <ul className=" flex justify-around items-center gap-8">
          <li>
            <a
              href="https://www.linkedin.com/in/yasuhei-nakamura-9aa80a93/"
              target="_blank"
              title="Linkedin"
            >
              <LinkedinLogo size={42} color="#594a3c" />
            </a>
          </li>
          <li>
            <a href="https://github.com/yasuhei" target="_blank" title="Github">
              <GithubLogo size={42} color="#594a3c" />
            </a>
          </li>
          <li>
            <a href={pdfUrl} download={pdfUrl} title="Download CV">
              <Download size={42} color="#594a3c" />{" "}
            </a>
          </li>
          <li>
            <a href="mailto:yasuhei_nakamura@email.com" title="E-mail">
              <MicrosoftOutlookLogo size={42} color="#594a3c" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Itens;
