const FormInput = ({ name, label, placeholder, ...rest }) => {
  return (
    <div className="flex flex-col-reverse">
      <input
        name={name}
        id={name}
        className="bg-transparent rouned 
            border-2 border-dark-subtle w-full
             text-lg outline-none focus:border-white p-1 text-white mt-1 peer transition"
        placeholder={placeholder}
        {...rest}
      />
      <label
        className="font-semibol text-dark-subtle peer-focus:text-white
              transition self-start"
        htmlFor={name}
      >
        {label}
      </label>
      
    </div>
  );
};
export default FormInput;
