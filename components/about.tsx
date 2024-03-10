'use client'
import Title from "./shared/title";
import { aboutMe, aboutMeCarousel } from "@/data";
import { Button } from "./ui/button";
import Autoplay from "embla-carousel-autoplay"
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
      <div className="grid md:grid-cols-3 mt-7 gap-4 ">
        {/*Array mapping over items in aboutMe Array of data component*/}
        {aboutMe.map((element) => (
          <div
            key={element.id}
            className="border rounded-xl p-4 shadow-md  shadow-slate-500 dark:bg-slate-900 flex flex-col items-center "
          >
            <p>{element.icon}</p>
            <h3 className="text-xl font-bold  text-center">{element.name}</h3>
            <p className="text-center ">{element.description}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-1 gap-24">
        <div className=" text-center text-wrap rounded-xl	leading-loose border-2  p-4 shadow-md mt-10 md:text-2xl antialiased font-semibold tracking-wide">
          {/*aboutMeDescription field of data component*/}
          <p className="my-2">
            {" "}
            I am a Dynamics 365 Technical Consultant, specializing in developing customized solutions to fit your unique business needs. 
            I have experience helping organizations configure the system, and conducting workshops for users.
          </p>
          <p className="my-2">
          I have experience developing customized solutions, for those areas where the standard does not reach your unique needs. 
          I have also experience managing and deploying the required infrastructure, which makes me a versatile profile. 
          I have experience in industries such as Food, Manufacturing, and Pharma.
          </p>
          I had the opportunity to work in different countries which also makes me a very adaptable person, with an international profile,
           which can help on making the communication on your project smoother, valuable on a project where rollouts among different countries are expected.
          <p className="mt-2">
            Let´s get in contact and speak about your needs.
          </p>
        </div>
        <div className="py-12 md:py-0 flex items-center justify-center ">
          {/*Carousel component from shadcn/ui*/}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            orientation="horizontal"
            className="w-full max-w-xs h-fit "
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent className="-mt-1 h-[250px]">
              {aboutMeCarousel.map((element) => (
                <CarouselItem key={element.id}>
                  <div className=" flex items-center justify-center ">
                    <Image
                      src={element.url}
                      alt={element.alt}
                      width={200}
                      height={500}
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
