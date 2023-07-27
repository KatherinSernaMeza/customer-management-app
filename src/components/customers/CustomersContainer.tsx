import { ReactNode } from "react";
import Pagination from "../../components/general/Pagination";
import ToolsSearch from "../../components/general/ToolsSearch";

export type CustomersProps = {
  listCustomers: ReactNode;
  customersDevice: ReactNode;
};

const CustomersContainer = (props: CustomersProps) => {
  return (
    <>
      <div className="isVisibleToolSearchDesktop">
        <ToolsSearch />
      </div>
      <div className=" tableCustomers">
        <div className="listCustomers">{props.listCustomers}</div>
        <div className="customersDevice">{props.customersDevice}</div>
      </div>
      <div className="paginationCustomers">
        <Pagination />
      </div>
    </>
  );
};

export default CustomersContainer;
