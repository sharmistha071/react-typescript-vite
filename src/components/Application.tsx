import { useEffect, useState } from "react";
import Quotes from "./Quotes";

export type Quote = {
  id: number;
  author: string;
  quote: string;
};

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [count, setCount] = useState<number>(10);

  // const fetchQuotes = async () => {
  //   const response = await fetch("https://dummyjson.com/quotes");
  //   return await response.json();
  // };

  const fetchWithLimit = async (limit: number) => {
    const response = await fetch(`https://dummyjson.com/quotes?limit=${limit}`);
    const data = await response.json();
    setQuotes(data.quotes);
  };

  // useEffect(() => {
  //   fetchQuotes().then((response) => setQuotes(response.quotes));
  // }, []);

  return (
    <>
      <h1>Quotes of the day!</h1>
      <Quotes
        count={count}
        setCount={setCount}
        handleClick={() => fetchWithLimit(count)}
      >
        <div>
          {quotes.length < 1 && <p>loading......</p>}
          {quotes.map((item) => (
            <div key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.quote}</p>
            </div>
          ))}
        </div>
      </Quotes>
    </>
  );
};

export default Application;
