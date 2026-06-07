interface Props {
  value: string;
  onClick: (value?: string) => void;
  className?: string;
}

export default function CalcButton({
  value,
  onClick,
  className = "",
}: Props) {
  const handleClick = () => {
    if (
      value === "C" ||
      value === "⌫" ||
      value === "="
    ) {
      onClick();
    } else {
      onClick(value);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        h-10
        rounded-xl
        font-semibold
        text-xl
        bg-white
        shadow
        hover:bg-gray-100
        transition-all
        active:scale-95
        ${className}
      `}
    >
      {value}
    </button>
  );
}