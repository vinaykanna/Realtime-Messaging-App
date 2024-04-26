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
    <main className="flex-1 relative p-5 pr-8 overflow-y-auto bg-slate-800" ref={ref}>
      {messages.map((item) => {
        return <Message message={item.message} type={item.type} />;
      })}
    </main>
  );
}

function Message({ message, type }: { message: string; type: string }) {
  const align = type === "outgoing" ? "justify-end" : "justify-start";
  const bg = type === "outgoing" ? "bg-green-900" : "bg-slate-900";
  return (
    <div className={`flex mt-3 ${align}`}>
      <div className={`px-4 py-4 rounded-lg max-w-sm ${bg}`}>
        <p className="text-sm text-white">{message}</p>
      </div>
    </div>
  );
}

export default Messages;
