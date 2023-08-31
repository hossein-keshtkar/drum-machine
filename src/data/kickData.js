import kick1 from "../assets/Alchemist Kick 1.wav";
import kick2 from "../assets/Alchemist Kick 2.wav";
import kick3 from "../assets/Alchemist Kick 3.wav";
import kick4 from "../assets/Alchemist Kick 4 (CNN).wav";
import kick5 from "../assets/Alchemist Kick 5.wav";
import kick6 from "../assets/Alchemist Kick 6.wav";
import kick7 from "../assets/Alchemist Kick 7.wav";
import kick8 from "../assets/Alchemist Kick 8.wav";
import kick9 from "../assets/Alchemist Kick 9.wav";

export const kickData = {
  regEx: [/[UIOJKLM,.]/],
  soundLinks: [
    [kick1, kick2, kick3],
    [kick4, kick5, kick6],
    [kick7, kick8, kick9],
  ],
  instruments: [
    ["HiHat 1", "HiHat 2", "HiHat 3"],
    ["HiHat 4", "HiHat 5", "HiHat 6"],
    ["HiHat 7", "HiHat 8", "HiHat 9"],
  ],
  keys: [
    ["U", "I", "O"],
    ["J", "K", "L"],
    ["M", ",", "."],
  ],
};
