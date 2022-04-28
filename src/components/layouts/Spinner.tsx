import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <FaSpinner className="text-center mx-auto" width={75} height={75} />
    </div>
  );
};

export default Spinner;
