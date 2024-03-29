import React from 'react'
import styles from './Services.module.css'  
import {FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'
import { GoGraph } from "react-icons/go";
import { FaRobot } from "react-icons/fa";

function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>Web Devlopment</h4>
            <p>I am passionate about learning and creating, and I'm eager to use my skills and knowledge to build user-friendly and visually appealing websites that meet your specific needs and goals.</p>
        </div>
        <div className={styles.services_items}>
            <GoGraph/>
            <h4>Data Analysis</h4>
            <p>I am a data analysis service created by a student, eager to help you explore and understand your data.</p>
        </div>
        <div className={styles.services_items}>
            <FaRobot/>
            <h4>Businessman</h4>
            <p>Amway businessman 3%</p>
        </div>
      </div>
    </div>
  )
}

export default Services