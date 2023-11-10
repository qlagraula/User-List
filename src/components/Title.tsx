import fileUp from "@assets/file-up.svg";
import plus from "@assets/plus.svg";
import { css } from "@styled-system/css";
import { button } from "@styled-system/recipes";

type TitleProps = {
  count?: number;
};

function Title({ count = 0 }: TitleProps) {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
      })}
    >
      <h1 className={css({ fontWeight: "semibold", fontSize: "xl" })}>
        Users ({count})
      </h1>
      <div className={css({ display: "flex", gap: "2" })}>
        <button className={button()}>
          <img src={fileUp} alt="file upload" />
          Export list
        </button>
        <button className={button({ visual: "secondary" })}>
          <img src={plus} alt="plus" />
          New user
        </button>
      </div>
    </div>
  );
}

export default Title;
