import { createContext, FC, PropsWithChildren, useContext } from "react";
import { AppStore } from "./appModule/AppStore";

type RootStateContextValue = {
  appStore: AppStore;
};

const RootStateContext = createContext<RootStateContextValue>(
  {} as RootStateContextValue
);

const appStore = new AppStore();

export const RootStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <RootStateContext.Provider
      value={{ appStore }}
    >
      {children}
    </RootStateContext.Provider>
  );
};

export const RootStore = () => useContext(RootStateContext);