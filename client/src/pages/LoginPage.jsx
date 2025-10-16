import { Form, useActionData } from "react-router-dom";

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

  if (email === "a@mail.com" && password === "123456") {
    console.log(`email: ${email} and password: ${password}`);
    redirect("/tasks");
  } else {
    console.log("incorrect credential");
    console.log(`email: ${email} and password: ${password}`);
    return { error: "Invalid email or password" };
  }
}
