import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
// import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import squidexService from "../service/squidex";
interface ExperienceData {
  data: {
    companyName: any;
    title: { iv: string };
    company_name: { iv: string };
    date: { iv: string };
    icon: { iv: string[] };
    iconBg: { iv: string };
    image: { iv: string[] };
    points: { iv: Array<{ detail: string }> };
  };
}

const ExperienceCard = ({ experience }: { experience: ExperienceData }) => {
  const iconId = experience?.data?.icon?.iv?.[0];
  const iconUrl = iconId ? squidexService.getAssetUrl(iconId) : "";

  return (
    <VerticalTimelineElement
      contentStyle={
        { background: "#1d1836", color: "#fff" } as React.CSSProperties
      }
      contentArrowStyle={
        { borderRight: "7px solid #232631" } as React.CSSProperties
      }
      date={experience?.data?.date?.iv}
      iconStyle={{
        background: experience?.data?.iconBg?.iv,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      icon={
        <img
          src={iconUrl}
          alt={experience?.data?.company_name?.iv || "company icon"}
          style={{
            width: "80%",
            height: "80%",
            objectFit: "contain",
          }}
        />
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience?.data?.title?.iv}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience?.data?.companyName?.iv}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience?.data?.points?.iv?.map(
          (point: { detail: string }, index: number) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] p-1 tracking-wider"
            >
              {point?.detail}
            </li>
          )
        )}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [experiences, setExperiences] = React.useState([]);
  React.useEffect(() => {
    const loadData = async () => {
      try {
        const data = await squidexService.getContent("experience");
        setExperiences(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };
    loadData();
  }, []);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
