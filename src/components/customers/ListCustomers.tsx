import { useEffect, useState } from "react";
import { CostumersAPI } from "../../api/services/customers";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

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
        console.error(error);
        console.log(error);
      }
      setLoading(false);
    };
    customers();
  }, []);

  return (
    <>
      {loading ? (
        <h1> its loading... </h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th className="id-table">N°</th>
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
              <th className="tool-table"></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <>
                {customer["id"] <= 10 ? (
                  <tr key={customer["id"]}>
                    <td className="id-table">{customer["id"]}</td>
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
                    <td className="tool-table">
                      {" "}
                      <FaEdit size={15} className="faplus" />
                      <FaTrash size={15} className="faplus" />
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </>
            ))}
          </tbody>
        </table>
      )}
      {error ? "its error..." : ""}
    </>
  );
};

export default ListCustomers;
