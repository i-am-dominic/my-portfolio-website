import "./hero.css";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-620%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 25,
    },
  },
};
  
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="text-container" variants={textVariants} initial="initial"
        animate="animate"
        >
          <motion.h2 variants={textVariants}>DOMINIC IYASELE</motion.h2>
          <motion.h1 variants={textVariants}>Front-End <br />Web Developer</motion.h1>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div 
        className="slidingTextContainer" 
        variants={sliderVariants} 
        initial="initial" 
        animate="animate"
      >
        Dynamic Front-End Web Developer
      </motion.div>
      <div className="image-container">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero