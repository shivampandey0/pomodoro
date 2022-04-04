import { useEffect, useState } from "react";

const useTitle = (title) => {
  const [_title, setTitle] = useState(title);

  useEffect(() => {
    document.title = _title;
  }, [_title]);

  return { setTitle };
};

export default useTitle;
