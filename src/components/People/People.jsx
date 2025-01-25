import React from "react";
import { skills, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";



const People = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    section className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="skils"></a>

      <motion.div
      variants={footerVariants}
      className={`yPaddings innerWidth ${css.container}`}>


        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Skills I Know in Development</span>
          <p style={{ marginTop: "2rem" }}>
          Proficient in programming languages like Dart,Python, JavaScript, and Swift.
          </p>
          <p>Experienced in modern frameworks and tools like Flutter and Django.</p>
        </div>
       <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {skills.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`}>
                  <img src={comment.img} alt="" />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>


      </motion.div>

    </motion.section>
  );
};

export default People;
