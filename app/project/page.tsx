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
    description:
      "React Native로 만든 이커머스 모바일 어플리케이션입니다. 상품 리스트, 상품 상세페이지, 카트, 좋아요, 구매하기 등 다양한 기능이 포함되어 있습니다. 개인 프로젝트입니다.",
    stack: [
      { name: "React Native" },
      { name: "Redux Toolkit" },
      { name: "Expo" },
      { name: "TailwindCss" },
    ],
    image: "/assets/work/rn-ecommerce.gif",
    live: "",
    github: "https://github.com/haaymonster/Ecommerce-RN",
  },
  {
    num: "02",
    category: "uChoice pro (admin system)",
    title: "project 2",
    description:
      "회사에서 프론트엔드 팀원 3명이 같이 구현한  admin 시스템입니다. Ant Design 컴포넌트 라이브러리를 사용했고 테이블, 필터링, 폼, 모달 등 기능이 있습니다.  ",
    stack: [{ name: "Ant Design" }, { name: "React" }, { name: "Axios" }],
    image: "/assets/work/uchoice-ops.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Help U ( webview )",
    title: "project 3",
    description:
      "부트캠프에서 프론트엔드 팀원 4명, 백엔드 3명이 같이 구현한 도움 서비스입니다. 신청인, 메이트, admin 3가지 롤로 나누었고 서비스 신청, 신청 현황, 신청 기록, 채팅, 유저관리 등 기능이 포함되어 있습니다. admin으로 로그인가능 -> id:supercoding, pw:admin1234",
    stack: [
      { name: "StompJs" },
      { name: "Ionic" },
      { name: "React" },
      { name: "Axios" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/helpu.jpg",
    live: "https://65d55f7c3ca36c37140d9a72--comforting-squirrel-d9b911.netlify.app",
    github: "https://github.com/orgs/CareServiceProject/repositories",
  },
  {
    num: "04",
    category: "Elemental Sky ( website )",
    title: "project 4",
    description:
      "2명이 같이 만든 음악 플레이 웹사이트입니다. 날씨 검색, 뮤직 플레이 기능이 있습니다.",
    stack: [{ name: "React" }, { name: "Next Js" }, { name: "Tailwind Css" }],
    image: "/assets/work/weathervibe.png",
    live: "https://weather-vibe.vercel.app",
    github: "https://github.com/haaymonster/weather-vibe",
  },
  {
    num: "05",
    category: "Youpik (RN App)",
    title: "project 5",
    description:
      "회사에서 팀원 3명이랑 같이 계속 유지보수를 해온 모바일 이커머스 플랫폼입니다. ",
    stack: [
      { name: "React Native" },
      { name: "Redux" },
      { name: "Type Script" },
      { name: "i18n" },
    ],
    image: "/assets/work/youpik2.jpg",
    live: "",
    github: "",
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
            <ul className="flex gap-4 flex-wrap">
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
                    <div className=" h-[460px] relative group flex justify-center items-center ">
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
