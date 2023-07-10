import { useEffect, useState } from "react";
import Button from "../general/Button";
import Search from "../general/Search";
import { CostumersAPI } from "../../api/services/customers";
//const { API_URL } = process.env;

const ListCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const customers = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await CostumersAPI.get(import.meta.env.VITE_API_URL);
        setCustomers(response["users"]);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    customers();
  }, []);

  return (
    <>
      <div className="display-between">
        <Button />
        <Search />
      </div>
      {loading ? (
        <h1> its loading... </h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Username</th>
              <th>Password</th>
              <th>BirthDate</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer["id"]}>
                <td>{customer["firstName"]}</td>
                <td>{customer["lastName"]}</td>
                <td>{customer["age"]}</td>
                <td>{customer["gender"]}</td>
                <td>{customer["email"]}</td>
                <td>{customer["phone"]}</td>
                <td>{customer["username"]}</td>
                <td>{customer["password"]}</td>
                <td>{customer["birthDate"]}</td>
                <td>{customer["image"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error ? "its error..." : ""}
    </>
  );
};

export default ListCustomers;
