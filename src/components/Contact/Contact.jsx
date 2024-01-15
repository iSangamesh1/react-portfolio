import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            
        </div>    
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl('contact/emailIcon.png')} className={styles.accImg} alt='Email Icon'></img>
                        <a target='_blank' href='mailto:isangamesh4@gmail.com' className={styles.accLink}>isangamesh4@gmail.com</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl('contact/linkedinIcon.png')} className={styles.accImg} alt='LinkedIn Icon'></img>
                        <a target='_blank' href='https://www.linkedin.com/in/isangamesh/' className={styles.accLink}>linkedin.com/isangamesh</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl('contact/githubIcon.png')} className={styles.accImg} alt='Github Icon'></img>
                        <a target='_blank' href='https://github.com/iSangamesh1' className={styles.accLink}>github.com/isangamesh4</a>
                    </li>
                </ul>
            
        
    </footer>
  )
}
