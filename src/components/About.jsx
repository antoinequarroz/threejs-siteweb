import React from 'react'
import Titl from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion.js";

const ServiceCard = ({ index, title, icon }) => {
    return (
       <Titl className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0,75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
                >
                    <img src={icon} alt={title}
                         className="w-16 h-16 object-contain"/>

                </div>
            </motion.div>
       </Titl>
    )
}

const About = () => {
  return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Aperçu.</h2>
        </motion.div>

          <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
              Je suis un développeur de logiciels qualifié avec une expérience en TypeScript et JavaScript et une expertise dans des frameworks tels que React, Node.js et Three.js. J'apprends vite et je collabore étroitement avec les clients pour créer des solutions efficaces, évolutives et conviviales qui résolvent problèmes du monde réel. Travaillons ensemble pour donner vie à vos idées !
          </motion.p>

          <div className='mt-20 flex flex-wrap gap-10'>
              {services.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service} />
              ))}
          </div>

      </>
  )
}

export default About