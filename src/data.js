import imgWork from "@/assets/images/icon-work.svg";
import imgPlay from "@/assets/images/icon-play.svg";
import imgStudy from "@/assets/images/icon-study.svg";
import imgExercice from "@/assets/images/icon-exercise.svg";
import imgSocial from "@/assets/images/icon-social.svg";
import imgSelfCare from "@/assets/images/icon-self-care.svg";

const dataUser = [
  {
    title: "Work",
    image: imgWork,
    colorBg: "#FF8B64",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    image: imgPlay,
    colorBg: "#55C2E6",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    image: imgStudy,
    colorBg: "#FF5E7D",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    image: imgExercice,
    colorBg: "#4BCF82",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    image: imgSocial,
    colorBg: "#7335D2",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    image: imgSelfCare,
    colorBg: "#F1C75B",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

export default dataUser;
