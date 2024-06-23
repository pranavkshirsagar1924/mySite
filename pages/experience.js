import React from 'react'
import styles from '@/styles/Home.module.css';
import style from "../styles/experience.module.css"
import Image from 'next/image';
export default function experience() {
    return (
        <div className={style.main_frame}>
            <div className={style.right}>
                <div className={style.img_box}>
                    {/* Place the Image component here */}
                    <Image
                        className={style.img}
                        src="/images/tpx.PNG"
                        alt="boy coding on laptop"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className={style.left}>
                <b className={style.max}>2Y+ Experience </b>Of
                Graphic Designer <br />
                <b className={style.max}>Freelancer</b> <br />
                Web Developer<br />
                <div className={style.aboutBoard}>
                </div>
            </div>
        </div>
    )
}
