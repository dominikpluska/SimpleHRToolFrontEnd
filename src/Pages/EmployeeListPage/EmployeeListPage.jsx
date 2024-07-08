import BoxContainer from "../../GlobalComponents/BoxContainer/BoxContainer";
import { FaPlus } from "react-icons/fa";
import {
  useActiveEmployees,
  useAllEmployees,
  useFilteredEmployees,
  useInactiveEmployees,
} from "../../QueryCalls/EmployeesTable/useEmployees";
import Loader from "../../GlobalComponents/Loader";
import UpperHeader from "../../GlobalComponents/UpperHeader";
import SearchBar from "../../GlobalComponents/SearchBar";
import FilterButton from "../../GlobalComponents/FilterButton";
import MainTableBody from "../../GlobalComponents/Table/MainTableBody";
import TableHeader from "../../GlobalComponents/Table/TableHeader";
import TableRow from "../../GlobalComponents/Table/TableRow";
import { useEffect, useState } from "react";
import MainButton from "../../GlobalComponents/MainButton";
import { Link, useNavigate } from "react-router-dom";

const PageHeaders = [
  "ID",
  "Full Name",
  "Subdivision",
  "Position",
  "People Partner",
  "Is Active",
];

const filterList = [
  {
    id: 1,
    buttonName: "ActiveEmployees",
    buttonText: "Active Employees",
  },
  {
    id: 2,
    buttonName: "InactiveEmployees",
    buttonText: "Inactive Employees",
  },
  {
    id: 3,
    buttonName: "AllEmployees",
    buttonText: "All Employees",
  },
];

export default function EmployeeListPage() {
  //MainFilter
  const [filterType, setFilterType] = useState("AllEmployees");

  //MainData displayed on the screen
  const [data, setData] = useState(null);

  //State for the Searchbar
  const [searchbarState, setSearchbarState] = useState("");

  //useQuery calls
  const { isLoadingEmployees, Employees } = useAllEmployees(filterType);
  const { activeEmployees } = useActiveEmployees(filterType);
  const { InactiveEmployees } = useInactiveEmployees(filterType);
  const { filteredEmployees } = useFilteredEmployees(
    filterType,
    searchbarState
  );

  //useEffect which updates the data value
  useEffect(() => {
    if (filterType === "ActiveEmployees") {
      setData(activeEmployees);
    }
    if (filterType === "InactiveEmployees") {
      setData(InactiveEmployees);
    }
    if (filterType === "AllEmployees") {
      setData(Employees);
    }
    if (filterType === "FilteredEmployees") {
      console.log("dwa");
      setData(filteredEmployees);
    }
  }, [
    InactiveEmployees,
    activeEmployees,
    Employees,
    filterType,
    filteredEmployees,
  ]);

  const navigate = useNavigate();

  //Main Component
  return (
    <>
      {isLoadingEmployees ? (
        <Loader loadingText="Loading Data" />
      ) : (
        <BoxContainer>
          <UpperHeader>
            <SearchBar
              searchbarState={searchbarState}
              setSearchbarState={setSearchbarState}
              setFilteredTypeCancelSearch={() => setFilterType("AllEmployees")}
              setFilterType={() => setFilterType("FilteredEmployees")}
            />
            <div>
              <MainButton
                className="mr-3"
                onClick={() => navigate("/EmployeeList/AddNewEmployee")}
                labelText={
                  <div className="flex mx-auto">
                    <p>Add </p>
                    {<FaPlus className="mt-1" />}
                  </div>
                }
              />
              <FilterButton
                SetFilterType={setFilterType}
                filterType={filterType}
                filterList={filterList}
              />
            </div>
          </UpperHeader>
          <MainTableBody
            tableHead={<TableHeader tableHeadNames={PageHeaders} />}
            tableRows={<TableRow tableRowContent={data ? data : Employees} />}
          ></MainTableBody>
        </BoxContainer>
      )}
    </>
  );
}
