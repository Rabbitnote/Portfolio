import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { demologo } from "../assets";
import squidexService from "../service/squidex";

const ProjectCard = ({ data, index }: { data: any; index: number }) => {
  const imageId = data.data.image.iv?.[0];
  const imageUrl = imageId
    ? squidexService.getAssetUrl(imageId, {
        width: 720,
        height: 400,
        quality: 90,
      })
    : "/placeholder.jpg";

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl h-max">
        <div className="relative w-full h-full">
          {" "}
          <img
            src={imageUrl}
            alt={data?.data?.name?.iv}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {data?.data?.demo?.iv && (
              <div
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer object-contain mx-2"
                onClick={() => {
                  window.open(data?.data?.demo?.iv, "_blank");
                }}
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
              onClick={() => {
                window.open(data?.data?.sourceCodeLink?.iv, "_blank");
              }}
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
          <h3 className="text-white font-bold text-[24px]">
            {data?.data?.name?.iv}
          </h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-5">
            {data?.data?.description?.iv}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {data?.data?.tags?.iv?.map((tag: any, idx: number) => (
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
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await squidexService.getContent("projects");
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      }
    };
    loadProjects();
  }, []);

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
          {projects.map((project: any, index) => (
            <ProjectCard key={project.id} data={project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
