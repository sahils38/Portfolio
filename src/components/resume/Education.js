import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Btech in Computer Science and Engineering"
            subTitle="Amity University Rajasthan (2022 - 2026)"
            result="Jaipur"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          
          <ResumeCard
            title="Secondary School Education"
            subTitle="Mahamaya Vihar Public School (2021-2022)"
            result="Bareilly"
            des="Senior secondary school provides a strong foundation in academics, critical thinking, and essential life skills for higher education and career growth."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development Intern"
            subTitle="CypherByte Technologies (June 2024 - August 2024)"
            result="Remote"
            des="Developed and deployed an eCommerce website using React, Node.js, Express, and Firebase within a strict timeline."
          />
          <ResumeCard
            title="Member | Strategies and Operation Team"
            subTitle="Entrepreneurship-Cell (Jan 2023 - Jan2024)"
            result="Jaipur"
            des="Organized events like E-Summits and Ideathons, while assisting the tech team in building and maintaining event websites."
          />
          
        </div>
      </div>
    </motion.div>
  );
}

export default Education