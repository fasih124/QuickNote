import { Form, useActionData, redirect } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const data = useActionData();

  return (
    <>
      <h1 className="mb-4">Login Page</h1>
      <p className="mb-10">
        this is Login page which login existing user and genrate the jwt token
        for it.
      </p>
      <Form method="post" className="items-center">
        <div className="text-center mb-2">
          <label htmlFor="email" className="pr-7">
            Email:{" "}
          </label>
          <input
            className="border-2  p-1 border-white w-3xs"
            name="email"
            id="email"
            type="email"
          />
        </div>
        <div className="text-center">
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            id="password"
            type="password"
            className="border-2 p-1 border-white w-3xs"
          />
        </div>
        <button className="inline-block text-right mt-5 text-2xl">Login</button>
      </Form>
    </>
  );
}

export async function LoginAction({ request }) {
  const data = await request.formData();
  const email = data.get("email");
  const password = data.get("password");

  try {
    const response = await axios.post("http://localhost:3000/api/users/login", {
      email,
      password,
    });
    console.log(response.data);
    const { user, token } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    console.log(token);

    return redirect("/tasks");
  } catch (error) {
    console.error("Signup failed:", error);
    if (error.response) {
      // error from backend (e.g. 401 unauthorized)
      console.error("❌ Login failed:", error.response.data);
      return { error: error.response.data.message || "Invalid credentials" };
    } else {
      console.error("❌ Network or server error:", error.message);
      return { error: "Network error, please try again later" };
    }
  }
}
