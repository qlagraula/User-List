import { User } from "@/lib/user";
import { css } from "@styled-system/css";

export type Column = {
  key: keyof User;
  Renderer?: ({ user }: { user: User }) => React.ReactNode;
};

type BodyProps = {
  users: User[];
  columns: Column[];
};

function Body({ users, columns }: BodyProps) {
  return (
    <tbody>
      {users.map((user, index) => (
        <tr
          // Same id in the data
          key={`${index}__${user.id}`}
          className={css({
            borderWidth: 1,
            height: "tableRow",
          })}
        >
          {columns.map((column) => (
            <td
              scope="col"
              key={column.key}
              className={css({
                borderColor: "borders.primary",
                paddingRight: "2.5",
                borderBottomWidth: 1,
                _first: {
                  paddingLeft: "5",
                  borderLeftWidth: 1,
                  borderBottomLeftRadius:
                    index === users.length - 1 ? "md" : undefined,
                },
                _last: {
                  paddingRight: "5",
                  borderRightWidth: 1,
                  borderBottomRightRadius:
                    index === users.length - 1 ? "md" : undefined,
                },
              })}
            >
              {(column.Renderer && <column.Renderer user={user} />) || ""}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default Body;
