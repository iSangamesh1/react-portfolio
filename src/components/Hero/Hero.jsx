import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sangamesh Narayanpethkar</h1>
            <p className={styles.description}>
                I'm Full Stack Developer and Pythonistas with 2 years of experience. Feel free to reach out!
            </p>
            <a href='mailto:isangamesh4@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('hero/heroImage2.png')} alt='Hero image of me' className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
  )
}
