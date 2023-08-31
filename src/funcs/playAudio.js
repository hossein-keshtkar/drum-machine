import { Howl } from "howler";

export const playAudio = (audio, volume, callback) => {
  const newAudio = new Howl({
    src: [audio],
    volume,
    onend: () => {
      callback(null);
    },
  });

  newAudio.play();
};
