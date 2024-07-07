import BoxContainer from "../../GlobalComponents/BoxContainer/BoxContainer";
import Loader from "../../GlobalComponents/Loader";
import UpperHeader from "../../GlobalComponents/UpperHeader";
import SearchBar from "../../GlobalComponents/SearchBar";
import FilterButton from "../../GlobalComponents/FilterButton";
import MainTableBody from "../../GlobalComponents/Table/MainTableBody";
import TableHeader from "../../GlobalComponents/Table/TableHeader";
import TableRow from "../../GlobalComponents/Table/TableRow";
import { useEffect, useState } from "react";
import {
  useAllApprovalRequests,
  useAllApprovedApprovalRequests,
  useAllNewApprovalRequests,
  useAllRejectedApprovalRequests,
  useSearchedApprovalRequests,
} from "../../QueryCalls/useApprovalRequests";

const PageHeaders = ["ID", "Approver", "Leave Request", "Status"];

const filterList = [
  {
    id: 1,
    buttonName: "AllApprovalRequests",
    buttonText: "AllApprovalRequests",
  },
  {
    id: 2,
    buttonName: "AllNewApprovalRequests",
    buttonText: "AllNewApprovalRequests",
  },
  {
    id: 3,
    buttonName: "AllApprovedApprovalRequests",
    buttonText: "AllApprovedApprovalRequests",
  },
  {
    id: 4,
    buttonName: "AllRejectedApprovalRequests",
    buttonText: "AllRejectedApprovalRequests",
  },
];

export default function ApprovalRequestsPage() {
  //MainFilter
  const [filterType, setFilterType] = useState("AllApprovalRequests");

  //MainData displayed on the screen
  const [data, setData] = useState(null);

  //State for the Searchbar
  const [searchbarState, setSearchbarState] = useState("");

  //useQuery calls
  const { approvalRequests, isLoadingApprovalRequests } =
    useAllApprovalRequests(filterType);
  const { newApprovalRequests } = useAllNewApprovalRequests(filterType);
  const { approvedApprovalRequests } =
    useAllApprovedApprovalRequests(filterType);
  const { rejectedApprovalRequests } =
    useAllRejectedApprovalRequests(filterType);
  const { searchedApprovalRequests } = useSearchedApprovalRequests(
    filterType,
    searchbarState
  );

  //useEffect which updates the data value
  useEffect(() => {
    if (filterType === "AllApprovalRequests") {
      setData(approvalRequests);
    }
    if (filterType === "AllNewApprovalRequests") {
      setData(newApprovalRequests);
    }
    if (filterType === "AllApprovedApprovalRequests") {
      setData(approvedApprovalRequests);
    }
    if (filterType === "AllRejectedApprovalRequests") {
      setData(rejectedApprovalRequests);
    }
    if (filterType === "SearchedApprovalRequests") {
      setData(searchedApprovalRequests);
    }
  }, [
    approvalRequests,
    newApprovalRequests,
    approvedApprovalRequests,
    rejectedApprovalRequests,
    searchedApprovalRequests,
    filterType,
  ]);

  //Main Component
  return (
    <>
      {isLoadingApprovalRequests ? (
        <Loader loadingText="Loading Data" />
      ) : (
        <BoxContainer>
          <UpperHeader>
            <SearchBar
              searchbarState={searchbarState}
              setSearchbarState={setSearchbarState}
              setFilterType={() => setFilterType("SearchedApprovalRequests")}
              setFilteredTypeCancelSearch={() =>
                setFilterType("AllApprovalRequests")
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
              <TableRow tableRowContent={data ? data : approvalRequests} />
            }
          ></MainTableBody>
        </BoxContainer>
      )}
    </>
  );
}
