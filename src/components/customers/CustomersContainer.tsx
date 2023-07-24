import { ReactNode } from "react";
import Button from "../../components/general/Button";
import Search from "../../components/general/Search";

export type CustomersProps = {
  listCustomers: ReactNode;
  customersDevice: ReactNode;
};

const CustomersContainer = (props: CustomersProps) => {
  return (
    <>
      <div className="display-between multimedia-customer multimediaCustomers">
        <Button />
        <Search />
      </div>
      <div className=" tableCustomers">
        <div className="listCustomers">{props.listCustomers}</div>
        <div className="customersDevice">{props.customersDevice}</div>
      </div>
      <div className="paginationCustomers"> La paginacion</div>
    </>
  );
};

export default CustomersContainer;
