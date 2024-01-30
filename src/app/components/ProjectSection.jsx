"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "My portfolio is a visual journey powered by Sketchfab, providing an immersive framework that brings my work to life. Through this dynamic platform, you'll encounter a showcase of my projects, with a spotlight on a creation driven by Three.js. Dive into the interactive world where design meets functionality, and witness the seamless integration of Sketchfab's framework and the immersive 3D experiences crafted with Three.js. Explore the intersection of creativity and technology that defines my approach to web development",
    image: "/images/projects/port.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amaygit/latestPortfolio",
    previewUrl: "https://amaynayak.vercel.app/",
  },
  {
    id: 2,
    title: "Coffee Website",
    description: "Explore the world of coffee simplicity on our site, crafted with Bootstrap for a clean and responsive design. Navigate through our curated selection of beans with ease, and let the geolocation API guide you to the nearest coffee experiences. From bean to cup, discover the essence of simplicity in every brew",
    image: "/images/projects/cof.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amaygit/coffee",
    previewUrl: "https://amaycoffee.netlify.app/",
  },
  {
    id: 3,
    title: "Instagram PHP Artisan",
    description: "Unleashing the power of PHP Artisan to sculpt digital landscapes. 🎨 Full Stack Developer with a passion for elegant code and impactful design. Journey with me through the realms of web development as we turn ideas into interactive masterpieces.",
    image: "/images/projects/insta.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amaygit/Instagram_php_artisan",
    previewUrl: "https://www.instagram.com/amaynayak08/",
  },
  {
    id: 4,
    title: "Hand Recognition Android AI",
    description: "Diving into the future with Android AI and Keras, transforming pixels into hand-gesture poetry. 👋🤖 Exploring the fusion of technology and creativity, one neural network at a time. Join me in the realm of endless possibilities where gestures speak louder than words",
    image: "/images/projects/hand.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/amaygit/HandRecognition",
    previewUrl: "https://www.hindawi.com/journals/tswj/2014/267872/",
  },
  {
    id: 5,
    title: "NFT Marketplace",
    description: "Architecting the future of digital ownership on the blockchain. 🚀🌐 NFT Marketplace creator leveraging the power of Web3 SDK framework. Data-driven by Sanity. Join the revolution where art meets technology",
    image: "/images/projects/nft.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amaygit/nftmarketplace",
    previewUrl: "https://nftmarketplace-phi.vercel.app/",
  },
  {
    id: 6,
    title: "Oakwood Sword fight game using java script",
    description: "🗡️⚔️ Crafting epic battles in the Oakwood Sword Fight game with the magic of JavaScript. Game developer on a quest to bring pixelated warriors to life! 🎮✨ Dive into the realm of swords, strategy, and JavaScript mastery. Adventure awaits in every line of code.",
    image: "/images/projects/sword.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amaygit/myGame-fighting",
    previewUrl: "https://my-game-fighting.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;