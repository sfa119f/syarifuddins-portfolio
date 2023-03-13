import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideNavBar(props) {
  return (
    <>
      <div
        className="absolute top-0 right-0 z-10 h-screen w-full bg-black/50"
        onClick={() => props.closeMenu()}
      ></div>
      <div className="fixed top-0 right-0 z-10 h-full w-3/4 bg-navy">
        <div className="text-xl flex flex-col gap-3 py-2 px-6">
          <div className="h-12">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-3xl py-3 hover:text-green-neon cursor-pointer"
              onClick={() => props.closeMenu()}
            />
          </div>
          <a
            className="hover:text-green-neon"
            href="#about"
            onClick={() => props.closeMenu()}
          >
            About
          </a>
          <a
            className="hover:text-green-neon"
            href="#work"
            onClick={() => props.closeMenu()}
          >
            Work
          </a>
          <a
            className="hover:text-green-neon"
            href="#experience"
            onClick={() => props.closeMenu()}
          >
            Experience
          </a>
          <a
            className="hover:text-green-neon"
            href="#contact"
            onClick={() => props.closeMenu()}
          >
            Contact
          </a>
          <a
            className="hover:text-green-neon"
            href="https://drive.google.com/drive/u/0/folders/1EDIW5m6-rQqdAO3mRhiW8q2zjW55GgoW"
            target="_blank"
            onClick={() => props.closeMenu()}
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
