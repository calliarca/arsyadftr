import {GanttChartSquare, Blocks, Gem, GanttChartIcon} from 'lucide-react';
import {
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle,
} from '@/components/ui/card';

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: 'I specialize in crafting visually stunning and user-friendly websites that reflect your brand identity and captivate your audience. With expertise in responsive design, UI/UX, graphic elements. ',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'I specialize in crafting custom web solutions tailored to your needs, including frontend and backend development, responsive design, e-commerce solutions, and SEO optimization.',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Internet of Things Development',
        description: 'Specializing in bespoke IoT development solutions, I offer end-to-end services encompassing consultation, hardware and software development, connectivity protocols, data analytics, security, and compliance. ',
    },
];

const Services = () => {
  return (
  <section className='mb-12 xl:mb-36'>
    <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
            My Services
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
            {servicesData.map((item, index) => {
                return (
                <Card 
                className='w-full max-w-[424px] h-[300px] flex flex-col justify-center items-center relative'
                key={index}
                >
                    <CardHeader className='text-primary absolute -top-[60px]'>
                        <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                            {item.icon}
                        </div>
                    </CardHeader>
                    <CardContent className='text-center'>
                        <CardTitle className='mb-4'>
                            {item.title}
                        </CardTitle>
                        <CardDescription className='text-sm'>
                            {item.description}
                        </CardDescription>
                    </CardContent>
                </Card>
                );
            })}
        </div>
    </div>
  </section>
  );
};

export default Services;