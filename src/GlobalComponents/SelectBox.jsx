import { nanoid } from "nanoid";

function SelectBox({ label, data, name, value, onChange, readOnly, icon }) {
  return (
    <div>
      {label && (
        <label className="flex mb-2 text-lg  text-gray-900 dark:text-white ">
          {icon && <span className="mt-1 mr-2">{icon}</span>}
          {label}
        </label>
      )}
      <select
        label="Select Version"
        name={name}
        disabled={readOnly}
        onChange={onChange}
        className="bg-gray-100 border-4 border-blue-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:outline-none focus:border-blue-500 focus:bg-gray-200"
      >
        {value && (
          <>
            <option key={nanoid()} value={value}>
              {value}
            </option>
            {data.map(
              (item) =>
                value !== item && (
                  <option key={nanoid()} value={item}>
                    {item}
                  </option>
                )
            )}
          </>
        )}
        {!value &&
          data.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}

export default SelectBox;
