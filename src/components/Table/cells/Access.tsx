import * as Tooltip from "@radix-ui/react-tooltip";

import type { User } from "@/lib/user";
import { css } from "@styled-system/css";
import { tooltip } from "@styled-system/recipes";

type UserProps = {
  user: User;
};

function Access({ user }: UserProps) {
  return (
    user.access?.length > 0 && (
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <div
              className={css({
                color: "text.secondary",
                textDecorationStyle: "dashed",
                textDecorationLine: "underline",
                textDecorationColor: "text.secondary",
                textDecorationThickness: "1px",
                textUnderlineOffset: "6px",
                cursor: "pointer",
              })}
            >
              On {user.access?.length} products
            </div>
          </Tooltip.Trigger>
          <Tooltip.Content className={tooltip({ component: "content" })}>
            <Tooltip.Arrow className={tooltip({ component: "arrow" })} />
            {user.access.join(" & ")}
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    )
  );
}

export default Access;
