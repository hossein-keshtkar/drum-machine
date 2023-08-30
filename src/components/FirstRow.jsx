import React from 'react'

const FirstRow = () => {
  return (
    <div className="row">
      <button className="drum-pad" ref={refs.Q} onClick={clickHandle}>
        Q
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          onEnded={() => {}}
          id="Q"
        ></audio>
      </button>
      <button className="drum-pad" ref={refs.W} onClick={clickHandle}>
        W
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          onEnded={() => {}}
          id="W"
        ></audio>
      </button>
      <button className="drum-pad" ref={refs.E} onClick={clickHandle}>
        E
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          onEnded={() => {}}
          id="E"
        ></audio>
      </button>
    </div>
  );
}

export default FirstRow