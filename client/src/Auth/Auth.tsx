import React, { useState } from "react";

type StateType = {
  [x: string]: string;
};

const initialState = {
  name: "",
  email: "",
  pin: "",
};

function Auth() {
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [state, setState] = useState<StateType>({ ...initialState });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ ...initialState });
    localStorage.setItem("token", "1234");
    window.location.reload();
  };

  return (
    <section className="h-screen flex justify-center mt-20">
      <div className=" w-[500px]">
        <h2 className="text-3xl text-slate-800 text-center font-semibold mb-6">
          Realtime messaging app
        </h2>
        <div className="flex justify-center border px-4 py-2 rounded relative">
          <button
            onClick={() => setTab("signin")}
            className="btn rounded flex-1 z-10"
          >
            Signin
          </button>
          <button
            onClick={() => setTab("signup")}
            className="btn rounded flex-1 z-10"
          >
            Signup
          </button>
          <div
            style={{ left: tab === "signin" ? 0 : "50%" }}
            className={`absolute top-0 w-1/2 bg-slate-200 h-full transition-all duration-700`}
          ></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            {tab === "signup" && (
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                onChange={handleChange}
                value={state.name}
                className="border rounded px-2 py-1 h-12 w-full block mx-auto mt-4"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              onChange={handleChange}
              value={state.email}
              className="border rounded px-2 py-1 h-12 w-full block mx-auto mt-4"
            />
            <input
              type="text"
              placeholder="PIN"
              required
              pattern="\d{4,6}"
              name="pin"
              onChange={handleChange}
              value={state.pin}
              title="PIN should only have numbers ranging from 4-6"
              className="border rounded px-2 py-1 h-12 w-full block mx-auto mt-4"
            />
            <button
              type="submit"
              className="border rounded bg-slate-800 text-white px-2 py-1 h-12 w-full block mx-auto mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Auth;
