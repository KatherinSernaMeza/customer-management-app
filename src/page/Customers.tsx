import ListCustomers from "../components/customers/ListCustomers";
import CustomersDevice from "../components/customers/CustomersDevice";
import CustomersContainer from "../components/customers/CustomersContainer";
const Customers = () => {
  return (
    <div className="pageCustomers">
      <h1>Customers</h1>
      <div className="container grid-customers">
        <CustomersContainer
          listCustomers={<ListCustomers />}
          customersDevice={<CustomersDevice />}
        />
      </div>
    </div>
  );
};

export default Customers;
