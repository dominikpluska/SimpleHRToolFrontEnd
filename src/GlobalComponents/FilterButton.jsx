import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

export default function FilterButton({
  SetFilterType,
  filterType,
  filterList,
}) {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);

  function SetActiveFilterAndHideDropDownMenu(buttonName) {
    setShowDropDownMenu(!showDropDownMenu);
    if (buttonName !== filterType) SetFilterType(buttonName);
  }

  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-white bg-cyan-500 px-3 py-3 text-sm font-semibold  hover:bg-blue-500"
        onClick={() => setShowDropDownMenu(!showDropDownMenu)}
      >
        Current Filter : {filterType}
      </button>
      {showDropDownMenu && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="none">
            {filterList.map((x) => {
              return (
                <button
                  key={x.id}
                  className="flex px-4 py-2 text-sm text-gray-700 w-full hover:bg-cyan-100  justify-between"
                  name={x.buttonName}
                  onClick={() =>
                    SetActiveFilterAndHideDropDownMenu(x.buttonName)
                  }
                >
                  <p>{x.buttonText}</p>
                  {filterType === x.buttonName && (
                    <IoCheckmark className="text-xl text-cyan-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
