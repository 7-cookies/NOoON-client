import { atom } from "recoil";

export const dongsanstep = atom({
  key: "dongsanstep",
  default: {
    name: ``,
    background: ``,
  },
});

export const modalState = atom({
  key: "mdState",
  default: false,
});
