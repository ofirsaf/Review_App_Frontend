const Submit = ({ value }) => {
  return (
    <input
      type="submit"
      value={value}
      className="w-full rouned bg-white hover:bg-opacity-90
      transition font-semibold text-lg text-secondary cursor-pointer p-1"
    />
  );
};
export default Submit;
