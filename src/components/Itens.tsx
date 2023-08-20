import {
  GithubLogo,
  LinkedinLogo,
  Download,
  MicrosoftOutlookLogo,
} from "@phosphor-icons/react";

import pdfUrl from "../assets/yasuheiFrontEnd.pdf";
import { motion } from "framer-motion";
const Itens = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.7,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="flex justify-center items-center w-full pb-10">
        <motion.ul
          className=" grid grid-cols-4  gap-6 p-6 "
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={item}>
            <a
              href="https://www.linkedin.com/in/yasuhei-nakamura-9aa80a93/"
              target="_blank"
              title="Linkedin"
            >
              <LinkedinLogo size={42} color="#594a3c" />
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="https://github.com/yasuhei" target="_blank" title="Github">
              <GithubLogo size={42} color="#594a3c" />
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href={pdfUrl} download={pdfUrl} title="Download CV">
              <Download size={42} color="#594a3c" />{" "}
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="mailto:yasuhei_nakamura@email.com" title="E-mail">
              <MicrosoftOutlookLogo size={42} color="#594a3c" />
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
};

export default Itens;
