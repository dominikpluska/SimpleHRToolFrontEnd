const tdClass = "text-center p-4 ";

// export default function TableRow({ tableRowContent }) {
//   return (
//     <>
//       {tableRowContent.map((x) => {
//         return (
//           <tr
//             key={x.id}
//             className={
//               tableRowContent.indexOf(x) % 2 === 0
//                 ? "bg-gray-100 hover:bg-cyan-200"
//                 : "bg-gray-200 hover:bg-cyan-200"
//             }
//           >
//             <td className={`${tdClass} text-blue-500 font-bold`}>{x.id}</td>
//             <td className={tdClass}>{x.fullName}</td>
//             <td className={tdClass}>{x.subdivision}</td>
//             <td className={tdClass}>{x.position}</td>
//             <td className={tdClass}>{x.peoplePartnerFullName}</td>
//             <td className={tdClass}>{x.status ? "Active" : "Inactive"}</td>
//           </tr>
//         );
//       })}
//     </>
//   );
// }

export default function TableRow({ tableRowContent }) {
  return (
    <>
      {tableRowContent.map((x, rowIndex) => (
        <tr
          key={x.id}
          className={
            rowIndex % 2 === 0
              ? "bg-gray-100 hover:bg-cyan-200"
              : "bg-gray-200 hover:bg-cyan-200"
          }
        >
          {Object.keys(x).map((key) => (
            <td
              key={key}
              className={`${tdClass} ${
                key === "id" ? "text-blue-500 font-bold" : ""
              }`}
            >
              {key === "status" && (x[key] === true || x[key] === false)
                ? x[key]
                  ? "Active"
                  : "Inactive"
                : x[key]}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
