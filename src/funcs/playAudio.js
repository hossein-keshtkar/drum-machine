import { Howl } from "howler";

export const playAudio = (audio, volume) => {
  const newAudio = new Howl({
    src: [audio],
    volume,
  });

  newAudio.play();
};
