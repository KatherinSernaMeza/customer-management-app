import ListCustomers from "../components/customers/ListCustomers";
import CustomersDevice from "../components/customers/CustomersDevice";
import CustomersContainer from "../components/customers/CustomersContainer";
import Button from "../components/general/Button";
import Search from "../components/general/Search";
const Customers = () => {
  return (
    <div className="pageCustomers">
      <h1>Customers</h1>
      <div className="container grid-customers">
        <div className="display-between multimedia-customer multimediaCustomers">
          <Button />
          <Search />
        </div>
        <CustomersContainer
          listCustomers={<ListCustomers />}
          customersDevice={<CustomersDevice />}
        />
        <div className="paginationCustomers"> La paginacion</div>
      </div>
    </div>
  );
};

export default Customers;
