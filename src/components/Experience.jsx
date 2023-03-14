import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences } from "../constants/index.js";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mon parcours</p>
        <h2 className={styles.sectionHeadText}>Expérience.</h2>
      </motion.div>
    </>
  )
}

export default Experience