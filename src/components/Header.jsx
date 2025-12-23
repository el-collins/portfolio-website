import React from "react";

import Logo from "../assets/collins logo.svg";
import { FaAngleDoubleRight } from "react-icons/fa";


const Header = () => {
  return (
    <header className="pt-4 pb-0 px-5">
      <div className="container mx-auto px-10 ">
        <div className="flex justify-between items-center">
        <a href="/">
          <img src={Logo} alt="Collins Kelechi Logo" width={100} />
        </a>
        <a href="mailto:elcollinz@gmail.com?subject=Job Opportunity&body=Hi Collins, I'd like to discuss a potential opportunity with you." className="btn cursor-pointer text-center py-3 px-8 inline-flex items-center">
          Hire Me<FaAngleDoubleRight className="pl-2 inline-block"/>
        </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
