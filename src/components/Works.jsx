import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github, website } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = (props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", props.index * 0.5, 0.75)}>
      <div className="  bg-tertiary  p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={props.image}
            alt={props.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() =>
                window.open(props.source_code_link_website, "_blank")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={website}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() =>
                window.open(props.source_code_link, "_blank")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-white font-bold text-[24px]">{props.name}</h1>
          <p className="mt2 text-secondary text-[14px]">{props.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {props.tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Work I have practiced</p>
        <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>

      <div className="w-full ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These are the projects I have completed during my web development learning process.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, i) => (
          <ProjectCard key={`project-${i}`} index={i} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
