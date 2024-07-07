import BoxContainer from "../../GlobalComponents/BoxContainer/BoxContainer";
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
import {
  useLeaveRequests,
  useNewLeaveRequests,
  useRejectedLeaveRequests,
  useSearchLeaveRequests,
} from "../../QueryCalls/useLeaveRequests";

const PageHeaders = [
  "ID",
  "Employee",
  "AbsenceReason",
  "StartDate",
  "EndDate",
  "Status",
];

const filterList = [
  {
    id: 1,
    buttonName: "AllLeaveRequests",
    buttonText: "All Leave Requests",
  },
  {
    id: 2,
    buttonName: "NewLeaveRequests",
    buttonText: "New Leave Requests",
  },
  {
    id: 3,
    buttonName: "RejectedLeaveRequests",
    buttonText: "Rejected Leave Requests",
  },
];

export default function LeaveRequestPage() {
  //MainFilter
  const [filterType, setFilterType] = useState("AllLeaveRequests");

  //MainData displayed on the screen
  const [data, setData] = useState(null);

  //State for the Searchbar
  const [searchbarState, setSearchbarState] = useState("");

  //useQuery calls
  const { leaveRequests, isLoadingLeaveRequests } =
    useLeaveRequests(filterType);
  const { newLeaveRequests } = useNewLeaveRequests(filterType);
  const { rejectedLeaveRequests } = useRejectedLeaveRequests(filterType);
  const { searchedLeaveRequest } = useSearchLeaveRequests(
    filterType,
    searchbarState
  );

  //useEffect which updates the data value
  useEffect(() => {
    if (filterType === "AllLeaveRequests") {
      setData(leaveRequests);
    }
    if (filterType === "NewLeaveRequests") {
      setData(newLeaveRequests);
    }
    if (filterType === "RejectedLeaveRequests") {
      setData(rejectedLeaveRequests);
    }
    if (filterType === "SearchedLeaveRequests") {
      setData(searchedLeaveRequest);
    }
  }, [
    leaveRequests,
    newLeaveRequests,
    rejectedLeaveRequests,
    searchedLeaveRequest,
    filterType,
  ]);

  //Main Component
  return (
    <>
      {isLoadingLeaveRequests ? (
        <Loader loadingText="Loading Data" />
      ) : (
        <BoxContainer>
          <UpperHeader>
            <SearchBar
              searchbarState={searchbarState}
              setSearchbarState={setSearchbarState}
              setFilterType={() => setFilterType("SearchedLeaveRequests")}
              setFilteredTypeCancelSearch={() =>
                setFilterType("AllLeaveRequests")
              }
            />
            <FilterButton
              SetFilterType={setFilterType}
              filterType={filterType}
              filterList={filterList}
            />
          </UpperHeader>
          <MainTableBody
            tableHead={<TableHeader tableHeadNames={PageHeaders} />}
            tableRows={
              <TableRow tableRowContent={data ? data : leaveRequests} />
            }
          ></MainTableBody>
        </BoxContainer>
      )}
    </>
  );
}
