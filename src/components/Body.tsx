import Itens from "./Itens";
import { Header } from "./Navbar/Header";
import { motion } from "framer-motion";

export function Body() {
  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const textVariantsH2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 3,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Header />
      <main>
        <div className="h-screen bg-[#1a1a1a] flex justify-center items-center  overflow-hidden ">
          <div>
            <motion.h1
              className="text-7xl text-white "
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              I'm a <span className="text-[#594a3c]"> frontend developer</span>
            </motion.h1>

            <div className="  flex justify-start items-center  pt-48 pb-20">
              <motion.h2
                className="items-center justify-center text-white"
                variants={textVariantsH2}
                initial="hidden"
                animate="visible"
              >
                Hello, I'm
                <span className="text-[#594a3c]">
                  {" "}
                  Yasuhei Nakamura
                </span> <br /> Front-end Developer based in Campinas-SP Brazil
              </motion.h2>
            </div>
            <Itens />
          </div>
        </div>
      </main>
    </>
  );
}
