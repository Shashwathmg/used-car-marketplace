import { create } from "zustand";

interface CalculatorState {
  expression: string;
  result: string;

  setExpression: (value: string) => void;
  setResult: (value: string) => void;

  clear: () => void;
}

export const useCalculatorStore =
  create<CalculatorState>((set) => ({
    expression: "",
    result: "",

    setExpression: (value) =>
      set({
        expression: value,
      }),

    setResult: (value) =>
      set({
        result: value,
      }),

    clear: () =>
      set({
        expression: "",
        result: "",
      }),
  }));