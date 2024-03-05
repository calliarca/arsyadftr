'use client';

import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import DevImg from "./DevImg";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {
    User2, 
    MailIcon, 
    HomeIcon, 
    PhoneCall, 
    GraduationCap, 
    Calendar, 
    Briefcase,
    Type,
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Arsyad Faturrahman',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+62 81322523678',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'arsyaddod123@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 16 Feb, 2003',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelor on Engineering Physics',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Cimahi, Indonesia',
    },
];

const qualificationData = [
    {
        title: 'Education',
        data: [
            {
                university: 'SMAN 9 Bandung',
                qualification: 'Saintek/MIPA',
                years: '2019 - 2021',
            },
            {
                university: 'Telkom University',
                qualification: 'Bachelor of Enginerring Physics',
                years: '2021 - Present',
            },
        ],
    },
    {
        title: 'Organizaiton Experience',
        data: [
            {
                organization: 'SMAN 9 Bandung',
                role: 'Saintek/MIPA',
                years: '2019 - 2021',
            },
            {
                organization: 'SMAN 9 Bandung',
                role: 'Saintek/MIPA',
                years: '2019 - 2021',
            },
            {
                organization: 'SMAN 9 Bandung',
                role: 'Saintek/MIPA',
                years: '2019 - 2021',
            },
        ],
    },
];

const skillData = [
    {
        title : 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'Javascript, PHP',
            },
            {
                name: 'Back-end Development',
            },
        ],
    },
    {
        title : 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
      };

    const handleType = (count) => {
        //access word count number
        console.log(count)
    }

    const handleDone = () => {
        console.log('Done after 5 loops!')
    }
  return (
  <section className='xl:h-[860px] pb-12 xl:py-24'>
    <div className='container mx-auto'>
    <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto flex items-center'>
            About me
        </h2>
        <div className='flex flex-col xl:flex-row'>
            {/* image */}
            <div className='hidden xl:flex flex-1 relative'>
                <DevImg 
                containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' 
                imgSrc='/about/developer.png' 
                />
            </div>
            {/* tabs */}
            <div className='flex-1'>
                <Tabs defaultValue='personal'>
                    <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                        <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                            Personal Info
                        </TabsTrigger>
                        <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>
                            Qualifications
                        </TabsTrigger>
                        <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                            Skills
                        </TabsTrigger>
                    </TabsList>
                    {/* tabs content */}
                    <div className='text-lg mt-12 xl:mt-8'>
                        {/* personal */}
                        <TabsContent value='personal'>
                            <div className='text-center xl:text-left flex flex-col items-center'>
                            <h3 className='h3 mb-4 flex items-center xl:text-left'>
                            <span style={{marginRight: '0.2em'}}>I'm a </span>
                            <Typewriter 
                                words={[' IoT Enthusiast', ' Web Developer', ' UI/UX Researcher', ' Anime Watcher', ' Engineer']}
                                loop={100}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={100}
                                delaySpeed={1500}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </h3>
                                <p className='subtitle max-w-xl mx-auto xl:mx-0'> 
                                    I Specialize in crafting intuitive website with 
                                    cutting-edge technology, delivering dynamic and engaging 
                                    user Experience.
                                </p>
                                {/* icons */}
                                <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                    {infoData.map((item, index)=>{
                                        return (
                                        <div 
                                        className='flex items-center gap-x-4 mx-auto xl:mx-0' 
                                        key={index} 
                                        >
                                            <div className='text-primary'>{item.icon}</div>
                                            <div>{item.text}</div>
                                        </div>
                                        );
                                    })}
                                </div>
                                {/* languages */}
                                <div className='flex flex-col gap-y-2'>
                                    <div className='text-primary'>Language Skill</div>
                                    <div className='border-b border-border'></div>
                                    <div>English, Indonesia, Sundanese</div>
                                </div>
                            </div>
                        </TabsContent>
                        {/* qualifications */}
                        <TabsContent value='qualifications'>
                            <div>
                                <h3 className='h3 mb-8 text-center xl:text-left'
                                >My Awesome Journey
                                </h3>
                                {/* experience & education wrapper */}
                                <div className='grid md:grid-cols-2 gap-y-8'>
                                    {/* experience */}
                                    <div className='flex flex-col gap-y-6'>
                                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                            <Briefcase />
                                            <h4 className='capitalize font-medium'>
                                                {getData(qualificationData, 'Organizaiton Experience').title}
                                            </h4>
                                        </div>
                                        {/* list */}
                                        <div className='flex flex-col gap-y-8'>
                                            {getData(qualificationData, 'Organizaiton Experience').data.map((item, index)=> {
                                                const {organization, role, years} = item;
                                                return(
                                                    <div className='flex gap-x-8 group' key={index}>
                                                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                        </div>
                                                        <div>
                                                            <div className='font-semibold text-xl leading-none mb-2'>
                                                                {organization}
                                                            </div>
                                                            <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                                {role}
                                                            </div>
                                                            <div className='text-base font-medium'>
                                                                {years}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {/* education */}
                                    <div className='flex flex-col gap-y-6'>
                                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                            <GraduationCap size={28} />
                                            <h4 className='capitalize font-medium'>
                                                {getData(qualificationData, 'Education').title}
                                            </h4>
                                        </div>
                                        {/* list */}
                                        <div className='flex flex-col gap-y-8'>
                                            {getData(qualificationData, 'Education').data.map((item, index)=> {
                                                const {university, qualification, years} = item;
                                                return(
                                                    <div className='flex gap-x-8 group' key={index}>
                                                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                        </div>
                                                        <div>
                                                            <div className='font-semibold text-xl leading-none mb-2'>
                                                                {university}
                                                            </div>
                                                            <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                                {qualification}
                                                            </div>
                                                            <div className='text-base font-medium'>
                                                                {years}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </TabsContent>
                        {/* skills */}
                        <TabsContent value='skills'>
                            <div className='text-center xl:text-left'>
                                <h3 className='h3 mb-8'>What I Use Everyday</h3>
                                {/* skills */}
                                <div className='mb-16'>
                                    <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                    <div className='border-b border-border mb-4'></div>
                                    {/* skill list */}
                                    <div>
                                        {getData(skillData, 'skills').data.map(
                                            (item, index)=> {
                                                const {name} = item;
                                                return (
                                                <div 
                                                className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' 
                                                key={index}
                                                >
                                                    <div className='font-medium'>{name}</div>
                                                </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                                {/* tools */}
                                <div>
                                    <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                                        Tools
                                    </h4>
                                    <div className='border-b border-border mb-4'></div>
                                    {/* tools list */}
                                    <div className='flex gap-x-8 justify-center xl:justify-start'>
                                        {getData(skillData, 'tools').data.map((item, index)=>{
                                            const {imgPath} = item;
                                            return (
                                            <div key={index}>
                                                <Image 
                                                src={imgPath} 
                                                width={48} 
                                                height={48} 
                                                alt='' 
                                                priority
                                                />
                                            </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    </div>
    </section>
  );
};

export default About;