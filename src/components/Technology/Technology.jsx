import React, { useState } from 'react'
import style from './Technology.module.css'
import Data from '../../data.json'
import launchPortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceportPortrait from '../../assets/technology/image-spaceport-portrait.jpg'
import capsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg'
import launchLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import spaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg'
import capsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg'
export default function Technology() {

  const [index, setIndex] = useState(0);
  const technologyPortraitImgs = [launchPortrait, spaceportPortrait, capsulePortrait];
  const technologyLandscapeImgs = [launchLandscape, spaceportLandscape, capsuleLandscape];
  const [technologyInfo, settechnologyInfo] = useState(Data.technology[0]);
  const [technologyPortraitImg, setTechnologyPortraitImg] = useState(technologyPortraitImgs[0]);
  const [technologyLandscapeImg, setTechnologyLandscapeImg] = useState(technologyLandscapeImgs[0]);
  function changetechnologyInfo(index) {
    settechnologyInfo(Data.technology[index]);
    setTechnologyPortraitImg(technologyPortraitImgs[index]);
    setTechnologyLandscapeImg(technologyLandscapeImgs[index]);
    setIndex(index);
  }
  return (
      <div className={style.technologyContainer}>
        <h5><span className='numbering'>03</span>SPACE LAUNCH 101</h5>
        <img src={technologyLandscapeImg} alt={technologyInfo.name} />
        <div className={style.inerContent}>
          <ul>
            <li onClick={() => (changetechnologyInfo(0))} className={index == 0 ? style.active : ''}>1</li>
            <li onClick={() => (changetechnologyInfo(1))} className={index == 1 ? style.active : ''}>2</li>
            <li onClick={() => (changetechnologyInfo(2))} className={index == 2 ? style.active : ''}>3</li>
          </ul>
          <div className={style.technologyInfo}>
            <p className={style.tech}>THE TERMINOLOGY…</p>
            <h3>{technologyInfo.name}</h3>
            <p className={style.desc}>{technologyInfo.description}</p>
          </div>
          <img className={style.techImg} src={technologyPortraitImg} alt={technologyInfo.name} />
        </div>
      </div>
  )
}
