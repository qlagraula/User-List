type ArrowRightProps = {
  stroke?: string;
};

export const ArrowRight = ({ stroke = "#24292F" }: ArrowRightProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33334 8H12.6667"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="current"
      />
      <path
        d="M8 3.33331L12.6667 7.99998L8 12.6666"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="current"
      />
    </svg>
  );
};
