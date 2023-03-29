import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css"; //This library provides a component that allows you to create a vertical timeline

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = (props) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    data={props.experience.date}
    iconStyle={{ background: experiences.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={props.experience.icon}
          alt={experiences.company_name}
          className="w[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div className="text-white text-[24px] font-bold">
      <h3>{props.experience.title}</h3>
      <p>{props.experience.points}</p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>WHAT I HAVE DONE SO FAR</p>
        <h2 className="text-white text-[24px]">During my Learning, I worked on various projects to gain practical experience in frontend development. I learned HTML, CSS, JavaScript, and other relevant technologies and frameworks such as React, etc.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, i) => (
            <ExperienceCard key={i} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
