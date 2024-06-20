"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import ProjectSlideButton from "@/components/ProjectSlideButton";

const projects = [
  {
    num: "01",
    category: "Quick Mart (RN App)",
    title: "project 1",
    description: "this is a web application",
    stack: [{ name: "html5" }, { name: "Css3" }, { name: "React" }],
    image: "/assets/work/rn-ecommerce.gif",
    live: "",
    github: "https://github.com/haaymonster/Ecommerce-RN",
  },
  {
    num: "02",
    category: "uChoice pro (operation system)",
    title: "project 2",
    description: "this is a web application",
    stack: [{ name: "html5" }, { name: "Css3" }, { name: "React" }],
    image: "/assets/work/uchoice-ops.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Help U ( webview )",
    title: "project 3",
    description: "admin account ID : supercoding PW : admin1234",
    stack: [{ name: "html5" }, { name: "Css3" }, { name: "React" }],
    image: "/assets/work/helpu.jpg",
    live: "https://65d55f7c3ca36c37140d9a72--comforting-squirrel-d9b911.netlify.app",
    github: "https://github.com/orgs/CareServiceProject/repositories",
  },
  {
    num: "04",
    category: "Elemental Sky ( website )",
    title: "project 4",
    description: "",
    stack: [{ name: "html5" }, { name: "Css3" }, { name: "React" }],
    image: "/assets/work/elementalsky.png",
    live: "https://weather-vibe.vercel.app",
    github: "https://github.com/haaymonster/weather-vibe",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          {/* text */}
          <div className=" w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-outline ">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category}
            </h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            <div className="border border-white/20"></div>
            {/* button */}
            <div className="flex gap-4">
              {/* live */}
              {project.live && (
                <Link
                  href={project.live}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}

              {/* github */}
              {project.github && (
                <Link
                  href={project.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
            </div>
          </div>
          {/* slider */}
          <div className=" w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="bg-pink-200/50 h-[460px] relative group flex justify-center items-center ">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className=" relative"
                        objectFit="contain"
                      ></Image>
                    </div>
                  </SwiperSlide>
                );
              })}
              <ProjectSlideButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
