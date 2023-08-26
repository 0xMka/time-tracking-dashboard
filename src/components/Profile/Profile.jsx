import s from "./style.module.css";
import Image from "next/image";
import { ButtonChoice } from "../ButtonChoice/ButtonChoice";

const TIMEFRAMES = ["Daily", "Weekly", "Monthly"];

export const Profile = ({
  userName,
  imageProfile,
  onItemClick,
  currentTimeframe,
}) => {
  return (
    <div className={s.container}>
      <div className={s.profile}>
        <div className={s.img}>
          <Image
            src={imageProfile}
            layout="fill"
            objectFit="cover"
            alt="Picture of the profile"
          />
        </div>
        <div className={s.content}>
          <p className={s.text}>Report for</p>
          <h3 className={s.name}>{userName}</h3>
        </div>
      </div>
      <div className={s.choice}>
        {TIMEFRAMES.map((diff, i) => {
          return (
            <ButtonChoice
              key={i}
              onClick={onItemClick}
              name={diff}
              currentTimeframe={currentTimeframe}
            />
          );
        })}
      </div>
    </div>
  );
};
