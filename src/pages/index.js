import Image from "next/image";
import syarifuddin_img from "@/img/syarifuddin.jpg";

export default function Home() {
  return (
    <>
      <section
        id="title"
        className="pt-4 pb-4 min-h-[calc(100vh-5rem)] flex flex-col justify-center"
      >
        <div className="text-lg text-green-neon my-2">
          Hi everyone! My name is
        </div>
        <div className="text-5xl text-night-light font-bold my-2">
          Syarifuddin Fakhri A.
        </div>
        <div className="text-4xl font-semibold my-2">
          I'm a technology enthusiast especially in software
        </div>
        <div className="my-2">
          I'm a software engineer who specializes in building and designing
          various kinds of software to make great digital experiences.
          Currently, I'm focuses on finising my thesis and building website for
          <span className="text-link ml-2">
            <a href="https://www.linkedin.com/company/team-tanpa-les-indonesia/mycompany/">
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
        <div className="font-bold text-2xl text-night-light line-beside-text">
          Who Am I?
        </div>
        <div className="block md:grid md:grid-cols-[2fr_3fr] gap-6 mt-10">
          <div className="w-3/4 m-10 md:my-0 md:mt-2">
            <Image
              src={syarifuddin_img}
              alt="syarifuddin-img"
              width="500"
              height="500"
            />
          </div>
          <div>
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
                  Institut Teknologi Bandung (ITB)
                </a>
              </span>
              and an IT specialist in
              <span className="text-link ml-2">
                <a href="https://www.linkedin.com/company/team-tanpa-les-indonesia/mycompany/">
                  TTL ID
                </a>
              </span>
              . I spent most of my time to studying Informatics and making a
              dancing robot for a National Robotics Contest
            </div>
            <div className="my-2">
              Fast-forward to today, and I’ve had the privilege of working at
              <span className="text-link mx-2">
                <a href="https://pajak.io/">Fintax</a>
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
    </>
  );
}
