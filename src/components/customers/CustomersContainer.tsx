import { ReactNode } from "react";

export type CustomersProps = {
  listCustomers: ReactNode;
  customersDevice: ReactNode;
};

const CustomersContainer = (props: CustomersProps) => {
  return (
    <div className="customerContainer">
      <div className="listCustomers">{props.listCustomers}</div>
      <div className="customersDevice">{props.customersDevice}</div>
    </div>
  );
};

export default CustomersContainer;
