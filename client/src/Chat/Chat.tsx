import multiavatar from "@multiavatar/multiavatar/esm";
import ChatItem from "./ChatItem";
import Menu from "../icons/Menu";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import { contacts, initialMsgs } from "./dummy";
import { useState } from "react";
import dots from "../assets/dots.png";

function Chat() {
  const svgCode = multiavatar("vinay");
  const [messages, setMessages] = useState(structuredClone(initialMsgs));

  return (
    <section className="h-screen flex">
      <aside className="w-[400px] border-r border-r-slate-600 bg-slate-800 flex flex-col">
        <header className="h-16 shadow flex justify-between p-2 items-center border-b border-b-slate-700">
          <div
            className="w-10"
            dangerouslySetInnerHTML={{ __html: svgCode }}
          ></div>
          <button className="p-2 rounded-full hover:bg-slate-100 cursor-pointer text-white hover:text-slate-800">
            <Menu className="w-6 h-6" />
          </button>
        </header>
        <div className="flex-1 overflow-y-auto">
          {contacts.map((item, index) => (
            <ChatItem key={index} {...item} />
          ))}
        </div>
      </aside>
      <article className="flex-1 flex flex-col relative">
        <section
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${dots})`,
            backgroundSize: "412.5px 749.25px",
            opacity: 0.1,
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></section>
        <header className="h-16 shadow flex justify-end p-2 items-center bg-slate-800 border-b border-b-slate-700 z-10"></header>
        <Messages messages={messages} />
        <ChatInput
          onSend={(message: string) => {
            setMessages([...messages, { message, type: "outgoing" }]);
            setTimeout(() => {
              setMessages((prev) => [...prev, { message, type: "incoming" }]);
            }, 1000);
          }}
        />
      </article>
    </section>
  );
}

export default Chat;
