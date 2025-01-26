import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiLogoLinkedinSquare, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { Link } from "react-router-dom";


const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}></div>
        <ul
          className={`flexCenter ${css.menu} ${menuOpened ? css.open : ""}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li><a href="#work" onClick={closeMenu}>Experience</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
          <li>
         <Link to="/blogs">Blogs</Link>
          </li>
          <li><a href="#skils" onClick={closeMenu}>Skills</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <BiLogoLinkedinSquare size={"40px"} onClick={()=>{
              window.open("https://www.linkedin.com/in/rahul-reghu-dev/","_blank")
            }}/>
          </li>
        </ul>

        <div
          className={css.menuIcon}
          onClick={() => {
            console.log("check");
            setMenuOpened((prev) => !prev)}}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
