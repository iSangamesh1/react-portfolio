import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css'

export const ProjectCard = ({
    project : {title, imageSrc, description, skills, demo, source} }) => 
    { 
    return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}></img>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id)=>{
                        <li key={id} className={styles.skill}>{skill}</li>
                })}
            </ul>
            <div>
                    <a href={demo} className={styles.links}>Demo</a>
                    <a href={source} className={styles.link}>Source</a>
                </div>
            </div>
  )
}
