import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import { useState, useEffect } from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  const diffInMilliseconds = now - start;
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years
  return diffInYears.toFixed(1); 
};

const Hero = () => {
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const startDate = "2022-04-01"; // Replace with your start date (YYYY-MM-DD)
    setExperience(calculateExperience(startDate));
  }, []);
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Rahul Reghu.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
          <TypeAnimation
              sequence={[
                "I am a skilled Project Manager", // Text to type
                2000, // Delay before typing the next text
                "I have expertise in app development", // Next text
                2000,
                "I specialize in backend development", // Next text
                2000,
                "I excel in server management", // Next text
                2000,
              ]}
              wrapper="span"
              cursor={true}
              speed={50}
              repeat={Infinity}
            />
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./dev_image.png" alt="sample" height={500} />
        </motion.div>

        <a className={css.email} href="mailto:rahulreghupdm@gmail.com">
          rahulreghupdm@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">{experience}</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROJECT MANAGER</span>
            <span>APP & BACKEND DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
