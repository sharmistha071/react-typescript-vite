import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <p>{count}</p>
      <div>
        <Button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Decrement
        </Button>
        <Button>Reset</Button>
        <Button>Increment</Button>
      </div>
    </section>
  );
};

export default Counter;
