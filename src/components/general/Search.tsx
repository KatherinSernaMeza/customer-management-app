import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <>
      <div className="input search-container display-align-center display-between">
        <input className="search" placeholder="Search..." />
        <FaSearch className="icon-search" size={20} />
      </div>
    </>
  );
};

export default Search;
