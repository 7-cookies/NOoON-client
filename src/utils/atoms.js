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


export const outModalState = atom({
  key: "outModalStateM",
  default: false,
})

export const checkmodalState = atom({
  key: "ckState",
  default: true,
});

export const newInfo = atom({
  key: "newInfo",
  default: [],
});