"use client";

import { useCalculatorStore } from "@/store/calculatorStore";

export const useCalculator = () => {
  const {
    expression,
    result,
    setExpression,
    setResult,
    clear,
  } = useCalculatorStore();

  const appendValue = (value: string) => {
    setExpression(expression + value);
  };

  const calculate = () => {
    try {
      const answer = eval(expression);

      setResult(answer.toString());
    } catch {
      setResult("Error");
    }
  };

  const backspace = () => {
    setExpression(
      expression.slice(0, -1)
    );
  };

  return {
    expression,
    result,
    appendValue,
    calculate,
    backspace,
    clear,
  };
};