import { css } from "@styled-system/css";

type HeaderProps = {
  columns: string[];
};

function Header({ columns }: HeaderProps) {
  return (
    <thead>
      <tr
        className={css({
          height: "tableHeader",
          backgroundColor: "surface.secondary",
        })}
      >
        {columns.map((column) => (
          <th
            scope="col"
            key={column}
            className={css({
              borderColor: "borders.primary",
              textAlign: "left",
              color: "text.secondary",
              fontWeight: "medium",
              borderTopWidth: 1,
              borderBottomWidth: 1,
              paddingRight: "2.5",
              _first: {
                width: "5/12",
                paddingLeft: "5",
                borderLeftWidth: 1,
                borderTopLeftRadius: "md",
              },
              _last: {
                width: "48",
                paddingRight: "5",
                borderRightWidth: 1,
                borderTopRadius: "md",
              },
            })}
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default Header;
