// context.js
import { FC, createContext, useState } from "react";
import { MenuContextType, Props } from "../@Types/MenuContextType";

export const TodoContext = createContext<MenuContextType | null>(null);

const ContextData: FC<Props> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const updateShowMenu = (showMenu: boolean) => {
    if (showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  return (
    <TodoContext.Provider value={{ showMenu, updateShowMenu }}>
      {children}
    </TodoContext.Provider>
  );
};

export default ContextData;
