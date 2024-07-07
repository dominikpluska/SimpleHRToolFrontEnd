import { ThreeDots } from "react-loader-spinner";

export default function Loader({ loadingText }) {
  return (
    <div className="text-center flex flex-col justify-center items-center h-4/5">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        radius="9"
        color="cyan"
        ariaLabel="loading"
      />
      <p className="text-cyan-500 text-2xl">{loadingText}</p>
    </div>
  );
}
