import eyeI from "../asset/icon/menuIcon/eyeIcon.png";
import headI from "../asset/icon/menuIcon/headIcon.png";
import armI from "../asset/icon/menuIcon/armIcon.png";
import mouthI from "../asset/icon/menuIcon/mouthIcon.png";
import noseI from "../asset/icon/menuIcon/noseIcon.png";
import accI from "../asset/icon/menuIcon/accIcon.png";

export const menuData = [
  { categoryName: "head", url: headI },
  { categoryName: "eye", url: eyeI },
  { categoryName: "nose", url: noseI },
  { categoryName: "mouth", url: mouthI },
  { categoryName: "arm", url: armI },
  { categoryName: "acc", url: accI },
];
//기본이미지
export const base = process.env.REACT_APP_S3_URL + "dressPalette/base.png";
//투명이미지
export const none =
  process.env.REACT_APP_S3_URL + "dressPalette/transparent.png";

//머리
const headPal = process.env.REACT_APP_S3_URL + "dressPalette/head/headPal_";
const head = process.env.REACT_APP_S3_URL + "dressPutOn/head/head_";

export const headImg = [
  { palette: none, putOn: none },
  { palette: headPal + "1.png", putOn: head + "1.png", val: "head1" },
  { palette: headPal + "2.png", putOn: head + "2.png", val: "head2" },
  { palette: headPal + "3.png", putOn: head + "3.png", val: "head3" },
  { palette: headPal + "4.png", putOn: head + "4.png", val: "head4" },
  { palette: headPal + "5.png", putOn: head + "5.png", val: "head5" },
  { palette: headPal + "6.png", putOn: head + "6.png", val: "head6" },
  { palette: headPal + "7.png", putOn: head + "7.png", val: "head7" },
  { palette: headPal + "8.png", putOn: head + "8.png", val: "head8" },
  { palette: headPal + "9.png", putOn: head + "9.png", val: "head9" },
  { palette: headPal + "10.png", putOn: head + "10.png", val: "head10" },
  { palette: none, putOn: none },
];

//눈
const eyePal = process.env.REACT_APP_S3_URL + "dressPalette/eye/eyePal_";
const eye = process.env.REACT_APP_S3_URL + "dressPutOn/eye/eye_";
export const eyeImg = [
  { palette: none, putOn: none },
  { palette: eyePal + "1.png", putOn: eye + "1.png", val: "eye1" },
  { palette: eyePal + "2.png", putOn: eye + "2.png", val: "eye2" },
  { palette: eyePal + "3.png", putOn: eye + "3.png", val: "eye3" },
  { palette: eyePal + "4.png", putOn: eye + "4.png", val: "eye4" },
  { palette: eyePal + "5.png", putOn: eye + "5.png", val: "eye5" },
  { palette: eyePal + "6.png", putOn: eye + "6.png", val: "eye6" },
  { palette: eyePal + "7.png", putOn: eye + "7.png", val: "eye7" },
  { palette: eyePal + "8.png", putOn: eye + "8.png", val: "eye8" },
  { palette: eyePal + "9.png", putOn: eye + "9.png", val: "eye9" },
  { palette: eyePal + "10.png", putOn: eye + "10.png", val: "eye10" },
  { palette: none, putOn: none },
];

//코
const nosePal = process.env.REACT_APP_S3_URL + "dressPalette/nose/nosePal_";
const nose = process.env.REACT_APP_S3_URL + "dressPutOn/nose/nose_";
export const noseImg = [
  { palette: none, putOn: none },
  { palette: nosePal + "1.png", putOn: nose + "1.png", val: "nose1" },
  { palette: nosePal + "2.png", putOn: nose + "2.png", val: "nose2" },
  { palette: nosePal + "3.png", putOn: nose + "3.png", val: "nose3" },
  { palette: nosePal + "4.png", putOn: nose + "4.png", val: "nose4" },
  { palette: nosePal + "5.png", putOn: nose + "5.png", val: "nose5" },
  { palette: nosePal + "6.png", putOn: nose + "6.png", val: "nose6" },
  { palette: nosePal + "7.png", putOn: nose + "7.png", val: "nose7" },
  { palette: nosePal + "8.png", putOn: nose + "8.png", val: "nose8" },
  { palette: nosePal + "9.png", putOn: nose + "9.png", val: "nose9" },
  { palette: nosePal + "10.png", putOn: nose + "10.png", val: "nose10" },
  { palette: none, putOn: none },
];

