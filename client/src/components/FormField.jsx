const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 ml-3">
        <label
          htmlFor={name}
          className="block text-base font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#6469ff] py-1 px-3 text-white uppercase hover:bg-blue-700"
          >
            SURPRISE ME!
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-[#4649ff] focus-border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
