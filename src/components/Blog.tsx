import blogData from "../blog.json";
import Button from "./Button";

// const sum = (num: number): number => num + 2;
// sum(2);

type BlogProps = {
  title: string;
  greetings?: string;
};

const Blog = ({ title }: BlogProps): JSX.Element => {
  return (
    <>
      <div className="container">
        <p>{title.toUpperCase()}</p>
        <div className="blog">
          {blogData.map((blog) => (
            <div className="card" key={blog.id}>
              <img src={blog.cover} alt="" />
              <div className="details">
                <h2>{blog.title}</h2>
                <h4>{blog.author}</h4>
                <Button>
                  <span>Save</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
