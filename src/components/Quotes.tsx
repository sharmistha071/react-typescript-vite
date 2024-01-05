import { PropsWithChildren } from "react";

type QuotesProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Quotes = ({
  children,
  count,
  setCount,
  handleClick,
}: PropsWithChildren<QuotesProps>) => {
  return (
    <section>
      <div>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.valueAsNumber)}
        />
        <button type="submit" onClick={handleClick}>
          Load Quotes
        </button>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Quotes;
