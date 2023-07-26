import { useEffect, useState } from "react";
import { CostumersAPI } from "../../api/services/customers";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const CustomersDevice = () => {
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
    <div>
      {customers.map((customer) => (
        <div key={customer["id"]}>
          <div className="display-between display-bottom">
            <p className="title-name ">
              {customer["id"]} &nbsp;&nbsp; {customer["firstName"]}{" "}
              {customer["lastName"]}
            </p>
            <span>
              <FaEdit size={15} className="faplus" />
              <FaTrash size={15} className="faplus" />
            </span>
          </div>
          <p className="title">Age</p>
          <p>{customer["age"]}</p>
          <p className="title">Gender</p>
          <p>{customer["gender"]}</p>
          <p className="title">Email</p>
          <p>{customer["email"]}</p>
          <p className="title">Phone</p>
          <p>{customer["phone"]}</p>
          <p className="title">Username</p>
          <p>{customer["username"]}</p>
          <p className="title">Password</p>
          <p>{customer["password"]}</p>
          <p className="title">BirthDate</p>
          <p>{customer["birthDate"]}</p>
          <p className="title">Image</p>
          <p>{customer["image"]}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CustomersDevice;
