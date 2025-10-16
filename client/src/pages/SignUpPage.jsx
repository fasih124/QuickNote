import axios from "axios";
import { Form, Navigate, redirect, useActionData } from "react-router-dom";

export default function SignUpPage() {
  const data = useActionData();
  return (
    <>
      <h1 className="mb-4">SignUp Page</h1>
      <p className="mb-10">this is SignUp page which register new user </p>
      <Form method="POST" className="items-center">
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
        <button className="inline-block text-right mt-5 text-2xl">
          Register
        </button>
      </Form>
    </>
  );
}

export async function signupAction({ request }) {
  const data = await request.formData();
  const email = data.get("email");
  const password = data.get("password");

  try {
    const response = await axios.post(
      "http://localhost:3000/api/users/register",
      {
        name: "Default User",
        email,
        password,
      }
    );
    console.log(response.data);
    return redirect("/login");
  } catch (error) {
    console.error("Signup failed:", error);
    if (error.response && error.response.data && error.response.data.message) {
      return { error: error.response.data.message };
    }

    return { error: "Signup failed. Please try again." };
  }
}
