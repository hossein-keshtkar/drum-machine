import React from 'react'

const SecRow = () => {
  return (
    <div className="row">
      <button className="drum-pad" ref={refs.A} onClick={clickHandle}>
        A
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          onEnded={() => {}}
          id="A"
        ></audio>
      </button>
      <button className="drum-pad" ref={refs.S} onClick={clickHandle}>
        S
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          onEnded={() => {}}
          id="S"
        ></audio>
      </button>
      <button className="drum-pad" ref={refs.D} onClick={clickHandle}>
        D
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          onEnded={() => {}}
          id="D"
        ></audio>
      </button>
    </div>
  );
}

export default SecRow