const Submit = ({ value }) => {
  return (
    <input
      type="submit"
      value={value}
      className="w-full rouned dark:bg-white bg-secondary hover:bg-opacity-90
      transition font-semibold text-lg dark:text-secondary text-white cursor-pointer p-1"
    />
  );
};
export default Submit;
