import { FaSearch } from "react-icons/fa";
//Libraries to get context values
import { useContext } from "react";
import { TodoContext } from "../../context/ContextData";
import { ShowSearchType } from "../../@Types/SearchContextType";

const SearchButtonDevice = () => {
  const { showSearch, updateShowSearch } = useContext(
    TodoContext
  ) as ShowSearchType;

  const searchCustomer = () => {
    updateShowSearch(showSearch);
  };
  return (
    <span
      className={showSearch ? "icon-search-device" : "displaySearch"}
      onClick={() => searchCustomer()}
    >
      <FaSearch size={20} />
    </span>
  );
};

export default SearchButtonDevice;
