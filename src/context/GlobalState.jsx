/** @format */
import { useState, useRef, createContext } from "react";

export const CtxProvider = createContext();

// eslint-disable-next-line react/prop-types
export function GlobalState({ children }) {
  const [bgMode, setBgMode] = useState(false);
  const [asideText, setAsideText] = useState(false);
  const [showAside, setShowAside] = useState(false);
  const [depArrSearch, setDepArrSearch] = useState(false);
  const [loader, setLoader] = useState(false);

  const queryRef = useRef(null);

  return (
    <CtxProvider.Provider
      value={{
        bgMode,
        setBgMode,
        asideText,
        setAsideText,
        showAside,
        setShowAside,
        queryRef,
        depArrSearch,
        setDepArrSearch,
        loader,
        setLoader,
      }}
    >
      {children}
    </CtxProvider.Provider>
  );
}