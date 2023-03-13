import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideNavBar from "./sideNavbar";

export default function NavBar() {
  const [sideNavbar, setSideNavbar] = useState(false);

  return (
    <>
      <nav className="fixed w-full h-20 bg-navy-dark/90 transition-all duration-500 z-10">
        <div className="flex items-center justify-between py-2 px-6 md:px-12">
          <Image src="/logo.png" alt="logo" width={48} height={48} />
          <div className="hidden md:flex gap-8">
            <a className="hover:text-green-neon" href="#about">
              About
            </a>
            <a className="hover:text-green-neon" href="#work">
              Work
            </a>
            <a className="hover:text-green-neon" href="#experience">
              Experience
            </a>
            <a className="hover:text-green-neon" href="#contact">
              Contact
            </a>
            <a
              className="hover:text-green-neon"
              href="https://drive.google.com/drive/u/0/folders/1EDIW5m6-rQqdAO3mRhiW8q2zjW55GgoW"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className="md:hidden cursor-pointer">
            <FontAwesomeIcon
              icon={faBars}
              className="hover:text-green-neon text-3xl"
              onClick={() => setSideNavbar(true)}
            />
          </div>
          {sideNavbar && <SideNavBar closeMenu={() => setSideNavbar(false)} />}
        </div>
      </nav>
    </>
  );
}
