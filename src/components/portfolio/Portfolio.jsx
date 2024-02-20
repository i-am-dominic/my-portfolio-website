import { useRef } from "react";
import "./portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-Commerce Website",
    img: "./e-commerce.png",
    desc: "This is a fully responsive e-commerce website for a fictional sneakers store. Built with HTML, CSS and Javascript.",
    link: "https://github.com/i-am-dominic/e-commerce_website",
  },
  {
    id: 2,
    title: "Real Estate Website",
    img: "./real-estate.png",
    desc: "A website designed for Homyz, a fictional real estate company. Built to fit all screen sizes.",
    link: "https://github.com/i-am-dominic/homyz-real-estate",
  },
  {
    id: 3,
    title: "Job Posting Website",
    img: "./jobarouter.png",
    desc: "A simple website where jobs are posted.",
    link: "https://github.com/i-am-dominic/job_arouter",
  },
  {
    id: 4,
    title: "Quiz App",
    img: "./quiz-app.png",
    desc: "This is a multiple choice quiz app that tests one's knowledge of world historical events with score given at the end of the quiz.",
    link: "https://github.com/i-am-dominic/quiz-app",
  },
];

const Single = ({item}) => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
  <section >
    <div className="container">
      <div className="wrapper">
        <div className="image-container" ref={ref}>
          <img src={item.img} alt="" />
        </div>
        <motion.div className="text-container" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <a href={item.link}><button>See Github Link</button></a>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

const Portfolio = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref, 
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio