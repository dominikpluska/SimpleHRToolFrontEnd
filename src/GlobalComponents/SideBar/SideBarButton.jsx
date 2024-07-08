export default function SideBarButton({ children }) {
  return (
    <button className="w-3/4 transition py-2 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-800 hover:bg-opacity-50 duration-300 mb-5">
      {children}
    </button>
  );
}
