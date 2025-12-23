import React from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import { BiSolidGraduation } from "react-icons/bi";

const ExperiencePage = () => {
  return (
    <div className="mx-auto mt-20">
      <h1 className="font-secondary text-accent uppercase font-bold text-[35px] mb-0 text-center">
        Experience & Education
      </h1>

      <div className="flex flex-col lg:flex-row px-10">
        {/* Experience */}
        <div class="lg:px-10 flex-1">
          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BsBriefcaseFill />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                March 2025 - Present
              </h4>
              <h3 className="font-bold">Junior Software Engineer - Solve</h3>
              <p>
                Developing enterprise financial SaaS features using C#, .NET MVC, React, and TypeScript. Built custom DataFeed system for PwC eliminating 5,000 bond export limitations.
              </p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BsBriefcaseFill />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                Feb 2025 - Present
              </h4>
              <h3 className="font-bold">Software Developer - Hordanso Ltd</h3>
              <p>
                Developing web/mobile applications and AI-powered automation workflows. Built React/TypeScript admin dashboard for VPS reselling platform managing 200+ instances.
              </p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BsBriefcaseFill />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                March 2025 - Oct 2025
              </h4>
              <h3 className="font-bold">Junior Data Engineer - CNDRO LLC</h3>
              <p>
                Processed 500K+ records using Python ETL scripts. Designed SQL queries reducing data quality issues by 35%.
              </p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BsBriefcaseFill />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                Oct 2024 - Nov 2025
              </h4>
              <h3 className="font-bold">Lead Full Stack Developer - Houzdey</h3>
              <p>
                Led development of property rental marketplace from concept to production. Built full-stack platform using React, TypeScript, FastAPI, and MongoDB serving 500+ listings.
              </p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BsBriefcaseFill />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                July 2024 - Dec 2024
              </h4>
              <h3 className="font-bold">Software Engineering Intern - Solve</h3>
              <p>
                Contributed to frontend and backend integration for enterprise platform serving 50+ client organizations. Refactored legacy codebase improving maintainability by 20%.
              </p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BsBriefcaseFill />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                April 2024 - Aug 2024
              </h4>
              <h3 className="font-bold">Frontend Developer - Shuttrd</h3>
              <p>
                Developed responsive booking interface for media equipment rental platform using React and Tailwind CSS.
              </p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BsBriefcaseFill />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                2022 - 2024
              </h4>
              <h3 className="font-bold">Freelance Full Stack Developer</h3>
              <p>
                Delivered 12+ web applications for clients across Nigeria, USA, and Canada. Built e-commerce platforms, business websites, and custom SaaS tools.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div class="lg:px-10 flex-1">
          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BiSolidGraduation />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                In Progress
              </h4>
              <h3 className="font-bold">Master of Science - Information Technology</h3>
              <p>
                M.Sc. in Information Technology at the National Open University of Nigeria.
              </p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BiSolidGraduation />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                2024
              </h4>
              <h3 className="font-bold">Bachelor of Science - Computer Science</h3>
              <p>
                B.Sc. in Computer Science at the National Open University of Nigeria. Capstone: Design and Implementation of an Online Voting System.
              </p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BiSolidGraduation />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                2024
              </h4>
              <h3 className="font-bold">Certifications</h3>
              <p>
                Backend Developer Award (Africaplan Hackathon), JavaScript ES6+ (FreeCodeCamp), 100 Days of Python (Udemy).
              </p>
            </div>
          </div>

          <div class="divide-x divide-current relative mt-20">
            <div className="absolute top-[-6px] left-[-20px] rounded-full w-10 h-10 bg-accent z-10 flex justify-center items-center ">
              <div className="z-20 font-extrabold">
                <BiSolidGraduation />
              </div>
            </div>
            <div className="pl-10 w-full">
              <h4 className="bg-[#dddddd21] rounded-[20px] inline-block px-[10px] mb-[12px]">
                2018 - Present
              </h4>
              <h3 className="font-bold">Continuous Learning</h3>
              <p>
                Actively learning through Udemy, Coursera, and YouTube to stay current with emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;

// eslint-disable-next-line no-lone-blocks
{
  /* <div class="elementor-widget-container">
			
      <div class="resume-box">
        <ul>
            <li>
              <div class="icon"><i class="fas fa-briefcase"></i></div>
              <span class="time open-sans-font text-uppercase">2018 - Present </span>
              <h5 class="poppins-font text-uppercase"> Web Developer <span class="place open-sans-font">Envato </span></h5>
              <p class="open-sans-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore</p>
            </li>
        </ul>
      </div>		</div> */
}
