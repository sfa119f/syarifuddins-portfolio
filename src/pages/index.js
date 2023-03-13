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
    </>
  );
}
