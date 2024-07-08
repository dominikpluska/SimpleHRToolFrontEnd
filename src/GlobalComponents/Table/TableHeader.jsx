export default function TableHeader({ tableHeadNames }) {
  return (
    <>
      {tableHeadNames.map((x) => {
        const roundedLeft = tableHeadNames[0] === x && "rounded-l-lg";
        const roundedRight =
          tableHeadNames[tableHeadNames.length - 1] === x && "rounded-r-lg";

        return (
          <th
            className={`border-b border-blue-gray-100 bg-cyan-500 p-4 text-white ${roundedLeft} ${roundedRight} `}
            key={x}
          >
            {x}
          </th>
        );
      })}
    </>
  );
}
