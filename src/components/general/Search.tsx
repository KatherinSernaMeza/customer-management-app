import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <>
      <div className="input search-container display-align-center">
        <input className="search" placeholder="Search..." />
        <FaSearch size={20} style={{ color: "black" }} />
      </div>
    </>
  );
};

export default Search;
