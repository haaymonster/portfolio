"use client";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiTailwindcss,
  SiAntdesign,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

//  experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "",
  items: [
    {
      company: "E-commerce Startup",
      position: "프론트엔드 개발자",
      duration: "2022.11 ~ 2023.10",
    },
    {
      company: "E-commerce Startup",
      position: "QA 엔지니어",
      duration: "2021.07 ~ 2022.11",
    },
  ],
};

//  education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "",
  items: [
    {
      institution: "온라인 부트캠프",
      degree: "프론트엔드 과정",
      duration: "2023.11 ~ 2024.03",
    },
    {
      institution: "Changchun Architecture University",
      degree: "IoT major",
      duration: "2015.09 ~ 2019.06",
    },
  ],
};

// skills data
const skill = {
  title: "My Skills",
  description: "",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "Java Script" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <TbBrandReactNative />, name: "React Native" },
    { icon: <SiTailwindcss />, name: "tailwind css" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiAntdesign />, name: "ant design" },
    { icon: <SiTypescript />, name: "type script" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto h-full">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            {/* <TabsTrigger value="about">About me</TabsTrigger> */}
          </TabsList>
          <div className="min-h-[70vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col text-center xl:text-left gap-[30px] ">
                <h2 className="h2">{experience.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-between  items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col text-center xl:text-left gap-[30px]">
                <h2 className="h2">{education.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px]  text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              {/* <div className="flex flex-col gap-[30px]"> */}
              <div className="flex flex-col text-center xl:text-left gap-[30px] ">
                <h2 className="h2">{skill.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skill.description}
                </p>
                <div className="h-[400px] ">
                  <ScrollArea className="h-[350px] ">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 ">
                      {skill.skillList.map((item, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex items-center justify-center group">
                                  <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>
            {/* about */}
            {/* <TabsContent
              value="about"
              className="w-full text-center xl:text-left h-full"
            >
              
            </TabsContent> */}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
