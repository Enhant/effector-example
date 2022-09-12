import { useEffect } from "react";

export function useDebounceFunction(
  func: () => void,
  delay: number,
) {
  useEffect(() => {
    const timeoutId = setTimeout(func, delay);
    return () => clearInterval(timeoutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [func]);
}