import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { demologo } from "../assets";
import { projects } from "../constants";

type Project = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  demo?: string;
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl h-max">
        <div className="relative w-full h-full">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {project.demo && (
              <div
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer object-contain mx-2"
                onClick={() => window.open(project.demo, "_blank")}
              >
                <img
                  src={demologo}
                  alt="demo"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(project.source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 min-h-[150px]">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-5">
            {project.description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <p key={idx} className={`text-[14px] ${tag.color}`}>
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
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="max-w-3xl text-secondary mt-3 text-[17px] leading-[30px]"
        >
          Following projects showcase my skill and experience.
        </motion.p>
        <div className="grid grid-cols-2 mt-20 gap-2 w-full">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
