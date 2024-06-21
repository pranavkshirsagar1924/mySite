import React, { useState } from 'react';
import style from "../styles/project.module.css";
import projectsData from './data';
import Image from 'next/image';

export default function Projects() {
    const [project, setProject] = useState(projectsData[0]);
    const [iter, setIter] = useState(0);

    const nextSlide = () => {
        setIter(prevIter => {
            const newIter = (prevIter + 1) % projectsData.length;
            console.log(iter)
            setProject(projectsData[newIter]);
            return newIter;
        });
    };

    return (
        <div className={style.main_frame}>
            <div className={style.right}>
                <div className={style.frame}>
                {project && 
                    <Image src={project.img} className={style.img} width={500} height={500}/>
                }
                </div>
                <div className={style.buttonBox}>
                <button onClick={()=>{window.location.href=`${project.link}`}} className={style.visit}>
                  <i className="fab fa-github"></i>
                </button>
                 <button onClick={nextSlide} className={style.next}>Next</button>
                </div>
            </div> 
            <div className={style.left}>
                {/* Other content can go here */}
                <b className={style.max}>{project.title}</b>
                <p className={style.desc}>{project.desc}</p>
            </div>
        </div>
    );
}
