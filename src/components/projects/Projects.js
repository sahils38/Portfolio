import React from 'react'
import Title from '../layouts/Title'
import  {projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA INVESTIGATION WEBSITE"
          des=" Built a Playwright-based web app for social media analysis with Firebase auth, TypeScript, and Node.js. Dockerized and deployed via Railway (backend) & Vercel (frontend)."
          src={projectOne}
          github = "https://github.com/sahils38/SocialScan"
          live ="https://social-scan.vercel.app/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Developed a scalable eCommerce website using React, Node.js, Express, and Firebase for real-time data, secure auth, and smooth UX. Deployed on Firebase."
          src={projectTwo}
          github = "https://github.com/sahils38/E-commerce-Website"
          live ="https://e-comm-e73fa.web.app/"
        />
        <ProjectsCard
          title="Portfolio Website"
          des=" Created a responsive portfolio website with HTML, CSS, and JavaScript to showcase skills, projects, and experience."
          src={projectThree}
          github = "https://github.com/sahils38/Portfolio-website"
          live ="https://sahils38.github.io/Portfolio-website/"
        />
      
      </div>
    </section>
  );
}

export default Projects