import searchIcon from "@assets/search.svg";
import clear from "@assets/x-circle.svg";

import { css, cva } from "@styled-system/css";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  visual?: "dropdown";
};

const search = cva({
  base: {
    paddingX: "7",
    paddingY: "1.5",
    fontSize: "xs",
    borderColor: "borders.primary",
  },
  variants: {
    visual: {
      dropdown: { borderTopRadius: "md", borderBottomWidth: 1 },
      base: {
        borderWidth: 1,
        borderRadius: "md",
      },
    },
  },
  defaultVariants: { visual: "base" },
});

function SearchBar({ value, onChange, visual }: SearchBarProps) {
  return (
    <div className={css({ position: "relative", width: "fit" })}>
      <input
        value={value}
        className={search({ visual })}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search..."
      />
      <img
        className={css({ position: "absolute", top: "2.5", paddingX: "2" })}
        src={searchIcon}
        alt="search"
      />
      {value.length > 0 && (
        <img
          className={css({
            position: "absolute",
            top: "2.5",
            paddingX: "2",
            right: "0",
            cursor: "pointer",
          })}
          onClick={() => onChange("")}
          src={clear}
          alt="clear"
        />
      )}
    </div>
  );
}

export default SearchBar;
