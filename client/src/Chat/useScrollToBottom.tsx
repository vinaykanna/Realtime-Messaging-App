import { useEffect } from "react";

interface Props {
  ref: React.RefObject<HTMLDivElement>;
}

function useScrollToBottom(props: Props) {
  const { ref: elementRef } = props;

  useEffect(() => {
    if (!elementRef.current) return;

    const config = { childList: true, subtree: true };

    let elementScrollHeight = elementRef.current.scrollHeight;

    elementRef.current.scrollTo({
      top: elementScrollHeight,
      behavior: "smooth",
    });

    const callback = (mutationList: MutationRecord[]) => {
      for (const mutation of mutationList) {
        if (
          mutation.type === "childList" ||
          mutation.type === "characterData"
        ) {
          elementScrollHeight = elementRef!.current!.scrollHeight;
          elementRef!.current!.scrollTo({
            top: elementScrollHeight,
            behavior: "smooth",
          });
        }
      }
    };

    const observer = new MutationObserver(callback);

    observer.observe(elementRef.current, config);
    return () => {
      observer.disconnect();
    };
  }, [elementRef]);
}

export default useScrollToBottom;
