import React, { useState } from 'react'
import style from "../styles/form.module.css"
export default function hobbies() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("Type the message");
  const [loader,setLoader] = useState(false);
  const [done,setDone] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    if(email !== null || email != "" && note != null && note != ""){
      try{
        setLoader(true);
        const response = await fetch('/api/sendemail',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({email,note})
        })
        if(response){
          console.log("email sent");
          setDone(true);
        }else{
          alert('error')
          console.log("error");
        }
        setLoader(false);
      }catch{
        setLoader(false);
      }
    }else{
      
    }
  }
  return (
    <div className={style.main_frame}>
      <div className={style.form_main}>
        <input type='text'
          onChange={(e) => { setEmail(e.target.value) }}
          placeholder='Enter email'
          value={email}
          className={style.email} />
        <textarea
          onChange={(e) => { setNote(e.target.value) }}
          cols={20}
          rows={5}
          value={note}
          className={style.note}>Type the message</textarea>
        <button onClick={submit} className={style.button}>
          {loader ? <div className={style.loader}></div> : "Send"}
        </button>
        <span className={style.span}>
          {done ? "Message sent" : ""}
        </span>
      </div>
    </div>
  )
}
