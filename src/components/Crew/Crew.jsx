import React, { useState } from 'react'
import style from './Crew.module.css'
import Data from '../../data.json'
import douglas from '../../assets/crew/image-douglas-hurley.webp'
import mark from '../../assets/crew/image-mark-shuttleworth.webp'
import victor from '../../assets/crew/image-victor-glover.webp'
import anousheh from '../../assets/crew/image-anousheh-ansari.webp'
export default function Crew() {

  const [index, setIndex] = useState(0);
  const crewImgs = [douglas, mark, victor, anousheh];
  const [crewInfo, setcrewInfo] = useState(Data.crew[0]);
  const [crewImg, setcrewImg] = useState(crewImgs[0]);
  function changecrewInfo(index) {
    setcrewInfo(Data.crew[index]);
    setcrewImg(crewImgs[index]);
    setIndex(index);
  }
  return (
    <div className='container justify-content-center align-items-center'>
      <div className={style.crewContainer}>
        <div className={style.inerContent}>
          <h5><span className='numbering'>02</span>Meet your crew</h5>
          <div className={style.crewInfo}>
            <div>
              <ul className={style.ulSmallScreen} >
                <li onClick={() => (changecrewInfo(0))} className={index == 0 ? style.active : ''}></li>
                <li onClick={() => (changecrewInfo(1))} className={index == 1 ? style.active : ''}></li>
                <li onClick={() => (changecrewInfo(2))} className={index == 2 ? style.active : ''}></li>
                <li onClick={() => (changecrewInfo(3))} className={index == 3 ? style.active : ''}></li>
              </ul>
              <h4>{crewInfo.role}</h4>
              <h3>{crewInfo.name}</h3>
              <p>{crewInfo.bio}</p>
              <ul className={style.ulLargeScreen}>
                <li onClick={() => (changecrewInfo(0))} className={index == 0 ? style.active : ''}></li>
                <li onClick={() => (changecrewInfo(1))} className={index == 1 ? style.active : ''}></li>
                <li onClick={() => (changecrewInfo(2))} className={index == 2 ? style.active : ''}></li>
                <li onClick={() => (changecrewInfo(3))} className={index == 3 ? style.active : ''}></li>
              </ul>
            </div>
            <div className={style.imgContainer}>
              <img src={crewImg} alt={crewInfo.name} />
              <div className={style.line}></div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
