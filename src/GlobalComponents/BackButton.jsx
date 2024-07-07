import { FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BackButton({ className }) {
  const navigate = useNavigate();
  return (
    <button
      className={`font-bold rounded-lg text-lg  w-1/12 py-3 bg-cyan-500 hover:bg-blue-500 text-white justify-center ${className}`}
      onClick={(e) => navigate(-1)}
    >
      <FaBackward className="mx-auto" />
    </button>
  );
}
