import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section id="title">
        <div className="font-bold text-5xl text-center py-36 ">
          Hello, World!
        </div>
      </section>
    </>
  );
}
