import { ACTIVE } from "../constants/keywords";

export const activeClassHandler = (ref) => {
  if (!ref) return;

  ref.current.classList.add(ACTIVE);

  setTimeout(() => {
    ref.current.classList.remove(ACTIVE);
  }, 200);
};
