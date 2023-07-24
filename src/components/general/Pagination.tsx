import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="display-justify-center pagination">
      <FaLongArrowAltLeft size={25} className="faplus" />
      <div className="border-button">
        <button className="button-pagination">1</button>
      </div>
      <div className="border-button">
        <button className="button-pagination">2</button>
      </div>
      <div className="border-button">
        <button className="button-pagination">3</button>
      </div>
      <div className="border-button">
        <button className="button-pagination">4</button>
      </div>
      <div className="border-button">
        <button className="button-pagination">5</button>
      </div>

      <FaLongArrowAltRight size={25} className="faplus" />
    </div>
  );
};

export default Pagination;
