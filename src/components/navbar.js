import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideNavBar from "./sideNavbar";
import logo_img from "@/img/logo.png";

export default function NavBar() {
  const [sideNavbar, setSideNavbar] = useState(false);
  const [yOffset, setYOffset] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    setYOffset(currentYOffset);
    setVisible(yOffset > currentYOffset);
  }

  return (
    <>
      <nav
        className={`fixed flex items-center w-full h-20 bg-navy-dark/90 
          transition-all duration-500 z-10 ${visible ? "top-0" : "-top-20"}`}
      >
        <div className="basis-full flex items-center justify-between py-2 px-6 md:px-12">
          <a data-aos="fade-down" href="/">
            <Image src={logo_img} alt="logo" width={48} height={48} />
          </a>
          <div className="hidden md:flex gap-8">
            <a
              data-aos="fade-down"
              data-aos-delay="200"
              className="hover:text-green-neon"
              href="#about"
            >
              About
            </a>
            <a
              data-aos="fade-down"
              data-aos-delay="300"
              className="hover:text-green-neon"
              href="#work"
            >
              Work
            </a>
            <a
              data-aos="fade-down"
              data-aos-delay="400"
              className="hover:text-green-neon"
              href="#experience"
            >
              Experience
            </a>
            <a
              data-aos="fade-down"
              data-aos-delay="500"
              className="hover:text-green-neon"
              href="#contact"
            >
              Contact
            </a>
            <a
              data-aos="fade-down"
              data-aos-delay="600"
              className="hover:text-green-neon"
              href="https://drive.google.com/drive/u/0/folders/1EDIW5m6-rQqdAO3mRhiW8q2zjW55GgoW"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="400"
            className="md:hidden cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="hover:text-green-neon text-3xl"
              onClick={() => setSideNavbar(true)}
            />
          </div>
          <SideNavBar
            sideNavbar={sideNavbar}
            closeMenu={() => setSideNavbar(false)}
          />
        </div>
      </nav>
    </>
  );
}
