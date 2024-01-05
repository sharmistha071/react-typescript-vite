import { PropsWithChildren, useState } from "react";

type QuotesProps = {
  handleClick: (limit: number) => Promise<void>;
};

const Quotes = ({ children, handleClick }: PropsWithChildren<QuotesProps>) => {
  const [count, setCount] = useState<number>(10);
  return (
    <section>
      <div style={{ display: "flex" }}>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.valueAsNumber)}
        />
        <button type="submit" onClick={() => handleClick(count)}>
          Load Quotes
        </button>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Quotes;
