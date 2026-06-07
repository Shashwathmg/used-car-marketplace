"use client";

import { useEffect } from "react";

import Display from "./Display";
import Keypad from "./Keypad";

import { useCalculator } from "@/hooks/useCalculator";

export default function Calculator() {
  const {
    expression,
    result,
    appendValue,
    calculate,
    clear,
    backspace,
  } = useCalculator();

  useEffect(() => {
    const handleKeyPress = (
      e: KeyboardEvent
    ) => {
      const key = e.key;

      if (
        "0123456789+-*/.".includes(
          key
        )
      ) {
        appendValue(key);
      }

      if (key === "Enter") {
        calculate();
      }

      if (key === "Backspace") {
        backspace();
      }

      if (key === "Escape") {
        clear();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyPress
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyPress
      );
  }, [
    appendValue,
    calculate,
    backspace,
    clear,
  ]);

  return (
    <div
      className="
      max-w-xl
      w-full
      mx-auto
      p-8
      bg-gray-50
      rounded-3xl
      shadow-xl
      "
    >
      <Display
        expression={expression}
        result={result}
      />

      <Keypad
        appendValue={appendValue}
        calculate={calculate}
        clear={clear}
        backspace={backspace}
      />
    </div>
  );
}