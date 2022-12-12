import React from "react";
import style from "../styles/Project.module.css";
import 'animate.css';

function Project() {
  return (
    <div class="animate__animated animate__fadeInLeft">
    <div className={style.project}>
      <p className={style.project_title}>Recent Projects</p>
      <div className={style.cards}>
        <article className={style.card}>
          <div className={style.icon_container}></div>
          <div className={style.text}>
            <p>Covid Tracker</p>
          </div>
        </article>
        <article className={style.card}>
          <div className={style.icon_container}></div>
          <div className={style.text}>
            <p>Invoice Generator</p>
          </div>
        </article>
        <article className={style.card}>
          <div className={style.icon_container}></div>
          <div className={style.text}>
            <p>Amazone Clone</p>
          </div>
        </article>
        <article className={style.card}>
          <div className={style.icon_container}></div>
          <div className={style.text}>
            <p>Rezumers</p>
          </div>
        </article>
      </div>
    </div>
    </div>
  );
}

export default Project;
