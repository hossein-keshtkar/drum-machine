import React from 'react'

const ThirdRow = () => {
  return (
    <div className="row">
      <button className="drum-pad" ref={refs.Z} onClick={clickHandle}>
        Z
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          onEnded={() => {}}
          id="Z"
        ></audio>
      </button>
      <button className="drum-pad" ref={refs.X} onClick={clickHandle}>
        X
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          onEnded={() => {}}
          id="X"
        ></audio>
      </button>
      <button className="drum-pad" ref={refs.C} onClick={clickHandle}>
        C
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          onEnded={() => {}}
          id="C"
        ></audio>
      </button>
    </div>
  );
}

export default ThirdRow