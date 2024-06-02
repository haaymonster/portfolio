import Socials from "@/components/Socials";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* left area */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-end Engineer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Hayley Lee</span>
            </h1>
            <p className="max-w-[500px] text-white/80 mb-9">
              i&apos;m a front-end engineer. i&apos;m proficient in various
              programming such as react, nextjs, react native, etc.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button
                className="uppercase flex items-center gap-2 "
                variant="outline"
                size="lg"
              >
                Download CV <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary duration-500 hover:transition-all"
                />
              </div>
            </div>
          </div>
          {/* photo  area */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
