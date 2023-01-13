import { ImSpinner3 } from "react-icons/im";

const Submit = ({ value, busy }) => {
  return (
    <button
      type="submit"
      className="w-full rouned dark:bg-white bg-secondary hover:bg-opacity-90
      transition font-semibold text-lg dark:text-secondary text-white cursor-pointer h-10 flex items-center justify-center"
    >
      {busy ? <ImSpinner3 className="animate-spin" /> : value}
    </button>
  );
};
export default Submit;
