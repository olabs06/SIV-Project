import { createContext, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [pageItem, setPageItem] = useState({
    number: 1
  });

  const updateNavItem = (item) => {
    const oldState = {...pageItem}
    oldState.number = item
    setPageItem(oldState);
    return oldState.number;
  };

  return (
    <PageContext.Provider value={{ pageItem, updateNavItem }}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
//
