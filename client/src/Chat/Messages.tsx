// import dots from "../assets/dots.png";

import { useRef } from "react";
import useScrollToBottom from "./useScrollToBottom";

type Message = {
  message: string;
  type: string;
};

type Props = {
  messages: Array<Message>;
};

function Messages({ messages }: Props) {
  const ref = useRef(null);

  useScrollToBottom({ ref });
  return (
    <main
      className="flex-1 bg-slate-800 relative p-5 overflow-y-auto"
      ref={ref}
    >
      {/* <section
        className="w-full h-full"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${dots})`,
          backgroundSize: "412.5px 749.25px",
          opacity: 0.08,
        }}
      ></section> */}
      {messages.map((item) => {
        if (item.type === "outgoing") {
          return <OutGoingMessage message={item.message} />;
        }

        return <IncomingMessage message={item.message} />;
      })}
    </main>
  );
}

function IncomingMessage({ message }: { message: string }) {
  return (
    <div className="flex mt-3">
      <div className="bg-slate-900 px-4 py-2 rounded-lg">
        <p className="text-sm text-white">{message}</p>
      </div>
    </div>
  );
}

function OutGoingMessage({ message }: { message: string }) {
  return (
    <div className="flex justify-end mt-3">
      <div className="bg-green-950 px-4 py-2 text-slate-200 rounded-xl">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Messages;
