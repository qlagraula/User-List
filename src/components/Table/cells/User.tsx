import type { User } from "@/lib/user";
import { css } from "@styled-system/css";

type UserProps = {
  user: User;
};

function User({ user }: UserProps) {
  return (
    <div
      className={css({
        display: "flex",
        gap: "3",
        alignItems: "center",
      })}
    >
      <div
        className={css({
          height: "7",
          width: "7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "xs",
          color: "main",
          backgroundColor: "lightMain",
          borderRadius: "full",
        })}
      >
        {user.name?.[0]}
      </div>
      <div>
        <div className={css({ color: "text.primary", fontSize: "sm" })}>
          {user.name}
        </div>
        <div className={css({ color: "text.third", fontSize: "xs" })}>
          {user.email}
        </div>
      </div>
    </div>
  );
}

export default User;
