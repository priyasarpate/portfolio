import style from "../styles/Home.module.css";
import React from "react";
import Image from "next/image";
import portfolio_img from "../components/asset/progressive.svg";
import 'animate.css';

function IntroTrail() {
  return (
    <div class="animate__animated animate__fadeInDown">
      <div className={style.intro_Container}>
        <div className={style.Home_text}>
        {/* <h1 class="animate__animated animate__fadeInDown">An animated element</h1>        */}
          <p className={style.main_Heading}>Hy! Im Gunpriya</p>
          <p className={style.second_Heading}><span className={style.span}></span></p>
          <p className={style.discription}>
            I work to make better web; one that is fast, easy to use, beatiful,
            accesible to all, and fustration free. Regardless of your specific
            business requirement.
          </p>

          <button className={style.CaseStudy_btn}>Hire Me</button>
        </div>
        <div className={style.landing_page_cover}>
          <Image
            className={style.cover_img}
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={portfolio_img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default IntroTrail;
