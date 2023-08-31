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
    ["Kick 1", "Kick 2", "Kick 3"],
    ["Kick 4", "Kick 5", "Kick 6"],
    ["Kick 7", "Kick 8", "Kick 9"],
  ],
  keys: [
    ["U", "I", "O"],
    ["J", "K", "L"],
    ["M", ",", "."],
  ],
};
