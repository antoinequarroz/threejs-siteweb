import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
const Tech = () => {
  return (
      <>
          <motion.div className="mb-10" variants={textVariant()}>
              <p className={`${styles.sectionSubText} text-center`}>
                  Technologies
              </p>
              <h2 className={`${styles.sectionHeadText} text-center`}>
                  Mes compétences techniques
              </h2>
          </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
        ))}
      </div>
        </>
  );
};

export default SectionWrapper(Tech, "technologies");