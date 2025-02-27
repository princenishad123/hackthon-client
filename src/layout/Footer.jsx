import React from "react";
import { NavLink } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookLine } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/Blog",
    },
    {
      name: "Our team",
      link: "/our-team",
    },
  ];
  return (
    <div className="w-full min-h-auto bg-gray-800 text-white flex flex-col  justify-center">
      <div className="flex justify-center gap-5 py-8 flex-wrap">
        <button className="size-8 sm:size-10 content-center rounded-full border border-gray-500">
          <IoLogoInstagram className="mx-auto" size={25} />
        </button>
        <button className="size-8 sm:size-10 content-center rounded-full border border-gray-500">
          <TiSocialLinkedin className="mx-auto" size={25} />
        </button>
        <button className="size-8 sm:size-10 content-center rounded-full border border-gray-500">
          <RiFacebookLine className="mx-auto" size={25} />
        </button>
        <button className="size-8 sm:size-10 content-center rounded-full border border-gray-500">
          <SlSocialYoutube className="mx-auto" size={25} />
        </button>
        <button className="size-8 sm:size-10 content-center rounded-full border border-gray-500">
          <RiTwitterXLine className="mx-auto" size={25} />
        </button>
      </div>

      <ul className="sm:mx-auto pb-8">
        {links.map((e, idx) => (
          <NavLink key={idx} to={e.link}>
            <li className="sm:inline-block mx-2 px-2 py-1">{e.name}</li>
          </NavLink>
        ))}
      </ul>

      <h3 className="w-full py-5 text-center text-xl font-bold bg-black text-white">
        Copyright c 2025
      </h3>
    </div>
  );
};

export default Footer;
