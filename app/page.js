import { LandingPage } from "@/pages/LandingPage/LandingPage";
import style from './page.module.css'
import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={style.main}>
      <Header/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}
