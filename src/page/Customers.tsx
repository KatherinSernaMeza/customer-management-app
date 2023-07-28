//Components
import ListCustomers from "../components/customers/ListCustomers";
import CustomersDevice from "../components/customers/CustomersDevice";
import CustomersContainer from "../components/customers/CustomersContainer";
import ToolsSearch from "../components/general/ToolsSearch";
import SearchButtonDevice from "../components/general/SearchButtonDevice";
//Libraries to get context values
import { useContext } from "react";
import { TodoContext } from "../context/ContextData";
import { ShowSearchType } from "../@Types/SearchContextType";

const Customers = () => {
  const { showSearch } = useContext(TodoContext) as ShowSearchType;
  return (
    <div className="pageCustomers">
      <h1>Customers</h1>
      <div
        className={
          showSearch
            ? "toolSearchMobile isVisibleToolSearchMobile "
            : "toolSearchMobile isVisibleToolSearchMobile isSticky"
        }
      >
        <ToolsSearch />
      </div>
      <div className="container grid-customers">
        <CustomersContainer
          listCustomers={<ListCustomers />}
          customersDevice={<CustomersDevice />}
        />
      </div>
      <SearchButtonDevice />
    </div>
  );
};

export default Customers;
