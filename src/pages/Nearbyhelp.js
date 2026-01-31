import React, { useState } from 'react';
import Example from './Navbar';

const Nearbyhelp = () => {
  const [result, setResult] = useState(null);
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [fullLocation, setFullLocation] = useState('');
  const [magnitude, setMagnitude] = useState('');

  const handleButtonClick = async () => {
    const payload = {
      data: [
        
         location,
         "2023-06-09 08:37:26"
        
      ]
    };

    try {
      const response = await fetch('https://sodrazatre-earthquake.hf.space/run/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      setResult(data);
      console.log(data.data[0]);
       // Logging the result to the console
       setMagnitude(data.data[1]);
       setFullLocation(data.data[0])
 
    } catch (error) {
      console.error(error);
    }
  };
const handleClear=()=>{
setFullLocation("")
setMagnitude("")
setTime("")
setLocation("")
}
  return (
    <>
      <Example />
      <div className="earthq-predit">
        <h1>Earthquake Predictive Analytics</h1>
        <p>Experiment with location and time to predict depth and magnitude.</p>
        <div className="earthq-predit-flex">
          <div className="earthq-predit-left">
            <div className="earthq-predit-left-card">
              <div className="earthq-predit-left-card-input">
                <label htmlFor="">location</label>
                <input
                  type="text"
                  placeholder="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="earthq-predit-left-card-input">
                <label htmlFor="">time</label>
                <input
                  type="date"
                  value={time}
                  pattern="\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="earthq-predit-right">
            <div className="earthq-predit-left-card-input">
              <label htmlFor="">full location</label>
              <input
                type="text"
                value={fullLocation}
                readOnly
              />
            </div>
            <div className="earthq-predit-left-card-input">
              <label htmlFor="">magnitude</label>
              <input
                type="text"
                value={magnitude}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="earthq-predit-left-card-btns">
          <button className="secondary"
           onClick={handleClear}
          >Clear</button>

          <button onClick={handleButtonClick}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Nearbyhelp;
