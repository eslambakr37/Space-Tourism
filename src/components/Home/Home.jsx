import React from 'react'
import style from './Home.module.css'
import { useNavigate } from "react-router-dom";
export default function Home() {
  
  const navigate = useNavigate();

  function handleClick() {
    navigate("/destination");
  }

  return (
    <div className='container justify-content-center align-items-center'>
      <div className={style.content}>
        <div className={style.text}>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <button onClick={handleClick} className={style.circle}>
          <h4>EXPLORE</h4>
        </button>
      </div>
    </div>
  )
}
