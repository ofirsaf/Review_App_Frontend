const FormInput = ({ name, label, placeholder, ...rest }) => {
  return (
    <div className="flex flex-col-reverse">
      <input
        name={name}
        id={name}
        className="bg-transparent rouned 
            border-2 dark:border-dark-subtle border-light-subtle w-full
             text-lg outline-none dark:focus:border-white focus:border-primary  p-1 dark:text-white mt-1 peer transition"
        placeholder={placeholder}
        {...rest}
      />
      <label
        className="font-semibol dark:text-dark-subtle text-light-subtle
         dark:peer-focus:text-white peer-focus:text-primary
          transition self-start"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};
export default FormInput;
