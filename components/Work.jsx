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
        image: '/work/3.png',
        category: 'react js',
        name: 'What Website',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Apalah Website',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'react js',
        name: 'Futsal Website',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Abang Website',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'When Website',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'fullstack',
        name: 'Where Website',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'fullstack',
        name: 'Who Website',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'fullstack',
        name: 'Why Website',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        link: '/',
        github: '/',
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex mollitia. 
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