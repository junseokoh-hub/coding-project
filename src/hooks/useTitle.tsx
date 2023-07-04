import { useEffect } from "react";

export const useTitle = (content: string) => {
  useEffect(() => {
    const title = document.querySelector("title") as HTMLTitleElement;
    title.innerHTML = content;
  }, [content]);
};
