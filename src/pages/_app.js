import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import SideInfo from "@/components/sideInfo";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="bg-navy-dark text-night min-h-screen">
        <NavBar />
        <SideInfo />
        <div className="h-20"></div>
        <main className="px-6 sm:px-12 md:px-24 lg:px-48 max-w-[1440px] w-full min-h-[calc(100vh-15rem)] md:min-h-[calc(100vh-11rem)] mx-auto">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
