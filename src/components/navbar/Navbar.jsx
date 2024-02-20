import Sidebar from "../sidebar/Sidebar"
import "./navbar.css"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >
          Dynamic <span className="logo-color">Dominic</span>
        </motion.span>
        <div className="links">
          <a href="https://web.facebook.com/dominicnicholas.iyasele/"><img src="/facebook.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/dominic-iyasele/"><img src="/linkedin.png" alt="" /></a>
          <a href="https://twitter.com/DominicIyasele"><img src="/x.png" alt="" /></a>
          <a href="https://t.me/Dominic_Iyasele"><img src="/telegram.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar