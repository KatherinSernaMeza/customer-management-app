import { useState } from "react";
import { FaPlus } from "react-icons/fa";
//Libraries to get context values
import { useContext } from "react";
import { TodoContext } from "../../context/ContextData";
import { ShowSearchType } from "../../@Types/SearchContextType";

const Button = () => {
  const { showSearch, updateShowSearch } = useContext(
    TodoContext
  ) as ShowSearchType;

  const searchCustomer = () => {
    updateShowSearch(showSearch);
    console.log("booton redondo toool ");
  };
  return (
    <>
      <div>
        <button
          className="input button-purple width-element"
          onClick={() => searchCustomer()}
        >
          <FaPlus size={13} className="faplus" />
          Create Customer
        </button>
      </div>
    </>
  );
};

export default Button;
