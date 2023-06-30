// @types.todo.ts

export type MenuContextType = {
  showMenu: boolean;
  updateShowMenu: (showMenu: boolean) => void;
};

export interface Props {
  children: React.ReactNode;
}
