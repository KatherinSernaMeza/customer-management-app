// context.js
import { FC, createContext, useState } from "react";
import { MenuContextType, Props } from "../@Types/MenuContextType";
import { ShowSearchType } from "../@Types/SearchContextType";

export const TodoContext = createContext<
  MenuContextType | ShowSearchType | null
>(null);

const ContextData: FC<Props> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [showSearch, setDisplaySearch] = useState(false);

  const updateShowMenu = (showMenu: boolean) => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  const updateShowSearch = (showSearch: boolean) => {
    if (showSearch) {
      setDisplaySearch(false);
    } else {
      setDisplaySearch(true);
    }
  };

  return (
    <TodoContext.Provider
      value={{ showMenu, updateShowMenu, showSearch, updateShowSearch }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default ContextData;
