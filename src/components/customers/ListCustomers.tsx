import { useEffect, useState } from "react";
import Button from "../general/Button";
import Search from "../general/Search";
import { CostumersAPI } from "../../api/services/customers";
//const { API_URL } = process.env;
/*const baseUrl =
  process.env.API_URL !== "production"
    ? "https://customer-management-app-k7u2.vercel.app/"
    : "http://localhost:3000/customers";
*/
const ListCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const customers = async () => {
      const response = await CostumersAPI.get(
        import.meta.env.VITE_API_URL_PRODUCTION
      );
      setCustomers(response);
    };
    customers();
  }, []);

  return (
    <>
      <div className="display-between">
        <Button />
        <Search />
      </div>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Birth</th>
            <th>phone</th>
            <th>email</th>
            <th>bankAccountNumber</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer["id"]}>
              <td>{customer["firstName"]}</td>
              <td>{customer["lastName"]}</td>
              <td>{customer["birth"]}</td>
              <td>{customer["phone"]}</td>
              <td>{customer["email"]}</td>
              <td>{customer["bankAccountNumber"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListCustomers;
