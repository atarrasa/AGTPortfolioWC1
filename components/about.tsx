import Title from "./shared/title";
import { aboutMe, aboutMeCarousel, aboutMeDescription } from "@/data";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

//About me component
const About = () => {
  return (
    //Container
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about">
      {/*Title component*/}
      <Title title="About me" subtitle="Who I am?" />
      <div className="grid md:grid-cols-2">
        <div>
          <div className="grid md:grid-cols-3 mt-7 gap-4">
            {/*Array mapping over items in aboutMe Array of data component*/}
            {aboutMe.map((element) => (
              <div
                key={element.id}
                className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800"
              >
                {element.icon}

                <h3 className="text-xl font-bold">{element.name}</h3>
                <p className="text-gray-300">{element.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-gray-300">
            {/*aboutMeDescription field of data component*/}
            {aboutMeDescription}
          </p>
        </div>
        <div className="py-12 md:py-0 flex items-center justify-center">
          {/*Carousel component from shadcn/ui*/}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            orientation="vertical"
            className="w-full max-w-xs h-fit"
          >
            <CarouselContent className="-mt-1 h-[200px] ">
              {aboutMeCarousel.map((element) => (
                <CarouselItem key={element.id}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={element.url}
                      alt="carousel"
                      width={150}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default About;
