import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideInfo() {
  return (
    <>
      <div className="hidden md:block md:fixed bottom-[calc((100%-5rem-496px)/2)] left-6 lg:left-12 w-10">
        <div
          data-aos="fade-right"
          className="line-side-info gap-5 after:h-40 before:h-40"
        >
          <a
            data-aos="fade-right"
            data-aos-delay="300"
            className="hover:translate-x-0.5 hover:-translate-y-0.5"
            href="https://github.com/sfa119f"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-night-light hover:text-green-neon text-3xl"
            />
          </a>
          <a
            data-aos="fade-right"
            data-aos-delay="500"
            className="hover:translate-x-0.5 hover:-translate-y-0.5"
            href="https://www.linkedin.com/in/syarifuddinfa"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-night-light hover:text-green-neon text-3xl"
            />
          </a>
          <a
            data-aos="fade-right"
            data-aos-delay="700"
            className="hover:translate-x-0.5 hover:-translate-y-0.5"
            href="https://www.instagram.com/sfa_arf"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-night-light hover:text-green-neon text-3xl"
            />
          </a>
        </div>
      </div>
      <div className="hidden md:block md:fixed bottom-[calc((100%-5rem-496px)/2)] right-6 lg:right-12 w-10">
        <div
          data-aos="fade-left"
          className=" line-side-info gap-24 after:h-36 before:h-36"
        >
          <a
            className="text-night-light rotate-90 hover:text-green-neon hover:-translate-x-0.5 
              hover:-translate-y-0.5"
            href="mailto:syarifuddinfa@gmail.com"
          >
            <span data-aos="fade-left" data-aos-delay="900">
              syarifuddinfa@gmail.com
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
