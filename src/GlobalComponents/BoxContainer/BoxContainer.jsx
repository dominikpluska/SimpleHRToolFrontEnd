export default function BoxContainer({ children }) {
  return (
    <div className="flex flex-col h-5/6  ml-[240px] mr-10 mt-20">
      {children}
    </div>
  );
}
