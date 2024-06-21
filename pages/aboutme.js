import React from 'react';
import style from "../styles/aboutme.module.css";

const AboutMe = () => (
    <div className={style.main_frame}>
        <div className={style.right}>
            <div className={style.img_box}>
                {/* Place the Image component here */}
                    <img
                        className={style.img}
                        src="https://images.pexels.com/photos/3153203/pexels-photo-3153203.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="boy coding on laptop"
                    />
            </div>
        </div>
        <div className={style.left}>
            Designer <br />
            <b className={style.max}>Developer</b> <br />
            Freelancer <br />
            <div className={style.aboutBoard}>
                        <p>
                            "Hi, my name is <b>Pranav</b>, and I work primarily in web technologies. With knowledge of API, Backend, and Frontend, Explore my portfolio and let’s create something amazing together!"
                        </p>
                    </div>
                    <div className={style.contact}>
                        <div className={style.icon_panel}>
                            <div className={style.icon_tab} onClick={()=>{window.location.href='https://www.linkedin.com/in/pranav-kshirsagar-python-web-developer'}}><i className={`fab fa-linkedin-in ${style.contact_icon}`} style={{ background: 'rgb(0, 87, 179)' }}></i>
                            <span className={style.sp}>Follow me</span></div>
                            <div className={style.icon_tab} onClick={()=>{window.location.href='https://www.threads.net/@pranavkshirsagar1924'}}><i className={`fab fa-threads ${style.contact_icon}`}></i>
                            <span className={style.sp}>Follow me</span></div>
                        </div>
                    </div>
        </div>
    </div>
);

export default AboutMe;
