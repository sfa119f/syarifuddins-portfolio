import { useState } from "react";
import Image from "next/image";
import syarifuddin_img from "@/img/syarifuddin.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import workExp from "@/doc/workExp.json";
import ownProject from "@/doc/ownProject.json";
import organization from "@/doc/organization.json";
import award from "@/doc/award.json";
import certification from "@/doc/certification.json";

export default function Home() {
  const [workActive, setWorkActive] = useState(workExp[0].company);
  const [orgActive, setOrgActive] = useState(organization[0].id);

  const scrollMenu = (dir, selector, gap) => {
    const carousel = document.querySelector(selector);
    const cardWidth = carousel.querySelector(".button-menu").offsetWidth + gap;
    carousel.scrollLeft += dir === "left" ? -cardWidth : cardWidth;
  };

  return (
    <>
      {/* ----- SECTION: TITLE ----- */}
      <section
        id="title"
        className="pt-4 pb-14 min-h-[calc(100vh-5rem)] flex flex-col justify-center"
      >
        <div data-aos="fade-up" className="text-lg text-green-neon my-2">
          Hi everyone! I'm
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-4xl md:text-5xl text-night-light font-bold my-2"
        >
          Syarifuddin Fakhri A.
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-3xl md:text-4xl font-semibold my-2"
        >
          I'm a technology enthusiast especially in software
        </div>
        <div data-aos="fade-up" data-aos-delay="700" className="my-2">
          I'm a software engineer who specializes in building and designing
          various kinds of software to make great digital experiences.
          Currently, I'm focuses on developing apps to accelerate and grow
          business in{" "}
          <span className="text-link">
            <a href="https://elevarm.com/">Elevarm</a>
          </span>
          .
        </div>
      </section>

      {/* ----- SECTION: ABOUT ----- */}
      <section
        id="about"
        className="pb-40 md:pb-60 flex flex-col justify-center"
      >
        <div
          data-aos="fade-up"
          className="font-bold text-2xl text-night-light text-center line-beside-text"
        >
          Who Am I?
        </div>
        <div className="block md:grid md:grid-cols-[2fr_3fr] gap-6 mt-10">
          <div
            data-aos="fade-up"
            className="w-3/4 mx-auto mb-10 md:mx-10 md:mb-0 md:mt-2"
          >
            <Image
              src={syarifuddin_img}
              placeholder="blur"
              alt="syarifuddin-img"
              width="500"
              height="500"
            />
          </div>
          <div data-aos="fade-up">
            <div className="my-2">
              Hi! I'm Syarifuddin and I enjoy learning and creating something
              related to digital information technology. My interest in IT
              started in 2015 when I joined the computer olympiad team in high
              school.
            </div>
            <div className="my-2">
              I'm a student of Informatics in{" "}
              <span className="text-link">
                <a href="https://www.itb.ac.id/">
                  Institut Teknologi Bandung (ITB)
                </a>
              </span>
              and an Software Engineer in{" "}
              <span className="text-link">
                <a href="https://elevarm.com">Elevarm</a>
              </span>
              . I spent most of my time studying Informatics and developing apps
              to accelerate and grow business in Elevarm.
            </div>
            <div className="my-2">
              At{" "}
              <span className="text-link">
                <a href="https://elevarm.com">Elevarm</a>
              </span>{" "}
              my main responsibility is designing and developing system to
              record and manage all company business operations. It does not
              rule out also participating in developing websites and
              collaborating with various cross-teams to create a better system.
            </div>
            <div className="my-2">
              Here are a few technologies I’ve been working with recently:
              <ul className="my-2 flex flex-wrap list-disc ml-4 marker:text-green-neon">
                <li className="w-40">Node.js</li>
                <li className="w-40">Python</li>
                <li className="w-40">Go</li>
                <li className="w-40">Next.js</li>
                <li className="w-40">Vue.js</li>
                <li className="w-40">Flutter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ----- SECTION: WORK ----- */}
      <section
        id="work"
        className="pb-40 md:pb-60 flex flex-col justify-center"
      >
        <div
          data-aos="fade-up"
          className="font-bold text-2xl text-night-light text-center line-beside-text"
        >
          Where I've Work
        </div>
        <div
          data-aos="fade-up"
          className="mt-10 md:min-h-[450px] max-w-full md:max-w-xl mx-auto"
        >
          <div className="flex items-center gap-3">
            <div
              className="sm:hidden hover:text-green-neon cursor-pointer p-2"
              onClick={() => scrollMenu("left", "#workMenu", 8)}
            >
              <FontAwesomeIcon icon={faCaretLeft} className="text-lg" />
            </div>
            <div
              id="workMenu"
              className="scrollable-select sm:flex sm:flex-wrap sm:justify-center 
                gap-2 max-w-md mx-auto"
            >
              {workExp.map((el, idx) => (
                <div
                  key={idx}
                  onClick={() => setWorkActive(el.company)}
                  className={`button-menu ${
                    workActive == el.company &&
                    "text-green-neon link-underline-size"
                  }`}
                >
                  {el.company}
                </div>
              ))}
            </div>
            <div
              className="sm:hidden hover:text-green-neon cursor-pointer p-2"
              onClick={() => scrollMenu("right", "#workMenu", 8)}
            >
              <FontAwesomeIcon icon={faCaretRight} className="text-lg" />
            </div>
          </div>
          <div className="relative flex justify-center">
            {workExp.map((el, idx) => (
              <div
                key={idx}
                className={`top-0 mt-6 mb-2 md:absolute flex flex-col items-center 
                  transition duration-300 ${
                    el.company == workActive
                      ? "scale-100 delay-300 ease-out"
                      : "scale-0 ease-in md-max:hidden"
                  }`}
              >
                <div className="text-xl text-center font-semibold text-night-light">
                  {el.role} <span className="text-green-neon">@</span>
                  <span className="text-link">
                    <a href={el.website}>{el.company}</a>
                  </span>
                </div>
                <div className="text-sm">
                  {el.start} – {el.end}
                </div>
                <div className="mt-4">
                  <ul className="ml-4 list-disc marker:text-green-neon">
                    {el.description.map((elDesc, idxDesc) => (
                      <li key={idxDesc}>{elDesc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- SECTION: EXPERIENCE ----- */}
      <section
        id="experience"
        className="pb-40 md:pb-60 flex flex-col justify-center"
      >
        <div
          data-aos="fade-up"
          className="font-bold text-2xl text-night-light text-center line-beside-text"
        >
          Something I've Done
        </div>

        <div id="projects" className="mt-10">
          <div
            data-aos="fade-up"
            className="font-bold text-xl text-night-light underline"
          >
            Own Projects
          </div>
          <div className="mt-4">
            <table data-aos="fade-up" className="w-full">
              <thead>
                <tr>
                  <td>Year</td>
                  <td>Title</td>
                  <td className="md-max:hidden">Built with</td>
                  <td>Link</td>
                </tr>
              </thead>
              <tbody>
                {ownProject.map((el, idx) => (
                  <tr key={idx}>
                    <td>{el.year}</td>
                    <td>{el.title}</td>
                    <td className="sec-cell md-max:hidden">
                      {el.tech.join(", ")}
                    </td>
                    <td className="sec-cell">
                      <a href={el.link}>
                        <FontAwesomeIcon
                          icon={faLink}
                          className="hover:text-green-neon text-lg"
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div data-aos="fade-up" className="my-8 flex justify-center">
              <a href="https://github.com/sfa119f" className="button">
                Show More
              </a>
            </div>
          </div>
        </div>

        <div id="organaizations" className="mt-10 min-h-[376px]">
          <div
            data-aos="fade-up"
            className="font-bold text-xl text-night-light underline"
          >
            Organizations
          </div>
          <div
            data-aos="fade-up"
            className="mt-4 max-w-xl mx-auto md:min-h-[350px]"
          >
            <div className="flex items-center gap-3">
              <div
                className="sm:hidden hover:text-green-neon cursor-pointer p-2"
                onClick={() => scrollMenu("left", "#orgMenu", 8)}
              >
                <FontAwesomeIcon icon={faCaretLeft} className="text-lg" />
              </div>
              <div
                id="orgMenu"
                className="scrollable-select sm:flex sm:flex-wrap sm:justify-center 
                  gap-2 max-w-md mx-auto"
              >
                {organization.map((el, idx) => (
                  <div
                    key={idx}
                    onClick={() => setOrgActive(el.id)}
                    className={`button-menu ${
                      el.id == orgActive &&
                      "text-green-neon link-underline-size"
                    }`}
                  >
                    {el.id}
                  </div>
                ))}
              </div>
              <div
                className="sm:hidden hover:text-green-neon cursor-pointer p-2"
                onClick={() => scrollMenu("right", "#orgMenu", 8)}
              >
                <FontAwesomeIcon icon={faCaretRight} className="text-lg" />
              </div>
            </div>
            <div className="relative flex justify-center">
              {organization.map((el, idx) => (
                <div
                  key={idx}
                  className={`top-0 mt-6 mb-2 md:absolute flex flex-col items-center 
                    transition duration-300 ${
                      el.id == orgActive
                        ? "scale-100 delay-300 ease-out"
                        : "scale-0 ease-in md-max:hidden"
                    }`}
                >
                  <div className="text-xl text-center font-semibold text-night-light">
                    {el.role}
                    <span className="text-green-neon"> @ {el.name}</span>
                  </div>
                  <div className="text-sm">
                    {el.start} – {el.end}
                  </div>
                  <div className="mt-4">
                    <ul className="ml-4 list-disc marker:text-green-neon">
                      {el.description.map((elDesc, idxDesc) => (
                        <li key={idxDesc}>{elDesc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="certification" className="mt-10">
          <div
            data-aos="fade-up"
            className="font-bold text-xl text-night-light underline"
          >
            Certifications
          </div>
          <div className="mt-4">
            <table data-aos="fade-up" className="w-full">
              <thead>
                <tr>
                  <td>Year/Month</td>
                  <td className="md-max:hidden">Organizer</td>
                  <td>Title</td>
                </tr>
              </thead>
              <tbody>
                {certification.map((el, idx) => (
                  <tr key={idx}>
                    <td>
                      {el.year}/{el.month}
                    </td>
                    <td className="sec-cell md-max:hidden">{el.organizer}</td>
                    <td>{el.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="awards" className="mt-10">
          <div
            data-aos="fade-up"
            className="font-bold text-xl text-night-light underline"
          >
            Honors and Awards
          </div>
          <div className="mt-4">
            <table data-aos="fade-up" className="w-full">
              <thead>
                <tr>
                  <td>Year</td>
                  <td>Title</td>
                  <td>Event</td>
                  <td className="md-max:hidden">Organizer</td>
                </tr>
              </thead>
              <tbody>
                {award.map((el, idx) => (
                  <tr key={idx}>
                    <td>{el.year}</td>
                    <td>{el.title}</td>
                    <td>{el.event}</td>
                    <td className="sec-cell md-max:hidden">{el.organizer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ----- SECTION: CONTACT ----- */}
      <section
        id="contact"
        className="min-h-[calc(100vh-5rem)] flex flex-col justify-center"
      >
        <div
          data-aos="fade-up"
          className="font-bold text-xl text-green-neon pt-20 text-center line-beside-text"
        >
          Move forward!
        </div>
        <div data-aos="fade-up" className="mt-10 max-w-xl mx-auto">
          <div className="text-4xl text-center font-bold text-night-light">
            Link Up With Me
          </div>
          {/* <div>
            Although I’m not currently looking for any new opportunities, my inbox 
            is always open. Whether you say hi or just ask me something, I'll reach 
            back to you as soon as possible!
          </div> */}
          <div data-aos="fade-up" className="mt-6 text-center">
            I'm currently looking for new role opportunities. If my profile
            matches or has the latest opportunity information, you can contact
            me via email. You can also say hi or just ask me something, I'll
            reach back to you as soon as possible!
          </div>
          <div data-aos="fade-up" className="my-16 flex justify-center">
            <a href="mailto:syarifuddinfa@gmail.com" className="button">
              Say Hi!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
