import { ArrowRight } from "@/assets/ArrowRight";
import { ArrowLeft } from "@assets/ArrowLeft";

import { Pagination as PaginationPrimitive } from "@ark-ui/react";

import { css, cva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

export const PAGE_SIZE = 50;

type PaginationProps = {
  count: number;
  currentPage: number;
  setCurrentPage: (a: number) => void;
};

function Pagination({ count, currentPage, setCurrentPage }: PaginationProps) {
  const maxPage = Math.ceil(count / PAGE_SIZE);
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        color: "text.secondary",
      })}
    >
      <PaginationPrimitive.Root
        page={currentPage}
        onPageChange={(details) => setCurrentPage(details.page)}
        count={count}
        pageSize={PAGE_SIZE}
        siblingCount={2}
        className={css({
          display: "flex",
        })}
      >
        {({ pages }) => (
          <>
            <PrevButton disabled={currentPage === 1} />
            {pages.map((page, index) =>
              page.type === "page" ? (
                <ItemButton
                  key={index}
                  page={page}
                  active={currentPage === page.value}
                />
              ) : (
                <Elipsis key={index} index={index} />
              )
            )}
            <NextButton disabled={currentPage === maxPage} />
          </>
        )}
      </PaginationPrimitive.Root>
    </div>
  );
}

function Elipsis({ index }: { index: number }) {
  return (
    <PaginationPrimitive.Ellipsis
      index={index}
      className={css({
        borderWidth: "1px 0.5px 1px 0.5px",
        borderColor: "borders.primary",
        width: "paginationItem",
        height: "paginationItem",
        textAlign: "center",
      })}
    >
      &#8230;
    </PaginationPrimitive.Ellipsis>
  );
}

const item = cva({
  base: {
    borderWidth: "1px 0.5px 1px 0.5px",
    width: "paginationItem",
    height: "paginationItem",
    borderColor: "borders.primary",
    cursor: "pointer",
  },
  variants: {
    visual: {
      active: { color: "text.primary", backgroundColor: "gray.100" },
      disabled: { color: "text.secondary" },
    },
  },
});

function ItemButton({
  page,
  active,
}: {
  page: {
    type: "page";
    value: number;
  };
  active: boolean;
}) {
  return (
    <PaginationPrimitive.Item
      {...page}
      className={item({
        visual: active ? "active" : "disabled",
      })}
    >
      {page.value}
    </PaginationPrimitive.Item>
  );
}

const stepper = cva({
  base: {
    borderColor: "borders.primary",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "paginationItem",
    height: "paginationItem",
  },
  variants: {
    visual: {
      active: { cursor: "pointer" },
      disabled: {},
    },
    side: {
      left: { borderWidth: "1px 0.5px 1px 1px", borderLeftRadius: "lg" },
      right: {
        borderWidth: "1px 1px 1px 0.5px",
        borderRightRadius: "lg",
      },
    },
  },
});

function PrevButton({ disabled }: { disabled: boolean }) {
  return (
    <PaginationPrimitive.PrevTrigger
      disabled={disabled}
      className={stepper({
        visual: disabled ? "disabled" : "active",
        side: "left",
      })}
    >
      <ArrowLeft
        stroke={
          disabled
            ? token("colors.borders.primary")
            : token("colors.text.secondary")
        }
      />
    </PaginationPrimitive.PrevTrigger>
  );
}

function NextButton({ disabled }: { disabled: boolean }) {
  return (
    <PaginationPrimitive.NextTrigger
      disabled={disabled}
      className={stepper({
        visual: disabled ? "disabled" : "active",
        side: "right",
      })}
    >
      <ArrowRight
        stroke={
          disabled
            ? token("colors.borders.primary")
            : token("colors.text.secondary")
        }
      />
    </PaginationPrimitive.NextTrigger>
  );
}

export default Pagination;
