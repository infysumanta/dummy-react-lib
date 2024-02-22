import { useState } from "react";

// Custom hook for managing a boolean state and toggle function
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };

  const setTrue = () => {
    setValue(true);
  };

  const setFalse = () => {
    setValue(false);
  };

  return [value, toggle, setTrue, setFalse];
}
