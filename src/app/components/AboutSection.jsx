/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image'
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton'
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL</li>
                <li>Android Java</li>
                <li>JavaScript</li>
                <li>Python</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Nitte Meenakshi Institute Of Technology,  An Autonomous Engineering College In Bangalore, Karnataka, India</li>
                <li>Alvas Pre university College, Moodbidri</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Oracle HCM Business Process Certified Foundations</li>
                <li>AWS Certified Solutions Architect</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
];
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition()
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/about-image.png" width={500} height={500} alt='about' />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full  '>
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                        I am Amay, a seasoned Full Stack Developer specializing in frontend technologies like React.js and Next.js, as well as backend proficiency with PHP, particularly the Laravel framework using Artisan. My passion extends to the realm of game development, where I leverage the Ursina game engine to create immersive and interactive experiences. With a keen eye for detail and a commitment to innovation, I bring a versatile skill set to the table, ensuring the seamless integration of creativity and functionality in every project.
                        Let's build something extraordinary together!
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection