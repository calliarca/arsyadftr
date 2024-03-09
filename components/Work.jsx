'use client';
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import {Pagination} from 'swiper/modules';

//components
import ProjectCard from '@/components/ProjectCard';


const projectData = [
    {
      image: "/work/porto.png",
      category: "Web-Dev",
      name: "Portofolio Website",
      description: "Making own Portofolio Using Next.js 14, Tailwind CSS, React.js, Shadcn UI",
      link: "/https://arsyadftr.my.id",
      github: "/https://github.com/calliarca/arsyadftr",
    },
    {
      image: "/work/teman-al.png",
      category: "Web-Dev",
      name: "Teman.AL Website",
      description: "Website that created for your loved ones / your family who suffer from Alzheimer's disease. This project was developed by the Macipir team",
      link: "/https://teman-al.000webhostapp.com/",
      github: "/https://github.com/calliarca/ProjectA",
    },
    {
      image: "/work/smartwatch.png",
      category: "IoT Development",
      name: "Smartwatch Teman.AL",
      description: "Making a smartwatch that can track people who suffer from alzheimer disease and integrated to Teman.Al Website",
      link: "/https://github.com/calliarca/ProjectA-Arduino",
      github: "/https://github.com/calliarca/ProjectA-Arduino",
    },
    {
      image: "/work/pressure.png",
      category: "IoT Development",
      name: "Industrial Pressure Sensor Project",
      description: "Make a Pressure Sensor for industrial piping. This Project is a collabration with all my friend: Adam Monhardi, Ariq Faisal Hanif, Dimas Faudzan",
      link: "/https://github.com/calliarca/PressureSensorArduino_INA219",
      github: "/https://github.com/calliarca/PressureSensorArduino_INA219",
    },
    {
      image: "/work/1.png",
      category: "UI/UX Design",
      name: "Upcoming Website 1",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      link: "/",
      github: "/",
    },
    {
      image: "/work/2.png",
      category: "UI/UX Design",
      name: "Upcoming Website 2",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      link: "/",
      github: "/",
    },
    {
      image: "/work/smartroom.png",
      category: "IoT Development",
      name: "Smart Room Project",
      description: "Making a smart room based on ESP32 that can turn on/off light in the room, and monitor the Temperature & Humidity via Internet",
      link: "/https://github.com/calliarca/SmartRoom_Project",
      github: "/https://github.com/calliarca/SmartRoom_Project",
    },
    {
      image: "/work/dashboard.png",
      category: "Web-Dev",
      name: "Smart Room Dashboard Website",
      description: "Making a Dashboard website for personal use to turn on/off light, monitor Temperture & Humidity in the room",
      link: "/",
      github: "/",
    },
];

const Work = () => {
  return (
  <section className='relative mb-12 xl:mb-48'> 
    <div className="container mx-auto">
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
            <h2 className='section-title mb-4'>
                Latest Project
            </h2>
            <p className='subtitle mb-8'>
            Discover my latest projects here – a showcase of innovation and skill. From web applications to mobile solutions, each project reflects my commitment to excellence and pushing boundaries in the digital space. Explore now and let's bring your ideas to life together. 
            </p>
            <Link href='/projects'>
                <Button>All Projects</Button>
            </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
            <Swiper 
            className='h-[480px]' 
            slidesPerView={1} 
            breakpoints={{
                640: {
                    slidesPerView: 2
                },
            }} 
            spaceBetween={30} 
            modules={[Pagination]} 
            pagination= {{ clickable : true }} 
            >
                {/* show only the first 4 Projects for the slides */}
                {projectData.slice(0, 4).map((project, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    </div>
  </section>
  );
};

export default Work;