"use client";
import Image from "next/image";
import Logo from "./@media/Logo.png";
import MobileLogo from "./@media/mobile_logo.png";
import Link from "next/link";
import { HelpCenterIcon, HomeIcon, ServiceIcon } from "./@media/Icons";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { SocialIcons } from "./LandingFooter";
import { GrLinkPrevious } from "react-icons/gr";

const MenuButton = ({ title, icon, url }) => {
  const path = usePathname();

  return (
    <Link href={url}>
      <button
        className={`flex space-x-1  ${
          path.includes(url) && "border-nm-green-100 border-b-2"
        }`}
      >
        {icon}
        <span className="py-1">{title}</span>
      </button>
    </Link>
  );
};

export const AuthButton = () => {
  return (
    <button className="flex p-4 bg-black text-white space-x-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 19L19 19V21L5 21L5 19ZM12 17C7.58172 17 4 13.4183 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 13.4183 16.4183 17 12 17ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
          fill="#7AE1BF"
        />
      </svg>
      <span>Get Started</span>
    </button>
  );
};

const MobileHamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuIcon onClick={() => setOpen(!open)} />
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(!open)}>
        <div className="w-64 min-h-screen">
          <div className="sticky top-0 left-0">
            <div className="flex justify-between items-center py-5 px-4">
              <GrLinkPrevious
                onClick={() => setOpen(!open)}
                className="text-2xl"
              />
              <AuthButton />
            </div>
          </div>
          <div className="px-4 py-5 flex flex-col space-y-8">
            <MenuButton title="Rent" icon={<HomeIcon />} url="/rent" />
            <MenuButton
              title="Services"
              icon={<ServiceIcon />}
              url="/services"
            />
            <MenuButton
              title="Help Center"
              icon={<HelpCenterIcon />}
              url="/contact"
            />
          </div>
          <div className="bg-black px-4 py-16 sticky top-[100vh]">
            <Image priority src={MobileLogo} alt="next-moov" />
            <br />
            <div className="flex">
              <SocialIcons />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

const LandingTopNavbar = () => {
  return (
    <nav className="sticky top-0 left-0 bg-white z-10">
      <div className="flex justify-between items-center  px-6 lg:px-12 py-4">
        <Link href={"/"}>
          <Image
            src={Logo}
            priority
            alt="next-moov"
            className="hidden lg:inline-block"
          />
          <Image
            priority
            src={MobileLogo}
            alt="next-moov"
            className="lg:hidden"
          />
        </Link>
        <div className="hidden lg:flex lg:space-x-16">
          <MenuButton title="Rent" icon={<HomeIcon />} url="/rent" />
          <MenuButton title="Services" icon={<ServiceIcon />} url="/services" />
          <MenuButton
            title="Help Center"
            icon={<HelpCenterIcon />}
            url="/contact"
          />
        </div>
        <div className="hidden lg:inline-block">
          <AuthButton />
        </div>
        <div className="bg-black p-2 text-white lg:hidden">
          <MobileHamburger />
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default LandingTopNavbar;
