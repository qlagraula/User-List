import pencil from "@assets/pencil.svg";
import more from "@assets/more-horizontal.svg";

import { format, fromUnixTime } from "date-fns";
import { Popover } from "@ark-ui/react";

import type { User } from "@/lib/user";
import { css, cva } from "@styled-system/css";
import { UserX } from "@/assets/UserX";

const dropdownButton = cva({
  base: {
    display: "flex",
    gap: "2",
    borderBottomWidth: 1,
    paddingX: "4",
    paddingY: "2",
    borderColor: "borders.primary",
    cursor: "pointer",
    alignItems: "center",
  },
  variants: {
    visual: {
      default: {},
      red: { color: "red" },
    },
  },
  defaultVariants: {
    visual: "default",
  },
});

type UserProps = {
  user: User;
};

function LastLogin({ user }: UserProps) {
  return (
    <div className={css({ display: "flex", justifyContent: "space-between" })}>
      <div
        className={css({
          color: "text.third",
          fontSize: "sm",
        })}
      >
        {format(fromUnixTime(user.last_login), "dd/MM/yyyy - HH:ss")}
      </div>
      <Popover.Root>
        <Popover.Trigger>
          <img className={css({ cursor: "pointer" })} src={more} alt="more" />
        </Popover.Trigger>
        <Popover.Positioner>
          <Popover.Content
            className={css({
              backgroundColor: "surface.secondary",
              borderWidth: 1,
              borderRadius: "md",
              borderColor: "borders.primary",
              boxShadow: "main",
            })}
          >
            <Popover.Description className={dropdownButton()}>
              <img src={pencil} alt="pencil" />
              Edit user
            </Popover.Description>
            <Popover.Description className={dropdownButton({ visual: "red" })}>
              <UserX /> Deactivate user
            </Popover.Description>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    </div>
  );
}

export default LastLogin;
