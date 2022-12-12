import React from "react";
import style from "../styles/Footer.module.css";
import {
  AiFillLinkedin,
  AiOutlineCodepen,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.socialIcons}>
        <div className={style.socialIconLink}>
          <a href="https://www.facebook.com/banerasoft/">
            <AiFillLinkedin />
          </a>
        </div>
        <div className={style.socialIconLink}>
          <a href="https://www.linkedin.com/company/banerasoft-inc/mycompany/">
            <AiOutlineCodepen />
          </a>
        </div>
        <div className={style.socialIconLink}>
          <a href="https://www.linkedin.com/company/banerasoft-inc/mycompany/">
            <AiFillTwitterCircle />
          </a>
        </div>
        <div className={style.socialIconLink}>
          <a href="https://www.linkedin.com/company/banerasoft-inc/mycompany/">
            <AiFillGithub />
          </a>
        </div>
      </div>
      <small className={style.websiteRights}>Gunpriya © 2022</small>
      <br />
    </div>
  );
}

export default Footer;
