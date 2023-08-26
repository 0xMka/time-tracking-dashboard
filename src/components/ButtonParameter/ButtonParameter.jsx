import s from "./style.module.css";
import Image from "next/image";
import iconEllipsis from "@/assets/images/icon-ellipsis.svg";

export const ButtonParameter = () => {
  return (
    <button className={s.btn}>
      <Image src={iconEllipsis} alt="Button parameter" />
    </button>
  );
};
