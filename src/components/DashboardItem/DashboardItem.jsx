import s from "./style.module.css";
import Image from "next/image";
// import img from "@/assets/images/icon-work.svg";
import { ButtonParameter } from "../ButtonParameter/ButtonParameter";

export const DashboardItem = ({
  title,
  currentHours,
  previousHours,
  img,
  colorBg,
}) => {
  return (
    <div className={s.container}>
      <div className={s.header} style={{ backgroundColor: colorBg }}>
        <div className={s.img}>
          <Image src={img} alt="Picture of the profile" />
        </div>
      </div>
      <div className={s.content}>
        <div className={s.content_header}>
          <h2 className={s.title}>{title}</h2>
          <ButtonParameter />
        </div>
        <div className={s.content_data}>
          <p className={s.hours}>{currentHours}hrs</p>
          <p className={s.last_week}>Last Week - {previousHours}hrs</p>
        </div>
      </div>
    </div>
  );
};
