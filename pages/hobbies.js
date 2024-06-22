import React, { useState } from 'react';
import style from "../styles/form.module.css";

export default function Hobbies() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("Type the message");
  const [loader, setLoader] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    
    // Basic validation to ensure email and note are not empty
    if (!email.trim() || !note.trim()) {
      setError("Please enter both email and message.");
      return;
    }

    try {
      setLoader(true);
      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, note })
      });

      if (response.ok) {
        setDone(true);
        setError("");
      } else {
        alert('Failed to send email');
        console.log("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert('Failed to send email');
    } finally {
      setLoader(false);
    }
  }

  return (
    <div className={style.main_frame}>
      <div className={style.form_main}>
        <input
          type='text'
          onChange={(e) => { setEmail(e.target.value) }}
          placeholder='Enter email'
          value={email}
          className={style.email} />
        <textarea
          onChange={(e) => { setNote(e.target.value) }}
          cols={20}
          rows={5}
          value={note}
          className={style.note}></textarea>
        <button onClick={submit} className={style.button}>
          {loader ? <div className={style.loader}></div> : "Send"}
        </button>
        {error ? <center style={{color:'red'}}><span className={style.error}>{error}</span></center>:""}
        <span className={style.span}>
          {done ? "Message sent" : ""}
        </span>
      </div>
    </div>
  );
}
