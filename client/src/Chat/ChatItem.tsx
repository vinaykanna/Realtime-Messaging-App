import multiavatar from "@multiavatar/multiavatar/esm";

type Props = {
  name: string;
  lastMsg: string;
};

function ChatItem({ name, lastMsg }: Props) {
  const svgCode = multiavatar(name);

  console.log(svgCode);
  return (
    <div className="flex gap-2 items-center border-b border-slate-700 border-dashed p-2 cursor-pointer hover:bg-slate-700 transition-all">
      <div className="w-10" dangerouslySetInnerHTML={{ __html: svgCode }}></div>
      <div>
        <h4 className="text-md text-white">{name}</h4>
        <p className="text-xs text-gray-300">{lastMsg}</p>
      </div>
    </div>
  );
}

export default ChatItem;
