import { FaPlus } from "react-icons/fa";

const Button = () => {
  return (
    <>
      <div>
        <button className="input button-purple width-element">
          <FaPlus size={13} className="faplus" />
          Create Customer
        </button>
      </div>
    </>
  );
};

export default Button;
