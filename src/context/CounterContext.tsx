import { createContext, ReactNode, useState } from "react";

type TCounterContext = {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
};

export const CounterContext = createContext<TCounterContext>(
  {} as TCounterContext
);

type TCounterContextProvider = {
  children: ReactNode;
};

export const CounterContextProvider = ({
  children,
}: TCounterContextProvider) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider
      value={{ counter, increaseCounter, decreaseCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
};
