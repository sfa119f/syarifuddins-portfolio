import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCodeFork,
  faEnvelope,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="min-h-20">
        <div className="md:hidden flex gap-5 items-center justify-center my-4">
          <a href="https://github.com/sfa119f">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-night-light hover:text-green-neon text-3xl"
            />
          </a>
          <a href="https://www.linkedin.com/in/syarifuddinfa">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-night-light hover:text-green-neon text-3xl"
            />
          </a>
          <a href="https://www.instagram.com/sfa_arf">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-night-light hover:text-green-neon text-3xl"
            />
          </a>
          <a href="mailto:syarifuddinfa@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-night-light hover:text-green-neon text-3xl"
            />
          </a>
        </div>
        <a
          className="flex flex-col items-center gap-2 mx-auto w-max hover:text-green-neon py-4"
          href="https://github.com/sfa119f/syarifuddins-portfolio"
          target="_blank"
        >
          <div>Designed & Built by Syarifuddin</div>
          <div>
            <FontAwesomeIcon icon={faStar} className="mr-2" />
            <span>0</span>
            <FontAwesomeIcon icon={faCodeFork} className="ml-4 mr-2" />
            <span>0</span>
          </div>
        </a>
      </footer>
    </>
  );
}
