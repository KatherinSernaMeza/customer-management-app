import { useState } from "react";
import Button from "../general/Button";
import Search from "../general/Search";

const ListCustomers = () => {
  const [customers, setCustomers] = useState([]);
  return (
    <>
      <div className="display-between">
        <Button />
        <Search />
      </div>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer}>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.birth}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.bankAccountNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListCustomers;
