export default function Button({ className, onClick, labelText }) {
  return (
    <button
      className={`font-bold rounded-lg text-lg  w-full py-3 bg-cyan-500 hover:bg-blue-500 text-white justify-center ${className}`}
      onClick={(e) => onClick(e)}
    >
      {labelText}
    </button>
  );
}
