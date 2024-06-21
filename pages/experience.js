import React from 'react'
import styles from '@/styles/Home.module.css';
import style from "../styles/experience.module.css"

export default function experience() {
    return (
        <div className={style.main_frame}>
            <div className={style.right}>
                <div className={style.img_box}>
                    {/* Place the Image component here */}
                    <img
                        className={style.img}
                        src="/images/tpx.PNG"
                        alt="boy coding on laptop"
                    />
                </div>
            </div>
            <div className={style.left}>
                <b className={style.max}>2Y+ Experience </b>
                Graphic Designer <br />
                <b className={style.max}>Freelancer</b> <br />
                Web Developer<br />
                <div className={style.aboutBoard}>
                </div>
            </div>
        </div>
    )
}
