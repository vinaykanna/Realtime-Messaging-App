import { useState } from "react";
import { AttachmentIcon, EmojiIcon, MicrohponeIcon, SendIcon } from "../icons";

type Props = {
  onSend: (message: string) => void;
};

function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSend(message);
        setMessage("");
      }}
    >
      <footer className="h-16 px-1 border-t border-t-slate-700 flex items-center gap-2 bg-slate-800">
        <button className="p-2 rounded-full hover:bg-slate-100  cursor-pointer text-white hover:text-slate-800">
          <EmojiIcon className="w-6" />
        </button>
        <button className="p-2 rounded-full hover:bg-slate-100 cursor-pointer text-white hover:text-slate-800">
          <AttachmentIcon className="w-6" />
        </button>

        <input
          type="text"
          placeholder="Type a message.."
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="rounded-lg px-2 py-1 h-10 flex-1 block bg-slate-700 text-white outline-none"
        />
        {message ? (
          <button type="submit" className="p-2 cursor-pointer text-white">
            <SendIcon className="w-6 h-6" />
          </button>
        ) : (
          <button
            type="button"
            className="p-2 rounded-full hover:bg-slate-100  cursor-pointer text-white hover:text-slate-800"
          >
            <MicrohponeIcon className="w-6 h-6 " />
          </button>
        )}
      </footer>
    </form>
  );
}

export default ChatInput;
