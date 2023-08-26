import s from "./style.module.css";

export const ButtonChoice = ({ name, onClick, currentTimeframe }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={s.btn}
      style={{ color: currentTimeframe === name ? "#ffffff" : "#7078c9" }}
    >
      {name}
    </button>
  );
};
