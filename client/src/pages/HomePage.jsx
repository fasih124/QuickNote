import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <h1 className="mb-4 ">Home Page</h1>
      <p>this is home page which show login and signup button</p>
      <div className="m-6 p-5">
        <Link to="login" className="text-2xl">
          <button className="mr-4">Login</button>
        </Link>
        <Link className="text-2xl" to="signup">
          <button>Sign-up</button>{" "}
        </Link>
      </div>
    </>
  );
}
