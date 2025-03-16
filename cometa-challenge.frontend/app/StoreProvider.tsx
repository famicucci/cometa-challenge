"use client";
import { store } from "@/app/redux/store";
import { Provider } from "react-redux";

interface StoreProviderProps {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
