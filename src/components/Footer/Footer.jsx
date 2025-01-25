import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { BiLogoLinkedinSquare,BiLogoGithub,BiLogoTwitter} from "react-icons/bi";

import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
          Built with passion and <br />
          a touch of code.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:rahulreghupdm@gmail.com">saying hi</a>
          </span>
          <span className="secondaryText">
  
    <BiLogoLinkedinSquare size={24} onClick={
      ()=> {

        window.open("https://www.linkedin.com/in/rahul-reghu-dev/","_blank")
            }
    }/>
    <BiLogoGithub size={24} onClick={()=> {

window.open("https://github.com/rahulreghupdm","_blank")
    }}/>

    <BiLogoTwitter size={24} onClick={()=> {

window.open("https://twitter.com/","_blank")
    }}/>

</span>

        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
