import { DashboardItem } from "../DashboardItem/DashboardItem";
import s from "./style.module.css";
import dataUser from "@/data";

export const DashboardListItem = ({ currentTimeframe }) => {
  return (
    <div className={s.container}>
      {dataUser.map((data) => {
        return (
          <DashboardItem
            key={data.title}
            title={data.title}
            currentHours={
              currentTimeframe === "Daily"
                ? data.timeframes.daily.current
                : currentTimeframe === "Weekly"
                ? data.timeframes.weekly.current
                : data.timeframes.monthly.current
            }
            previousHours={data.timeframes.daily.previous}
            img={data.image}
            colorBg={data.colorBg}
          />
        );
      })}
    </div>
  );
};