//팔
const armPal = process.env.REACT_APP_S3_URL + "dressPalette/arm/armPal_";
const arm = process.env.REACT_APP_S3_URL + "dressPutOn/arm/arm_";
export const armImg = [
  { palette: none, putOn: none },
  { palette: armPal + "1.png", putOn: arm + "1.png", val: "arm1" },
  { palette: armPal + "2.png", putOn: arm + "2.png", val: "arm2" },
  { palette: armPal + "3.png", putOn: arm + "3.png", val: "arm3" },
  { palette: armPal + "4.png", putOn: arm + "4.png", val: "arm4" },
  { palette: armPal + "5.png", putOn: arm + "5.png", val: "arm5" },
  { palette: armPal + "6.png", putOn: arm + "6.png", val: "arm6" },
  { palette: armPal + "7.png", putOn: arm + "7.png", val: "arm7" },
  { palette: armPal + "8.png", putOn: arm + "8.png", val: "arm8" },
  { palette: armPal + "9.png", putOn: arm + "9.png", val: "arm9" },
  { palette: armPal + "10.png", putOn: arm + "10.png", val: "arm10" },
  { palette: none, putOn: none },
];

//입
const mouthPal = process.env.REACT_APP_S3_URL + "dressPalette/mouth/mouthPal_";
const mouth = process.env.REACT_APP_S3_URL + "dressPutOn/mouth/mouth_";
export const mouthImg = [
  { palette: none, putOn: none },
  { palette: mouthPal + "1.png", putOn: mouth + "1.png", val: "mouth1" },
  { palette: mouthPal + "2.png", putOn: mouth + "2.png", val: "mouth2" },
  { palette: mouthPal + "3.png", putOn: mouth + "3.png", val: "mouth3" },
  { palette: mouthPal + "4.png", putOn: mouth + "4.png", val: "mouth4" },
  { palette: mouthPal + "5.png", putOn: mouth + "5.png", val: "mouth5" },
  { palette: mouthPal + "6.png", putOn: mouth + "6.png", val: "mouth6" },
  { palette: mouthPal + "7.png", putOn: mouth + "7.png", val: "mouth7" },
  { palette: mouthPal + "8.png", putOn: mouth + "8.png", val: "mouth8" },
  { palette: mouthPal + "9.png", putOn: mouth + "9.png", val: "mouth9" },
  { palette: mouthPal + "10.png", putOn: mouth + "10.png", val: "mouth10" },
  { palette: none, putOn: none },
];

//악세서리
const accPal = process.env.REACT_APP_S3_URL + "dressPalette/acc/accPal_";
const acc = process.env.REACT_APP_S3_URL + "dressPutOn/acc/acc_";
export const accImg = [
  { palette: none, putOn: none },
  { palette: accPal + "1.png", putOn: acc + "1.png", val: "acc1" },
  { palette: accPal + "2.png", putOn: acc + "2.png", val: "acc2" },
  { palette: accPal + "3.png", putOn: acc + "3.png", val: "acc3" },
  { palette: accPal + "4.png", putOn: acc + "4.png", val: "acc4" },
  { palette: accPal + "5.png", putOn: acc + "5.png", val: "acc5" },
  { palette: accPal + "6.png", putOn: acc + "6.png", val: "acc6" },
  { palette: accPal + "7.png", putOn: acc + "7.png", val: "acc7" },
  { palette: accPal + "8.png", putOn: acc + "8.png", val: "acc8" },
  { palette: accPal + "9.png", putOn: acc + "9.png", val: "acc9" },
  { palette: accPal + "10.png", putOn: acc + "10.png", val: "acc10" },
  { palette: none, putOn: none },
];
