import React, { useEffect, useRef, useState } from 'react'
import "../styles/styles.css"
export default function Countdown() {
    const [seg, setSeg] = useState(59);
    const [min, setMin] = useState(59);
    const [hours, setHour] = useState(23);
    const [days, setDays] = useState(8);

    
    let intervalSeg = useRef();
    let intervalMin = useRef();
    let intervalHour = useRef();
    let intervalDays = useRef();

    const scratchSec = () => setSeg((num)=> num - 1);
    const scratchMinute = () => setMin((num)=> num - 1);
    const scratchHour = () => setHour((num)=> num - 1);
    const scratchDays = () => setDays((num)=> num - 1);


    if(seg < 0){
      setSeg(59)
    }if(min < 0){
      setMin(59);
    }if(hours < 0){
      setHour(23)
    }

   

    useEffect(() => {
        
        intervalSeg.current = setInterval(scratchSec, 1000);
        intervalMin.current = setInterval(scratchMinute, 60000)
        intervalHour.current = setInterval(scratchHour, 3600000)
        intervalDays.current  = setInterval(scratchDays, 3600000 * 24);

      }, []);
     
  return (
    <div className="container">
      <div className='reloj'>
      <div className='pointer'>{days}</div>
        <h6>DAYS</h6>
        </div>

        <div className='reloj'>
        <div className='pointer'>{hours}</div>
        <h6>HOURS</h6>
        </div>

        <div className='reloj'>
        <div className='pointer'>{min}</div>
        <h6>MINUTES</h6>
        </div>

        <div className='reloj'>
        <div className='pointer'>{seg}</div>
        <h6>SECONDS</h6>
        </div>
    </div>

    
  );
}
