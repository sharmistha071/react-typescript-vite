import { PropsWithChildren } from "react";
import "./App.css";
import Blog from "./components/Blog";

type BoxProps = {
  // children: React.ReactNode; // this also works
  color?: "red" | "green" | "blue";
};

const Box = ({ children, color = "red" }: PropsWithChildren<BoxProps>) => {
  return (
    <section style={{ padding: "1em", border: "5px solid purple", color }}>
      {children}
    </section>
  );
};

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </div>
        <Blog title={"Daily Blog"} />
        <Box color="green">
          <p>Box inside a box</p>
          <Box>
            <h2>Another React component with one child.</h2>
          </Box>
          <Box>
            <h2 className="mb-4">
              A nested React component with two children.
            </h2>
            <p>The second child.</p>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default App;
