import { ReactNode } from "react";
import Button from "../../components/general/Button";
import Search from "../../components/general/Search";
import Pagination from "../../components/general/Pagination";

export type CustomersProps = {
  listCustomers: ReactNode;
  customersDevice: ReactNode;
};

const CustomersContainer = (props: CustomersProps) => {
  return (
    <>
      <div className="display-between multimedia-customer column-customer">
        <Button />
        <Search />
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
