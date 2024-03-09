'use client';
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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
];

// remove category duplicates
const uniqueCategories = [
  'all project',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all project');

  const filteredProjects = projectData.filter(project => {
    //if category is 'all project' return all project, else filter by category
    return category === 'all project'
    ? project
    : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Project
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
              <TabsTrigger 
              onClick={()=> setCategory(category)}
              value={category} 
              key={index} 
              className='capitalize w-[162px] md:w-auto'
              >
                {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index)=> {
              return (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;