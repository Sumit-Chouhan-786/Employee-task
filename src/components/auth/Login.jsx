import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <h1 className="text-4xl text-center pb-4 uppercase">Login</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col border-emerald-600 rounded-2xl border-2 p-10 gap-3"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 rounded-full border-emerald-600 px-2 pb-2 pt-1 text-xl outline-none bg-transparent placeholder:px-2 placeholder:text-gray-100"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 rounded-full border-emerald-600 px-2 pb-2 pt-1 text-xl outline-none bg-transparent placeholder:px-2 placeholder:text-gray-100"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="bg-emerald-600 py-2 mt-5 rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
