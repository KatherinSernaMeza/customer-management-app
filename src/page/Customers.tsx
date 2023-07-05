import ListCustomers from "../components/customers/ListCustomers";
import CustomersDevice from "../components/customers/CustomersDevice";
import CustomersContainer from "../components/customers/CustomersContainer";

const Customers = () => {
  return (
    <div>
      <h1>Customers</h1>
      <CustomersContainer
        listCustomers={<ListCustomers />}
        customersDevice={<CustomersDevice />}
      />
    </div>
  );
};

export default Customers;
