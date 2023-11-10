import type { User } from "@/lib/user";
import { css } from "@styled-system/css";
import users from "@assets/users-2.svg";

type UserProps = {
  user: User;
};

function Groups({ user }: UserProps) {
  return (
    <div
      className={css({
        display: "flex",
        gap: "3",
        alignItems: "center",
      })}
    >
      {user.groups.map((group) => (
        <div
          key={group}
          className={css({
            display: "flex",
            gap: "1",
            borderRadius: "full",
            borderWidth: 1,
            borderColor: "borders.primary",
            paddingX: "2",
            fontSize: "xs",
            alignItems: "center",
          })}
        >
          <img
            className={css({ width: "groupIcon", height: "groupIcon" })}
            src={users}
            alt="group"
          />
          {group}
        </div>
      ))}
    </div>
  );
}

export default Groups;
