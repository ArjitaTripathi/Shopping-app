import { LandingPage } from "@/pages/LandingPage/LandingPage";
import style from './page.module.css'

export default function Home() {
  return (
    <div className={style.main}>
      <LandingPage/>
    </div>
  );
}
