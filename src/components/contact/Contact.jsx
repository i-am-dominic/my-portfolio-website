import "./contact.css";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="text-container" variants={variants}>
        <motion.h1 variants={variants}>Let&apos;s work together</motion.h1>
        <div className="flex-container">
          <div className="left">
            <motion.div className="item" variants={variants}>
              <h2>Mail</h2>
              <span>dominiciyasele@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <h2>Address</h2>
              <span>21/22, Arometa Layout, Eleyele, Ibadan. Oyo state. Nigeria</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <h2>Phone</h2>
              <span>+2348167213340</span>
            </motion.div>
          </div>
          
          <div className="right">
            <motion.div className="item" variants={variants}>
              <h2>Github</h2>
              <span>www.github.com/i-am-dominic</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <h2>Telegram Username</h2>
              <span>@Dominic_Iyasele</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <h2>LinkedIn</h2>
              <span>www.linkedin.com/in/dominic-iyasele</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Contact