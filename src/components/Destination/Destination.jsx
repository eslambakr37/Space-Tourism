import React, { useState } from 'react'
import style from './Destination.module.css'
import Data from '../../data.json'
import moon from '../../assets/destination/image-moon.webp'
import mars from '../../assets/destination/image-mars.webp'
import europa from '../../assets/destination/image-europa.webp'
import titan from '../../assets/destination/image-titan.webp'

export default function Destination(props) {
  const [index, setIndex] = useState(0);
  const destinationImgs = [moon, mars, europa, titan];
  const [destinationInfo, setDestinationInfo] = useState(Data.destinations[0]);
  const [destinationImg, setDestinationImg] = useState(destinationImgs[0]);
  function changedestinationInfo(index) {
    setDestinationInfo(Data.destinations[index]);
    setDestinationImg(destinationImgs[index]);
    setIndex(index);
  }
  return (
    <div className='container justify-content-center align-items-center'>
      <div className={style.destination}>
        <h5><span className='numbering'>01</span>Pick your destination</h5>
        <div className={style.inerContent}>
          <img src={destinationImg} alt="moon" />
          <div className={style.infoBox}>
            <div className={style.inerNav}>
              <ul className='d-flex flex-row'>
                <li onClick={() => (changedestinationInfo(0))} className={index == 0 ? style.active : ''}>MOON</li>
                <li onClick={() => (changedestinationInfo(1))} className={index == 1 ? style.active : ''}>MARS</li>
                <li onClick={() => (changedestinationInfo(2))} className={index == 2 ? style.active : ''}>EUROPA</li>
                <li onClick={() => (changedestinationInfo(3))} className={index == 3 ? style.active : ''}>TITAN</li>
              </ul>
            </div>
            <h2>{destinationInfo.name}</h2>
            <p>{destinationInfo.description}</p>
            <div className={style.line}></div>
            <div className={style.travelInfo}>
              <div>
                <p className='Subheading-2'>AVG. DISTANCE</p>
                <p className='Subheading-1'>{destinationInfo.distance}</p>
              </div>
              <div>
                <p className='Subheading-2'>Est. travel time</p>
                <p className='Subheading-1'>{destinationInfo.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
