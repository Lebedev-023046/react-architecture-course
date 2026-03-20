import { createContext, useContext, type Context } from "react";

export const useStrictContext = <T>(context: Context<T | null>) => {
  const value = useContext(context);

  if (value === null) {
    throw new Error("Ошибка контекста");
  }

  return value as T;
};

export const createStrictContext = <T>() => createContext<T | null>(null);
