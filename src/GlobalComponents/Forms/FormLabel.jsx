import { MdPlayArrow } from "react-icons/md";
export default function FormLabel({ text }) {
  return (
    <p className="text-2xl flex mb-10">
      <MdPlayArrow className="text-2xl text-cyan-500 mt-1" />
      {text}
    </p>
  );
}
