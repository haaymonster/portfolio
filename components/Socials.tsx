import Link from "next/link";
import React from "react";
import { FaGithub, FaBlogger } from "react-icons/fa";

interface Props {
  containerStyles: string;
  iconStyles: string;
}

const social = [
  { icons: <FaGithub />, path: "https://github.com/haaymonster" },
  { icons: <FaBlogger />, path: "https://hayli.tistory.com" },
];
const Socials: React.FC<Props> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link
            href={item.path}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
            className={iconStyles}
          >
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
