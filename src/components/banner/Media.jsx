import React from 'react'
import {  FaGithub, FaLinkedinIn, FaReact, FaNode } from "react-icons/fa";
import { SiTypescript   } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href='https://github.com/sahils38'>
            <span className="bannerIcon">
              <FaGithub />
            </span></a>
            <a href='https://www.linkedin.com/in/sahil-saraswat-67a365251/'>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span></a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNode />
            </span>
            <span className="bannerIcon">
              <IoLogoFirebase />
            </span>
            <span className="bannerIcon">
              <SiTypescript />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media