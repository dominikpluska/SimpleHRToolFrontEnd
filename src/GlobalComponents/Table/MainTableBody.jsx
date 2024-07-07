export default function MainTableBody({ tableHead, tableRows }) {
  return (
    <div className=" h-10/12 overflow-y-auto mt-5">
      <table className="table-fixed w-full h-full">
        <thead className="sticky top-0">
          <tr>{tableHead}</tr>
        </thead>

        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}
