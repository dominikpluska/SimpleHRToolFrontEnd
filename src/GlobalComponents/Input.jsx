export default function Input({
  label,
  placeholderText,
  type,
  className,
  icon,
  value,
  onChange,
  name,
}) {
  return (
    <div className={`${className}`}>
      {label && (
        <label className="flex mb-2 text-lg  text-gray-900 dark:text-white ">
          {icon && <span className="mt-1 mr-2">{icon}</span>}
          {label}
        </label>
      )}

      <input
        type={type}
        className="bg-gray-100 border-4 border-blue-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:outline-none focus:border-blue-500 focus:bg-gray-200"
        placeholder={placeholderText}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
}
