
import style from './page.module.css'
import { LandingPage } from '@/pages/landingPage';

export default function Home() {
  return (
    <div className={style.main}>
      <LandingPage/>
    </div>
  );
}
