import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdClear } from "react-icons/md";

export default function SearchBar({
  searchbarState,
  setSearchbarState,
  setFilteredTypeCancelSearch,
  setFilterType,
}) {
  return (
    <div className="flex">
      <div className="flex relative">
        <input
          className="bg-gray-100 border-2 border-cyan-500 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none focus:bg-gray-200 focus:border-blue-500 pr-12"
          onChange={(e) => setSearchbarState(e.target.value)}
          value={searchbarState}
        />
        {searchbarState.length >= 1 && (
          <button
            className="absolute right-0"
            onClick={() => {
              setFilteredTypeCancelSearch();
              setSearchbarState("");
            }}
          >
            <MdClear className="text-3xl text-cyan-500 hover:text-blue-500 mt-2" />
          </button>
        )}
      </div>

      <button onClick={() => setFilterType()}>
        <HiOutlineMagnifyingGlass className="ml-1 text-4xl text-cyan-500 hover:text-blue-500" />
      </button>
    </div>
  );
}
