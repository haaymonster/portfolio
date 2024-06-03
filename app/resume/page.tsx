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

// about me
const about = {
  title: "about me",
  description:
    "안녕하세요 프론트엔드 ㅇ머라ㅑ더랴ㅓㅣ나ㅓ리머야래ㅓ쟈ㅓ라ㅓ라ㅓㅏㅓㅓㅓㅏㅇㄹ니ㅏㅓ랴더 ㅓ아러 머ㅑ러댈 ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hayley Lee",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+82) 010-7631-2607",
    },

    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "imhayleylee@gmail.com",
    },
  ],
};

//  experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "my experience",
  description:
    "jfks sjfkdsjfi jskfjksl  jiejfi jcnz sifje sand kjdf jla jdkj fjs jfkdjfls jakd jfks akd jkflsfj jk sjkjfls",
  items: [
    {
      company: "E-commerce Startup",
      position: "front-end developer",
      duration: "2022.11 ~ 2023.10",
    },
    {
      company: "E-commerce Startup",
      position: "QA Engineer",
      duration: "2021.07 ~ 2022.11",
    },
  ],
};

//  education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "my education",
  description:
    "jfks sjfkdsjfi jskfjksl  jiejfi jcnz sifje sand kjdf jla jdkj fjs jfkdjfls jakd jfks akd jkflsfj jk sjkjfls",
  items: [
    {
      institution: "Online Course Platform",
      degree: "web development bootcamp",
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
  title: "my skills",
  description:
    "jfks sjfkdsjfi jskfjksl  jiejfi jcnz sifje sand kjdf jla jdkj fjs jfkdjfls jakd jfks akd jkflsfj jk sjkjfls",
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
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
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col text-center xl:text-left gap-[30px] ">
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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
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
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h2 className="h2">{skill.title}</h2>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skill.description}
                  </p>
                </div>
                <ScrollArea className="h-[350px] ">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 ">
                    {skill.skillList.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
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
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h2 className="h2">{about.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-col-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
