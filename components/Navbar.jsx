import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    
    <div className={style.container}>
      <Link href="/">✨Gunpriya</Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/team">Projects</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/healthCare">Blogs</Link>
        </li>
        {/* <li className={style.listItem}>
          <Link href="/contact"><button className={style.Contact_button}>Contact Me</button></Link>
        </li> */}
         <li className={style.listItem}>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/team">Team</Link>
        </li>
        <li className={style.menuItem}>
        <Link href="/healthCare">Healthcare</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/contact"><button className={style.Contact_button}>Connect</button></Link>
        </li>
      </ul>
    </div>

  );
};

export default Navbar;
