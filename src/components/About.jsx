import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import SkillsPage from './SkillsPage';
import ExperiencePage from './ExperiencePage'


const About = () => {
//lg:h-screen
  return (
    <section className="min-h-screen py-20" id="about" >
      <div className="container mx-auto  ">
      {/* <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          > */}
        <div className="flex flex-col gap-y-10 text-center lg:flex-row lg:items-center lg:text-left lg:gap-y-0">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ x: 100 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[540px] mix-blend-lighten bg-top"
          ></motion.div>


          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="font-secondary text-accent uppercase font-bold text-[35px] mb-5">
              About Me.
            </h2>
            <h3 className="mb-4 font-semibold text-[30px]">
              Hi there! I'm a Software Engineer and Full Stack Developer with 2+ years of professional experience.
            </h3>
            <p className="">
              I specialize in delivering production-ready full-stack applications for international clients across Canada and the USA. With expertise in .NET, Python, React, and TypeScript, I've built enterprise SaaS platforms, optimized data workflows, and developed scalable web systems. Currently pursuing my M.Sc. in Information Technology, I'm passionate about combining technical versatility with practical industry insights to solve complex engineering challenges.
            </p>

            {/* stats */}
            <div className="flex gap-x-4 lg:gap-x-10 mb-12 my-5 text-center justify-center lg:justify-start">
              <div className="border rounded-[10px] border-[#ec44ff40] p-3">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                <CountUp start={0} end={2} duration={3} />+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div className="border rounded-[10px] border-[#ec44ff40] p-3">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                <CountUp start={0} end={12} duration={3} />+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>

              <div className="border rounded-[10px] border-[#ec44ff40] p-3">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                <CountUp start={0} end={50} duration={3} />+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Client
                  <br />
                  Organizations
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* myskills */}
        <SkillsPage/>

      {/* myexperience and education */}
      {/* <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="h-[1000px]"
      > */}
      <ExperiencePage/>
      {/* </motion.div> */}
      {/* </motion.div> */}
      </div>
   

    </section>
  );
};

export default About;
