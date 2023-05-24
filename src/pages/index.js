import { useState } from "react";
import Image from "next/image";
import syarifuddin_img from "@/img/syarifuddin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import workExp from "@/doc/workExp.json";
import ownProject from "@/doc/ownProject.json";
import organization from "@/doc/organization.json";
import award from "@/doc/award.json";

export default function Home() {
  const [workActive, setWorkActive] = useState("TTL ID");
  const [orgActive, setOrgActive] = useState("URO");

  return (
    <>
      <section
        id="title"
        className="pt-4 pb-14 min-h-[calc(100vh-5rem)] flex flex-col justify-center"
      >
        <div data-aos="fade-up" className="text-lg text-green-neon my-2">
          Hi everyone! My name is
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-5xl text-night-light font-bold my-2"
        >
          Syarifuddin Fakhri A.
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-4xl font-semibold my-2"
        >
          I'm a technology enthusiast especially in software
        </div>
        <div data-aos="fade-up" data-aos-delay="700" className="my-2">
          I'm a software engineer who specializes in building and designing
          various kinds of software to make great digital experiences.
          Currently, I'm focuses on finising my thesis and building website for
          <span className="text-link">
            <a href="https://www.linkedin.com/company/team-tanpa-les-indonesia/mycompany/">
              {" "}
              TTL ID
            </a>
          </span>
          .
        </div>
      </section>

      <section
        id="about"
        className="pt-20 pb-4 min-h-screen flex flex-col justify-center"
      >
        <div
          data-aos="fade-up"
          className="font-bold text-2xl text-night-light line-beside-text"
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
              alt="syarifuddin-img"
              width="500"
              height="500"
            />
          </div>
          <div data-aos="fade-up">
            <div className="my-2">
              Hi! My name is Syarifuddin and I enjoy learning and creating
              something related to digital information technology. My interest
              in IT started in 2015 when I joined the computer olympiad team in
              high school.
            </div>
            <div className="my-2">
              I'm a student of Informatics in
              <span className="text-link mx-2">
                <a href="https://www.itb.ac.id/">
                  {" "}
                  Institut Teknologi Bandung (ITB){" "}
                </a>
              </span>
              and an IT specialist in
              <span className="text-link">
                <a href="https://www.linkedin.com/company/team-tanpa-les-indonesia/mycompany/">
                  {" "}
                  TTL ID
                </a>
              </span>
              . I spent most of my time to studying Informatics and making a
              dancing robot for a National Robotics Contest
            </div>
            <div className="my-2">
              Fast-forward to today, and I’ve had the privilege of working at
              <span className="text-link">
                <a href="https://pajak.io/"> Fintax </a>
              </span>
              as junior frontend developer. My main responsibility is making
              interface of website and integrate with API.
            </div>
            <div className="my-2">
              Here are a few technologies I’ve been working with recently:
              <ul className="my-2 flex flex-wrap list-disc ml-4 marker:text-green-neon">
                <li className="w-40">Node.js</li>
                <li className="w-40">Vue.js</li>
                <li className="w-40">React.js</li>
                <li className="w-40">Go</li>
                <li className="w-40">Flutter</li>
                <li className="w-40">Python</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next: Ubah button saat mobile menjadi dropdown/scrollable-select */}
      <section
        id="work"
        className="pt-20 pb-4 min-h-screen flex flex-col justify-center"
      >
        <div
          data-aos="fade-up"
          className="font-bold text-2xl text-night-light line-beside-text"
        >
          Where I've Work
        </div>
        <div
          data-aos="fade-up"
          className="mt-10 md:min-h-[35vh] max-w-xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-2">
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

      <section
        id="experience"
        className="pt-20 pb-4 min-h-screen flex flex-col justify-center"
      >
        <div
          data-aos="fade-up"
          className="font-bold text-2xl text-night-light line-beside-text"
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

        {/* Next: Ubah button saat mobile menjadi dropdown/scrollable-select */}
        <div id="organaizations" className="mt-10 min-h-[376px]">
          <div
            data-aos="fade-up"
            className="font-bold text-xl text-night-light underline"
          >
            Organizations
          </div>
          <div
            data-aos="fade-up"
            className="mt-4 max-w-xl mx-auto md:min-h-[35vh]"
          >
            <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
              {organization.map((el, idx) => (
                <div
                  key={idx}
                  onClick={() => setOrgActive(el.id)}
                  className={`button-menu ${
                    el.id == orgActive && "text-green-neon link-underline-size"
                  }`}
                >
                  {el.id}
                </div>
              ))}
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

      <section
        id="contact"
        className="py-20 min-h-screen flex flex-col justify-center"
      >
        <div
          data-aos="fade-up"
          className="font-bold text-xl text-green-neon line-beside-text"
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
