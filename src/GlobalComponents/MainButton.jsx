export default function MainButton({ className, onClick, labelText }) {
  return (
    <button
      className={`rounded-lg py-3 px-4 text-sm bg-cyan-500 hover:bg-blue-500 text-white justify-center ${className}`}
      onClick={(e) => onClick(e)}
    >
      {labelText}
    </button>
  );
}
